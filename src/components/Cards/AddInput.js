import React from 'react';

function AddInput() {
  const [answerOne, setAnswerOne] = React.useState('Test');
  const [answerTwo, setAnswerTwo] = React.useState('Test');
  const [answerThree, setAnswerThree] = React.useState('Test');

  function handleSubmit(event) {
    event.preventDefault();
  }

  const poll = [answerOne, answerTwo, answerThree];

  const pollString = JSON.stringify(poll);

  alert(pollString);

  return (
    <form className="formInput" onSubmit={handleSubmit}>
      <input
        className="answerOne"
        value={answerOne}
        onChange={event => {
          setAnswerOne(event.target.value);
        }}
      ></input>

      <input
        className="answerTwo"
        value={answerTwo}
        onChange={event => {
          setAnswerTwo(event.target.value);
        }}
      ></input>
      <input
        className="answerThree"
        value={answerThree}
        onChange={event => {
          setAnswerThree(event.target.value);
        }}
      ></input>
    </form>
  );
}

export default AddInput;
