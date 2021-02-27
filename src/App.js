import "./styles.css";

import { useState } from "react";
import "./styles.css";

function MapObjects(item) {
  const [removetodo, setremovetodo] = useState(false);

  function onChnageHandlerShow() {
    setremovetodo(!removetodo);
  }

  return (
    <li>
      {item.text}
      <input onChange={onChnageHandlerShow} type="checkbox"></input>
      {removetodo ? <button>delete</button> : ""}
    </li>
  );
}

function TodoList({ todoList, settodoList }) {
  const [usetodo, setusetodo] = useState({
    text: ""
  });
  function addHandler() {
    settodoList({ ...todoList, text: usetodo });
  }
  function onChnageHandler(event) {
    const abd = event.target.value;
    setusetodo({ text: abd });
  }
  return (
    <div>
      <input
        onChange={onChnageHandler}
        style={{ width: "50%", height: "10vh" }}
        placeholder="add to do"
      ></input>
      <br />
      <button onClick={addHandler}>Add to do</button>
      {todoList.map((item, i) => (
        <MapObjects item={item} key={i} />
      ))}
    </div>
  );
}
export default function App() {
  const [todoList, settodoList] = useState([
    {
      id: Math.random(),
      text: "gf",
      completed: false
    },
    {
      text: "",
      completed: false
    }
  ]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <TodoList todoList={todoList} settodoList={settodoList} />

      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
