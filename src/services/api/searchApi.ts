import axios from "axios";

export const SearchApi = {
    fetchSearchApi(payload: any): Promise<any> {
        return axios.get('http://localhost:3001/news?q='+payload).then(({data}) => data);
    },
};
