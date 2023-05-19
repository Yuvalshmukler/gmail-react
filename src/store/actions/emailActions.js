import { emailService } from "../../services/email-service"
import { REMOVE_EMAIL, SET_FILTER_BY, SET_EMAILS } from "../reducers/emailReducer"

export function loadEmails() {
    return async (dispatch, getState) => {
        try {
            const emails = await emailService.query()
            const action = {
                type: SET_EMAILS,
                emails
            }
            dispatch(action)
        } catch (error) {
            console.log('error:', error)
        }
    }
}
export function setEmail(email) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_EMAIL', email });
        } catch (err) {
            console.log(err);
        }
    };
}
