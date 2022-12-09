import React, { useEffect } from 'react'
import { connect } from 'react-redux';
// import { setQuestion, setSelectedAnswer, setFalseAnswer, setTrueAnswer, } from '../state/action-types'
import { fetchQuiz, selectAnswer, setMessage, postAnswer } from '../state/action-creators';

function Quiz(props) {
  console.log(props);

  // const { question, quiz_id, answers, qui } = props;
  const { quiz } = props;

  useEffect(() => {
    if (!props.quiz) {
      props.fetchQuiz();
    }
  }, [])

  function onSubmit() {

    const quizData = {
      quiz_id: props.quiz.quiz_id,
      answer_id: props.selectedAnswer
    }

    console.log(quizData)

    props.postAnswer(quizData);
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
                <button onClick={() => { props.selectAnswer(quiz.answers[0].answer_id) }}>
                  {quiz.answers[0].answer_id === props.selectedAnswer ? 'SELECTED' : 'Select'}
                </button>
                {quiz.answers[0].text}
              </div>

              <div className={`answer ${quiz.answers[1].answer_id === props.selectedAnswer ? 'selected' : ''}`}>

                <button onClick={() => { props.selectAnswer(quiz.answers[1].answer_id) }}>
                  {quiz.answers[1].answer_id === props.selectedAnswer ? 'SELECTED' : 'Select'}
                </button>
                {quiz.answers[1].text}
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={() => {onSubmit()}}>Submit answer</button>
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