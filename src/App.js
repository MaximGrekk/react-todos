import React from 'react';
// import ReactDOM from 'react-dom';
import ToDoForm from './components/ToDoForm'

const styles = {
  title: {
    textAlign: "center",
    paddingTop: "1.5em",

  }
}

function App() {
  return (
    <>
      <h1 style={styles.title}>To Do List</h1>
      <ToDoForm name="Artem"/>
    </>
  );
}

export default App;
