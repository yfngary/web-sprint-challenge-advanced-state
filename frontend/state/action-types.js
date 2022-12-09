// ❗ You don't need to add extra action types to achieve MVP
export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE'
export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE'
export const SET_QUIZ_INTO_STATE = 'SET_QUIZ_INTO_STATE'
export const SET_SELECTED_ANSWER = 'SET_SELECTED_ANSWER'
export const SET_QUESTION = 'SET_QUESTION'
export const SET_TRUE_ANSWER = 'SET_TRUE_ANSWER'
export const SET_FALSE_ANSWER = 'SET_FALSE_ANSWER'
export const SET_INFO_MESSAGE = 'SET_INFO_MESSAGE'
export const INPUT_CHANGE_QUESTION = 'INPUT_CHANGE_QUESTION'
export const INPUT_CHANGE_TRUE = 'INPUT_CHANGE_TRUE'
export const INPUT_CHANGE_FALSE = 'INPUT_CHANGE_FALSE'
export const INPUT_CHANGE = 'INPUT_CHANGE'
export const RESET_FORM = 'RESET_FORM'

export const moveClockwise = () => {
    return({type: MOVE_CLOCKWISE})
}

export const moveCounterClockwise = () => {
    return({type: MOVE_COUNTERCLOCKWISE})
}

export const setQuiz = (data) => {
    return({type: SET_QUIZ_INTO_STATE, payload: data})
  }

// export const setQuestion = (question) => {
//     return({type: SET_QUESTION, payload: question})
// }

// export const setTrueAnswer = (trueAnswer) => {
//     return({type: SET_TRUE_ANSWER, payload: trueAnswer})
// }

// export const setFalseAnswer = (falseAnswer) => {
//     return({type: SET_FALSE_ANSWER, payload: falseAnswer})
// }

// export const setSelectedAnswer = (selectedAnswer) => {
//     return({type: SET_SELECTED_ANSWER, payload: selectedAnswer})
// }
