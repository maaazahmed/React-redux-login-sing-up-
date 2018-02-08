import React, { Component } from 'react';

class QuizComponent extends Component {

  constructor(){
    super()
    this.radioHandler = this.radioHandler.bind(this)
    this.nextButon = this.nextButon.bind(this)
    this.state = {
      radioGroup:{
        Option_1:false,
        Option_2:false,
        Option_3:false,
        Option_4:false,
      },
      radioGroupValue:"",
      // qusAndOptionArr:[
      //   {Ques:"What is your name", Option1:"Maaz Ahmed" ,Option2:"Aslam Khan",Option3:"Aalam Khan",Option4:"Afzaal Khan"},
      //   {Ques:"What is your father's name", Option1:"Sabir Ali" ,Option2:"Nazir Ali",Option3:"Saleem Ahmed",Option4:"Mushtaq Ahmed"},
      //   {Ques:"Where are you live", Option1:"Karachi" ,Option2:"Haiderabad",Option3:"Islamabad",Option4:"Lahore"},
      // ],
      // correctAns:["Maaz Ahmed","Sabir Ali","Karachi"]
    }
    
  }
  
  radioHandler(ev){
     let radioGroup = this.state.radioGroup;
     for(var key in radioGroup){
       radioGroup[key] = false
     }
     radioGroup[ev.target.value] = ev.target.checked
    this.setState({
      radioGroupValue : ev.target.value
    })
  }


  nextButon(){ 
      // console.log(this.state.radioGroupValue)
  }


  render() {
    return (
     <div> 
         <h3></h3>
        <div className="radio">
          <label><input type="radio" name="option" value="Option 1" checked={this.state.radioGroup.Option_1['Option 1']}
          onChange={this.radioHandler} />Option 1</label>
         </div>
         <div className="radio">
           <label><input type="radio" name="option" value="Option 2" checked={this.state.radioGroup.Option_2['Option 2']}
           onChange={this.radioHandler} />Option 2</label>
         </div>
         <div className="radio disabled">
           <label><input type="radio" name="option" value="Option 3" checked={this.state.radioGroup.Option_3['Option 3']}
            onChange={this.radioHandler} />Option 3</label>
         </div>
         <div className="radio disabled">
           <label><input type="radio" name="option" value="Option 4" checked={this.state.radioGroup.Option_4['Option 4']} 
           onChange={this.radioHandler} />Option 3</label>
         </div>
         <button onClick={this.nextButon} type="button" className="btn btn-primary">Next</button>
      </div>     
    );
  }
}


export default (QuizComponent);

