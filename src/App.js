import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateExercise from "./components/CreateExercise";
import EditExercise from "./components/EditExercise";
import ExerciseList from "./components/ExerciseList";
import CreateUser from "./components/CreateUser";
import Navibar from "./components/Navbar";
import './App.css';


function App() {
  return (
    <div className="App">
        
      <Router>
      <Navibar/>
      <br/>
      <h3><a href="https://www.youtube.com/watch?v=7CqJlxBYj-M">Learn the MERN Stack tutorial</a></h3>

      <Switch>
      <Route path="/" exact component={ExerciseList}/>
      <Route path="/edit/:id" component={EditExercise}/>
      <Route path="/create" component={CreateExercise}/>
      <Route path="/user" component={CreateUser}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
