import axios from "axios";
import selectToken from "../user/selectors";
import { setSpaces } from "./slice"


export const loadSpaces = () => {
    return async (dispatch, getState) => {
        try {
            const url = "http://localhost:4000/space"
            const token = getState(selectToken);
            const headers = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = axios.get(url, headers);
            dispatch(setSpaces(response.data));
        } catch (e) {
            console.log(e)
        }
    }
}
