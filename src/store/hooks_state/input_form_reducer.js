import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
    user_text_change: "",
    user_form_submit: ""
}

export const FormReducer = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.USER_INPUT_CHANGE:
        return {
          ...state,
          user_text_change: action.payload
        }
      case ACTION_TYPES.USER_INPUT_SUBMIT:
        return {
          ...state,
          user_form_submit: action.payload
        }
      default:
        return state
    }
}
