/*
Your task is to enhance the demo app that's given to you such that clicking the "Yes" and "No" buttons changes the styling of the h1 heading element.

Whenever the "Yes" button is clicked, the "highlight-green" CSS class should be set on the h1 element. For the "No" button, it's the "highlight-red" class that must be applied.

If not button was clicked yet, no CSS class should be added to the h1 element.

Important: In this Udemy exercise environment, React hooks must be used directly on the imported React object (import React from 'react'). For example, useState would then be called like this: React.useState().
*/



import React from 'react';

function App() {
  const [highlight, setHighlight] = React.useState("");

  let h1Class = "";
  if (highlight === "green") {
    h1Class = "highlight-green";
  } else if (highlight === "red") {
    h1Class = "highlight-red";
  }

  return (
    <div id="app">
      <h1 className={h1Class}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setHighlight("green")}>Yes</button>
        </li>
        <li>
          <button onClick={() => setHighlight("red")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
