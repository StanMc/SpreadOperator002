import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDoItemList, setToDoItemList] = useState(["paint wall", "dust"]);

  function inputOnChangeHandler(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function buttonAddHandler(event) {
    setToDoItemList((prevValue) => {
      return [...prevValue, inputText];
    });
  }

  function buttonConsoleLogHandler(event) {
    console.log(toDoItemList);
    console.log(inputText);
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={inputOnChangeHandler} value={inputText} type="text" />
        <button onClick={buttonAddHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item </li>
        </ul>
      </div>
      <button onClick={buttonConsoleLogHandler}>
        <span> Console Log </span>
      </button>
    </div>
  );
}

export default App;
