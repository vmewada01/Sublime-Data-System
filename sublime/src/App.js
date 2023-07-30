import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import FormBuilder from "./Components/FormBuilder";
import FormList from "./Components/FormList";

const App = () => {
  return (
    <>
      <FormBuilder />
      <FormList />
    </>
  );
};

export default App;
