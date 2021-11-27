import React from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { FetchArticle } from '../redux/ducks/articles/actionCreators';
import { RootState } from "../redux/store";
import { Comment } from '../component/comment';
export const Articles:React.FC = ():React.ReactElement | null => {
    const {article} = useSelector((state : RootState ) => {
        return {
            article: state.article.data,
        }
    });
    const params: {id:any} = useParams();
    const id = params.id;
    const dispatch = useDispatch();
    React.useEffect(() => {

        dispatch(FetchArticle(id))
        console.log(params);
    }, []);

    if (!article) {
        return null
    }
    return (
        <div className='article-page'>
            <div className='container'>
                <div className='article'>
                    <p className='article-title'>
                        {article.title}
                    </p>
                    <p className='article-text'>
                        {article.text}
                    </p>
                    <Comment comments = {article.comments}/>
                </div>
            </div>
        </div>
    )
};
