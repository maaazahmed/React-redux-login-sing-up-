import ActionTypes from "../constant/constant"

const INITAL_STATE = {
    qusAndOptionArr:[
        // {Question:"What is your name ?", Option1:"Aslam Khan" ,Option2:"Aslam Khan",Option3:"Maaz Ahmed",Option4:"Afzaal Khan"},
        // {Question:"What is your father's name ?", Option1:"Sabir Ali" ,Option2:"Nazir Ali",Option3:"Saleem Ahmed",Option4:"Mushtaq Ahmed"},
        // {Question:"Where are you live ?", Option1:"Karachi" ,Option2:"Haiderabad",Option3:"Islamabad",Option4:"Lahore"},
      ],
    //   correctAns:["Maaz Ahmed","Sabir Ali","Karachi"],
      correctAns:[],
      counter:0,
      score:0,
      pass:'You Have been Pass',      
      Fail:'You Have been Fail',
}


const reducer = (state = INITAL_STATE ,action) => {    
   switch(action.type){
       case ActionTypes.NEXT_QUIZ:
       return({
           ...state,
           counter: state.counter + action.payload
       })
       case ActionTypes.SCORE:
       console.log("s")
       return({
           ...state,
           score: state.score
       })

       case ActionTypes.QUIZ_DATA:
       return({
           ...state,
           qusAndOptionArr:[...state.qusAndOptionArr,action.payload]
       })
       case ActionTypes.CORRECT_ANS:
       return({
           ...state,
           correctAns:[...state.correctAns,action.payload]
       })
     default:
        return state
    }
}
export default reducer