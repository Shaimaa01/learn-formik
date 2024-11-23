/* eslint-disable no-unused-vars */
import React from "react";
import "./styles.css";
import SignupForm1 from "./SignupForm1";
import SignupForm2 from "./SignupForm2";
import SignupForm3 from "./SignupForm3";
import SignupForm4 from "./SignupForm4";
import SignupForm5 from "./SignupForm5";
import SignupForm6 from "./SignupForm6";
import SignupForm7 from "./SignupForm7";
import SignupForm8 from "./SignupForm8";
import SignupForm9 from "./SignupForm9";

function App() {
  return (
    <div>
      <h1>Formik Tutorial</h1>
      <br />
      <h2>SignUpForm1</h2>
      <SignupForm1 />
      <br />
      <h2>SignUpForm2</h2>
      <SignupForm2 />
      <br />
      <h2>SignUpForm3 Validation</h2>
      <SignupForm3 />
      <br />
      <h2>SignUpForm4 Visited fields</h2>
      <SignupForm4 />
      <br />
      <h2>SignUpForm5 Schema Validation with Yup</h2>
      <SignupForm5 />
      <br />
      <h2>SignUpForm6 Reducing Boilerplate</h2>
      <SignupForm6 />
      <br />
      <h2>SignUpForm7 Leveraging React Context</h2>
      <SignupForm7 />
      <br />
      <h2>SignUpForm8 simple</h2>
      <SignupForm8 />
      <br />
      <h2>SignUpForm9</h2>
      <SignupForm9 />
    </div>
  );
}

export default App;
