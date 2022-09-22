import axios from "axios";
import selectToken from "../user/selectors";
import { setStories } from "./slice"


export const loadStories = () => {
    return async (dispatch, getState) => {
        try {
            const url = "http://localhost:4000/story"
            const token = getState(selectToken);
            const headers = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = axios.get(url, headers);
            dispatch(setStories(response.data));
        } catch (e) {
            console.log(e)
        }
    }
}