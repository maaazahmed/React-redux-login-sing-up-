import React, { Component } from 'react';
import { connect } from "react-redux"
import {
   quizAction,
   scoreAction,
   addQuizAction,
   correctQuizAction } from "../../store/action/action"
import firebase from 'firebase'
import history from '../../History'

let database = firebase.database().ref("/")
class QuizComponent extends Component {

  constructor(){
    super()
    this.radioHandler = this.radioHandler.bind(this)
    this.nextButon = this.nextButon.bind(this)
    this.startQuiz = this.startQuiz.bind(this)
    this.endButon = this.endButon.bind(this)
    this.state = {
      radioGroup:{
        Option_1:false,
        Option_2:false,
        Option_3:false,
        Option_4:false,
      },
      radioGroupValue:"",
      falge:false
    }
    
  }

  componentWillMount(){
    database.child("Quiz/quiz-que-option").on("child_added",(snapsht)=>{
      let obj = snapsht.val()
      obj.id = snapsht.key;
     this.props.addQuiz(obj)
    })
    database.child("Quiz/correct").on("child_added",(snapsht)=>{
      let obj_2 = snapsht.val()
      obj_2.id = snapsht.key;
     this.props.correctQuizAction(obj_2)
    })
  }
  
  radioHandler(ev){
     let radioGroup = this.state.radioGroup;
     for(var key in radioGroup){
       radioGroup[key] = false
     }
     radioGroup[ev.target.checked] = ev.target.checked
        this.setState({
      radioGroupValue : ev.target.value,
    })
    
  }

  nextButon(){ 
      let allCorrectAns = this.props.root.correctAns

      this.props.quiz_chack(1)
      for(var i = 0; i < allCorrectAns.length;i++){
        if(allCorrectAns[i].correctAns === this.state.radioGroupValue){
          console.log(allCorrectAns[i].correctAns ,"===", this.state.radioGroupValue)
          this.props.score_chack(1)
        }
      }
  }

  endButon(){
    history.push("/result")
  }

 
  startQuiz(){
    this.setState({
      falge:true,
    })
  }

  render() {
    return (
     <div> 
       {(this.state.falge === true)?
       <div>
         <h3>{this.props.root.qusAndOptionArr[this.props.root.counter].Question}</h3>
        <div className="radio">
          <label>
            <input type="radio" name="option"
              value={this.props.root.qusAndOptionArr[this.props.root.counter].Option1} 
              checked={this.state.radioGroup.Option_1[this.props.root.qusAndOptionArr[this.props.root.counter].Option1]}
               onChange={this.radioHandler} />
               {this.props.root.qusAndOptionArr[this.props.root.counter].Option1}
           </label>
         </div>
         <div className="radio">
          <label>
            <input type="radio" name="option"
              value={this.props.root.qusAndOptionArr[this.props.root.counter].Option2} 
              checked={this.state.radioGroup.Option_2[this.props.root.qusAndOptionArr[this.props.root.counter].Option_2]}
               onChange={this.radioHandler} />
               {this.props.root.qusAndOptionArr[this.props.root.counter].Option2}
           </label>
         </div>
         <div className="radio">
          <label>
            <input type="radio" name="option"
              value={this.props.root.qusAndOptionArr[this.props.root.counter].Option3} 
              checked={this.state.radioGroup.Option_3[this.props.root.qusAndOptionArr[this.props.root.counter].Option3]}
               onChange={this.radioHandler} />
               {this.props.root.qusAndOptionArr[this.props.root.counter].Option3}
           </label>
         </div>
         <div className="radio">
          <label>
            <input type="radio" name="option"
              value={this.props.root.qusAndOptionArr[this.props.root.counter].Option4} 
              checked={this.state.radioGroup.Option_4[this.props.root.qusAndOptionArr[this.props.root.counter].Option4]}
               onChange={this.radioHandler} />
               {this.props.root.qusAndOptionArr[this.props.root.counter].Option4}
           </label>
         </div>
           {(this.props.root.counter + 1 !==  this.props.root.qusAndOptionArr.length)?
           
           <div>
             <button onClick={this.nextButon} type="button" className="btn btn-primary">Next</button>
          </div>
           : 
           <div>
             <button onClick={this.endButon} type="button" className="btn btn-primary">End</button>
           </div>
          }

         </div>
       
        :
          <div>
             <h1>Start Quiz</h1>
            <button onClick={this.startQuiz} type="button" className="btn btn-primary">Start</button>
         </div>
       }

      </div>     
    );
  }
}

const mapStateToProps = (state) =>{
  return({
     root:state.root
  })
}
const mapDispatchToProps = (dispatch) =>{
  return({
      quiz_chack:(num)=>{dispatch(quizAction(num))},

      score_chack:(num)=>{ dispatch(scoreAction(num))},
      addQuiz:(data)=>{ dispatch(addQuizAction(data))},
      correctQuizAction:(data)=>{
        dispatch(correctQuizAction(data))
      }
  })
}


export default connect(mapStateToProps,mapDispatchToProps) (QuizComponent);

