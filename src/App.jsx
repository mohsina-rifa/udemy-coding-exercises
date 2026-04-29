/*
Your task is to collect the values entered into the two input controls (<textarea> and <input>) via two-way binding.

In addition, you should pass the collected values via the appropriate props to the already existing Review component.

Important: In this Udemy workspace, you must use React.useState() instead of just useState()!

The final app should allow users to enter values and then see those entered values in the Review component which is output below the input components.

The "Save" button is just there for decoration purposes - you don't need to do anything with that!
*/



import React from 'react';
import Review from './Review';

// don't change the Component name "App"
function App() {
  const [feedback, setFeedback] = React.useState('');
  const [student, setStudent] = React.useState('');

  function handleFeedbackChange(event) {
    setFeedback(event.target.value);
  }

  function handleStudentChange(event) {
    setStudent(event.target.value);
  }

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedback} onChange={handleFeedbackChange} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={student} onChange={handleStudentChange} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={student} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;
