import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {LoadingState} from "../../redux/ducks/articles/contracts/state";
import { FetchComment } from "../../redux/ducks/comment/actionCreators";
import Ava from '../../img/default-avatar.png'
export const Comment:React.FC<any> = ():React.ReactElement | null => {
    const { comments, loadingState} = useSelector((state : RootState ) => {
        return {
            comments: state && state.article.data,
            loadingState : state && state.comment.loadingState
        }
    });
    let [name, setName] = React.useState<string>('');
    let [email, setEmail] = React.useState<string>('');
    let [tel, setTel] = React.useState<string>('');
    let [text, setText] = React.useState<string>('');
    let commentsInfo = comments && comments.comments;
    let newsId = comments && comments.id;

    const [textIsEmpty, setTextIsEmpty] = React.useState<boolean>(false);

    let dispatch = useDispatch();

    const onChangeTextarea = (e:any):void => {
        setText(e.currentTarget.value);
    };

    const onChangeName = (e:any):void => {
        setName(e.currentTarget.value);
    };

    const onChangeEmail = (e:any):void => {
        setEmail(e.currentTarget.value);
    };

    const onChangeTel = (e:any):void => {
        setTel(e.currentTarget.value);
    };

    const onSend = ():void => {
        let date = new Date();
        let month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        let relDate = date.getDate() + '.' + month[date.getMonth()] + '.' + date.getFullYear();
        let data = {
            newsId: newsId,
            date: relDate,
            text: text,
            user: {
                name: name,
                email: email,
                tel: tel
            }
        };
        setText('');
        if (text.length === 0) {
            setTextIsEmpty(true)
        }
        else {
            dispatch(FetchComment(data));
            setTextIsEmpty(false)
        }
    };
    return (
        <div className={'comment-items'}>
            <div className={'comment-add'}>

                <div className={'comment-add__text'}>
                    <input type="text" 
                        placeholder="ФИО" 
                        className="comment-add__input" 
                        value={name} 
                        onChange={(e) => onChangeName(e)}
                    />
                    <input type="email" 
                        placeholder="email" 
                        className="comment-add__input" 
                        value={email} 
                        onChange={(e) => onChangeEmail(e)}
                    />
                    <input type="text" 
                        placeholder="Телефон" 
                        className="comment-add__input" 
                        value={tel} 
                        onChange={(e) => onChangeTel(e)}
                    />
                    <textarea className={'comment-add__text-textarea'}
                        placeholder={"Напишите комментарий"}
                        value={text}
                        onChange={(e) => onChangeTextarea(e)}
                    />
                    {
                        textIsEmpty ? <p> Напешите коментари </p> : ''
                    }
                    <button className={'comment-add__btn'} onClick={onSend}>
                        {loadingState === LoadingState.LOADING ? 'Отправка' : 'Отправить'}
                    </button>
                </div>
            </div>
            <div className={'comment-lists'}>
                {
                    commentsInfo && commentsInfo.length === 0
                        ?
                        <p> Пака нет комментарий </p>
                        :
                        commentsInfo && commentsInfo.map((item: any) => {
                        return (
                            <div className={'comment-list'} key={item.id}>
                                <div className={'comment-list__photo'}>
                                    <img src={Ava} alt='#' className={'comment-list__img'}/>
                                </div>
                                <div className={'comment-list__text'}>
                                    <p className={'comment-list__user-info'}>
                                        <span className={'comment-list__date'}>ФИО: {item.user.name}</span>
                                        <span className={'comment-list__date'}>Email: {item.user.email}</span>
                                        <span className={'comment-list__date'}>дата: {item.date}</span>
                                    </p>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        )
                    }).reverse()
                }
            </div>
        </div>
    )
};
