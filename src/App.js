import { useState } from "react";

import uuid from "react-uuid";
import "./styles.css";

//Map To DO item Component
function MapTodo({ item, id, index, settodoList, setusertodo, todolist }) {
  const [deleteToggle, setdeleteToggle] = useState(false);
 

  function checkToggle(id) {
    if (id.target.checked) {
      setdeleteToggle(true);
    } else {
      setdeleteToggle(false);
    }
  }

  function deleteHandler(id) {
    
    const newtodo = todolist.filter((items) => items.id !== id);
    
    settodoList(newtodo)
   
 
  }

  return (
    <div>
      <li style={{ listStyle: "none", margin: "1em" }}>
        {item.text}

        <input onClick={checkToggle} type="checkbox"></input>
        <button
          disabled={deleteToggle ? "" : "disabled"}
          onClick={(e) => deleteHandler(id)}
        >
          {" "}
          x{" "}
        </button>
      </li>
    </div>
  );
}

function TodoApp() {
  const [todolist, settodoList] = useState([
    {
      id: uuid(),
      text: "testing"
    }
  ]);

  const [usertodo, setusertodo] = useState({ id: uuid(), text: "" });

  function onChangeHandler(event) {
    const finaluserTodo = event.target.value;
    setusertodo({
      id: uuid(),
      text: finaluserTodo
    });
  }
  // add todo function

  function addToDo() {
    settodoList([usertodo, ...todolist]);
    setusertodo({ id: uuid(), text: "" });
    document.getElementById("InputID").value = null;
  }

  return (
    <div>
      <input
        id="InputID"
        style={{ width: "55%", height: "5vh", margin: "1em" }}
        placeholder="add todo"
        onChange={onChangeHandler}
      ></input>
      <br />
      <button onClick={addToDo}>Add to do</button>
      <br />
      <span>
        <b>Your Todo</b>
      </span>
      {todolist.map((item, index) => (
        <MapTodo
          key={item.id}
          id={item.id}
          todolist={todolist}
          index={index}
          setusertodo={setusertodo}
          settodoList={settodoList}
          item={item}
        />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      Todo App
      <TodoApp />
    </div>
  );
}
