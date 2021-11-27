// @ts-ignore
import React from "react";
import {Link} from "react-router-dom";
export const News: React.FC = ({news}:any):React.ReactElement | null => {
    if (!news) {
        return null
    };

    return (
        <Link to={`news/${news.id}`} key={news.id}>
            <div className="news-item">
                <p className="news-body__title">
                    {news.title}
                </p>
                <p className="news-body__text">
                    {
                        news.text &&
                        news.text.split('.', 1)
                    }
                </p>
            </div>
        </Link>
    )
};
