import './App.css';
import React from 'react'
import Login from './components/Login';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route
  // Link
} from "react-router-dom";
import Page from './components/Page';
import ToDoList from './components/ToDoList';
import List from './components/List';
import ToDoList1 from './components/ToDoList1';
import ToDoList2 from './components/ToDoList2';
// import Showtodo from './components/showToDo';

function App() {

  // const [input, setinput] = useState("")
  // const [todos, settodos] = useState([])
  return (
    <>
    
    <div>
    <Router>
      <Routes>
      <Route exact path="/" element={<Page/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/list" element={<ToDoList/>} />
        <Route exact path="/list1" element={<ToDoList1/>} />
        <Route exact path="/list2" element={<ToDoList2/>} />
        <Route exact path="/btns" element={<List/>} />
      </Routes>
      </Router>
   
      {/* <Page/> */}
      {/* <Todo/> */}
    </div>
    </>
  );
}

export default App;
