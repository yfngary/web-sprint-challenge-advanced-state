import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postQuiz, inputChange } from '../state/action-creators'

export function Form(props) {

  const { form } = props;

  const [disabled, setDisabled] = useState(true);

  const checkDisabled = () => {
    if(form.newQuestion.trim() && form.newFalseAnswer.trim() && form.newTrueAnswer.trim()){
      return false;
    } else {
      return true; 
    }
  }

  const onChange = evt => {
    props.inputChange(evt.target)
  }

  // const onChange1 = evt => {
  //   inputChange1(evt.target.value)
  // }

  // const onChange2 = evt => {
  //   evt.preventDefault();
  //   inputChange2(evt.target.value)
  // }

  // const onChange3 = evt => {
  //   evt.preventDefault();
  //   inputChange3(evt.target.value)
  // }

console.log(props)

  const onSubmit = evt => {
    evt.preventDefault();
    const newQuiz = {
      question_text: form.newQuestion,
      true_answer_text: form.newTrueAnswer,
      false_answer_text: form.newFalseAnswer
    }
    props.postQuiz(newQuiz)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input name="newQuestion" maxLength={50} minLength={1} onChange={onChange} id="newQuestion" value={form.newQuestion} placeholder="Enter question" />
      <input name="newTrueAnswer" maxLength={50} minLength={1} onChange={onChange} id="newTrueAnswer" value={form.newTrueAnswer} placeholder="Enter true answer" />
      <input name="newFalseAnswer" maxLength={50} minLength={1} onChange={onChange} id="newFalseAnswer" value={form.newFalseAnswer} placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={checkDisabled()}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { inputChange, postQuiz } )(Form)
