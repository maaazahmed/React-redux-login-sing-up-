import React, { Component } from 'react';
import { connect } from "react-redux"
import "../style/quiz.css"
import firebase from 'firebase'
import { addQuizAction,correctQuizAction } from "../../store/action/action"
import history from "../../History"

let database = firebase.database().ref("/")
class QuizQusAndOption extends Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind(this)
    this.state = {
      Question:"",
      option1:"",
      option2:"",
      option3:"",
      option4:"",
      correctAns:"",
    }
   
  }

  // componentWillMount(){
  //   database.child("Quiz/quiz-que-option").on("child_added",(snapsht)=>{
  //     let obj = snapsht.val()
  //     obj.id = snapsht.key;
  //    this.props.addQuiz(obj)
  //   })
  //   database.child("Quiz/correct").on("child_added",(snapsht)=>{
  //     let obj_2 = snapsht.val()
  //     obj_2.id = snapsht.key;
  //    this.props.correctQuiz(obj_2)
  //   })
  // }

  changeHandler(ev){
    this.setState({
      [ev.target.name]:ev.target.value
    })
  }

  submitHandler(){
    let quizObj = {
      Question:this.state.Question,
      Option1:this.state.option1,
      Option2:this.state.option2,
      Option3:this.state.option3,
      Option4:this.state.option4,
      correctAns:this.state.correctAns,
    } 
    let correctAns = {
      correctAns:this.state.correctAns,
    }
    database.child("Quiz/quiz-que-option").push(quizObj)
    database.child("Quiz/correct").push(correctAns)
  }

  
  render() {
      return (
        <div className="create_quiz_div">
         <div className="row"> 
           <div className="col-md-12"> 
           <br />
           <h2>Quiz discrption</h2>
           <div className="row">

             <div className="form-group col-md-12">
              <textarea type="text"  className="form-control"
               id="exampleFormControlInput1"
               value={this.state.Question} 
               name='Question'
               onChange={this.changeHandler}
               cols="5" placeholder="Question"/>
             </div>

             <div className="form-group col-md-12">
              <input type="text"  className="form-control"
               id="exampleFormControlInput1"
               value={this.state.option1}
               name="option1"
               onChange={this.changeHandler}
                placeholder="Option 1"/>
             </div>

             <div className="form-group col-md-12">
              <input type="text"  className="form-control"
               id="exampleFormControlInput1"
               value={this.state.option2}
               name="option2"
               onChange={this.changeHandler}
                placeholder="Option 2"/>
             </div>

             <div className="form-group col-md-12">
              <input type="text"  className="form-control"
               id="exampleFormControlInput1"
               value={this.state.option3}
               name="option3"onChange={this.changeHandler}
                placeholder="Option 3"/>
             </div>

             <div className="form-group col-md-12">
              <input type="text"  className="form-control"
               id="exampleFormControlInput1"
               value={this.state.option4}
               name="option4"onChange={this.changeHandler}
                placeholder="Option 4"/>
             </div>
             
             <div className="form-group col-md-12">
             <div>
               <b>Write correct answer</b>
             </div> 
              <input type="text"  className="form-control"
               id="exampleFormControlInput1"
               value={this.state.correctAns}
               name="correctAns"onChange={this.changeHandler}
                placeholder="Correct Answer"/>
             </div>

             <div className="form-group col-md-12">
              <button 
               className="btn btn-sm align-middle btn-success"
               onClick={this.submitHandler.bind(this)} type="button">Submit
              </button>
             </div> 
            </div> 
           </div>
         </div>     
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
     addQuiz:(some)=>{dispatch(addQuizAction(some))},
    //  correctQuiz:(some)=>{dispatch(addQuizAction(some))},
  })
}


export default connect(mapStateToProps,mapDispatchToProps) (QuizQusAndOption);

