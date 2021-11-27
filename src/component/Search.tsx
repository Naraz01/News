import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {FetchSearch} from "../redux/ducks/search/actionCreators";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";

export const Search: React.FC = ():React.ReactElement => {
    let [value, setValue] = React.useState<string>('');
    let dispatch = useDispatch();
    const {search} = useSelector((state : RootState ) => {
        return {
            search: state.search.items,
        }
    });
    const onChangeSearch = (e:any):void => {
        setValue(e.currentTarget.value);
        dispatch(FetchSearch(value));
    };
    return (
        <div className="search">
            <div className="search-input">
                <input type="search" value={value} onChange={(e) => onChangeSearch(e)} placeholder='Поиск'/>
            </div>
            {
              value.length > 0 ?
                <div className="search-result">
                    {
                        search.map((item, i) => {
                            return (
                                <Link to={`/${item.id}`} key={i} className='search-result__item'>
                                    {item.title}
                                </Link>
                            )
                        })
                    }
                </div>
                :
                ''
            }

        </div>
    )
};
