// ❗ You don't need to add extra action creators to achieve MVP
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE} from "./action-types"
import axios from "axios"
import React from "react"

export const moveClockwise = () => {
  return({type: MOVE_CLOCKWISE})
}

export const moveCounterClockwise = () => {
  return({type:MOVE_COUNTERCLOCKWISE})
}

export function selectAnswer(selectedId) { 
  return({type: SET_SELECTED_ANSWER, payload: selectedId})
}

export function setMessage(serverMessage) {
  return({type: SET_INFO_MESSAGE, payload: serverMessage})
}

export function setQuiz(data) {
  return({type: SET_QUIZ_INTO_STATE, payload: data})
}

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setQuiz(null));
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res =>{
        dispatch(setQuiz(res.data));
        dispatch(selectAnswer(null));
      })

    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}

export function postAnswer(quizData) {
  return function (dispatch) {
    // dispatch(setQuiz(null));
    axios.post('http://localhost:9000/api/quiz/answer', quizData)
      .then(res => {
        dispatch(selectAnswer(null));
        dispatch(setMessage(res.data.message))
        dispatch(fetchQuiz());
      })
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
