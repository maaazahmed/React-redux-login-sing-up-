import ActionTypes from "../constant/constant"

const INITAL_STATE = {
    qusAndOptionArr:[
        {Ques:"What is your name", Option1:"Maaz Ahmed" ,Option2:"Aslam Khan",Option3:"Aalam Khan",Option4:"Afzaal Khan"},
        {Ques:"What is your father's name", Option1:"Sabir Ali" ,Option2:"Nazir Ali",Option3:"Saleem Ahmed",Option4:"Mushtaq Ahmed"},
        {Ques:"Where are you live", Option1:"Karachi" ,Option2:"Haiderabad",Option3:"Islamabad",Option4:"Lahore"},
      ],
      correctAns:["Maaz Ahmed","Sabir Ali","Karachi"]
}


const reducer = (state = INITAL_STATE ,action) => {
   switch(action.type){
     default:
        return state
    }
}
export default reducer