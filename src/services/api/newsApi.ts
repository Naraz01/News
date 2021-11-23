import axios from "axios";

export const NewsApi = {
    fetchNews() {
        return axios.get('http://localhost:3001/news?_embed=comments').then(({data}) => data);
    },
};
