import React, { useState, useReducer } from "react";
import TODO from "./TODO";

function reducerFN(todos, action) {
  switch (action.type) {
    case "add_todo":
      return [...todos, newTodo(action.payload.name)];
    case "toggle":
      return todos.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, complete: !el.complete };
        }
        return el;
      })
      case "delete":
        return  todos.filter(item =>  item.id !== action.payload.id )
    default:
      return todos
    }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complite: false };
}

function App() {
  const [todosST, dispatchFN] = useReducer(reducerFN, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchFN({ type: "add_todo", payload: { name: name } });
    setName("");
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      {todosST.map((item, index) => {
        return <TODO key={index} item={item} dispatchFN={dispatchFN} />;
      })}
    </div>
  );
}

export default App;
