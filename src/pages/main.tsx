import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CommentIcon } from "../component/comment/commentIcon";
import { RootState } from "../redux/store";
export const Main: React.FC = ():React.ReactElement => {
    const {news} = useSelector((state : RootState ) => {
        return {
            news: state.news.items,
        }
    });
    return (
        <div className="main">
            <div className="container">
                <div className="news-items">
                {
                news.map((item:any) => {
                    return (
                        <Link to={`/${item.id}`} key={item.id}>
                            <div className="news-item">
                                <p className="news-title">
                                    {item.title}
                                </p>
                                <p className="news-text">
                                    {
                                        item.text &&
                                        item.text.split('.', 1)
                                    }
                                </p>
                                <div>
                                    <CommentIcon comments={item.comments} />
                                </div>
                            </div>
                        </Link>
                     )
                    })
                }
                </div>
            </div>
        </div>
    )
};
