import { emailService } from "../../services/email-service"
export const SET_EMAILS = 'SET_EMAILS'
export const ADD_EMAIL = 'ADD_EMAIL'
export const REMOVE_EMAIL = 'REMOVE_EMAIL'
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const SET_FILTER_BY = 'SET_FILTER_BY'

const INITIAL_STATE = {
    emails: emailService.getEmails(),
}

export function emailReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_EMAILS:
            return {
                ...state,
                emails: action.emails
            }
        case ADD_EMAIL:
            return {
                ...state,
                emails: [...state.emails, action.email]
            }
        case REMOVE_EMAIL:
            return {
                ...state,
                emails: state.emails.filter(email => email._id !== action.emailId)
            }
        case UPDATE_EMAIL:
            return {
                ...state,
                emails: state.emails.map(email => email._id === action.email._id ? action.email : email)
            }
        case SET_FILTER_BY:
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }

        default:
            return state;
    }
}