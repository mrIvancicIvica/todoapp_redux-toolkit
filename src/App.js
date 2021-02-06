import React from "react";
import Input from "./components/Input/Input.jsx";
import Tasks from './components/Tasks.jsx';

function App() {
  return (
    <div className='app'>
      <Tasks />
      <Input />
    </div>
  );
}

export default App;
