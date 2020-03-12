import React from 'react';

function AddInput() {

  const [answerOne, setAnswerOne] = React.useState("");
  const [answerTwo, setAnswerTwo] = React.useState("");
  const [answerThree, setAnswerThree] = React.useState("");


  function handleSubmit(event) {
    event.preventDefault();
    const poll = {
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree
    };

    fetch(
      process.env.REACT_APP_API ||
        "https://my-json-server.typicode.com/SebastianStupp/Choose-Wisely/posts",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(poll)
      }
    );
  }

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
      <button>Button des Button wegens</button>
    </form>
  );
}

export default AddInput;
