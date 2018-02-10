import React, { Component } from 'react';
import { Router, Route } from "react-router-dom"
import SignUp from "./components/singUp"
import LogInComponent from "./components/login"
import history from "./History"
import MainComponent from "./components/Quiz_component"
import NaveComponent from "./components/Quiz_component/navebar"
import QuizQusAndOption from "./components/Quiz_component/Quiz_Qus_Ans"
import ResultComponent from './components/Quiz_component/result'

class Routers extends Component{
    render(){
       return(
         <Router history={history}>
            <div>
              <NaveComponent/>              
              <Route exact path="/" component={SignUp} />
              <Route exact path="/login" component={LogInComponent} />
              <Route exact path="/Quiz_Qus_Ans" component={QuizQusAndOption} />
              <Route exact path="/Quiz_component" component={MainComponent} />              
              <Route exact path="/result" component={ResultComponent} />              
             </div>
         </Router>
       )
    }
    
}


export default Routers