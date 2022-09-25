import axios from "axios";
import selectToken from "../user/selectors";
import { setStories } from "./slice"


// request stories from backend & save them to the state
// todo:set app loading state!
export const loadStories = () => {
    return async (dispatch, getState) => {
        try {
            const url = "http://localhost:4000/stories"
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