import Answers from "./Answers";
import QuestionTImer from "./QuestionTImer";

const Question = ({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkip,
}) => {
  return (
    <div id="question">
      <QuestionTImer timeout={10000} onTimeout={onSkip} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
};

export default Question;
