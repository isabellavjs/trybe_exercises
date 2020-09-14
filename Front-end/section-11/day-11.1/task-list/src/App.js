import React from 'react';
import './App.css';

const toDoList = ['cook', 'study', 'dishes', 'dog walk'];

const Tasks = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>
      {toDoList.map(todo => Tasks(todo))}
    </ul>
  );
}

//function App() {
  //return toDoList.map(item => <Tasks value={item} />);
//}

export default App;
