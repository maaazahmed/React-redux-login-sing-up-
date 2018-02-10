import React, { Component } from 'react';
import history from "../../History"

class NaveComponent extends Component {


  render() {
      return (
        <div> 
            <nav className="navbar navbar-black bg-primary">
              <button onClick={()=>{history.push("/Quiz_Qus_Ans")}} className="btn btn-sm align-middle btn-outline-success" type="button">Create quiz</button>
            </nav>
        </div>     
    );
  }
}



export default NaveComponent;

