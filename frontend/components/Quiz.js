import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
// import { setQuestion, setSelectedAnswer, setFalseAnswer, setTrueAnswer, } from '../state/action-types'
import { fetchQuiz, selectAnswer, setMessage, postAnswer } from '../state/action-creators';

function Quiz(props) {
  // console.log(props);

  // const { question, quiz_id, answers, qui } = props;
  const { quiz } = props;

  useEffect(() => {
    if (!props.quiz) {
      props.fetchQuiz();
    }
  }, [])

  const [isDisabled, setIsDisabled] = useState(true);
console.log(isDisabled);
  function onSubmit() {

    const quizData = {
      quiz_id: props.quiz.quiz_id,
      answer_id: props.selectedAnswer
    }

    // console.log(quizData)

    props.postAnswer(quizData);
    props.setMessage(props.infoMessage);
  }
    

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">

              <div className={`answer ${quiz.answers[0].answer_id === props.selectedAnswer ? 'selected' : ''}`}>
                <button onClick={() => { props.selectAnswer(quiz.answers[0].answer_id); setIsDisabled(false)}}>
                  {quiz.answers[0].answer_id === props.selectedAnswer ? 'SELECTED' : 'Select'}
                </button>
                {quiz.answers[0].text}
              </div>

              <div className={`answer ${quiz.answers[1].answer_id === props.selectedAnswer ? 'selected' : ''}`}>

                <button onClick={() => { props.selectAnswer(quiz.answers[1].answer_id); setIsDisabled(false)}}>
                  {quiz.answers[1].answer_id === props.selectedAnswer ? 'SELECTED' : 'Select'}
                </button>
                {quiz.answers[1].text}
              </div>
            </div>
           <button id="submitAnswerBtn" onClick={() => {onSubmit(); setIsDisabled(true)}} disabled={isDisabled} >Submit answer</button> 
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  // console.log(state);
  return state

}

export default connect(mapStateToProps, { fetchQuiz, selectAnswer, setMessage, postAnswer })(Quiz);