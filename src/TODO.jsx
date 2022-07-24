import React from "react";

let complete = {
  backgroundColor: "green",
};
let notComplete = {
  backgroundColor: "red",
};

function TODO({ item, dispatchFN }) {
  return (
    <div style={item.complete ? complete : notComplete}>
          <p>{item.name}</p>
            <button onClick={() => {  dispatchFN({ type: "delete", payload: { id: item.id} })}}>Complete</button>
          <button onClick={() => {  dispatchFN({ type: "toggle", payload: { id: item.id} })}}>Toggle</button>
    </div>
  );
}

export default TODO;
