import imgLogo from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={imgLogo} alt="logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
};

export default Header;
