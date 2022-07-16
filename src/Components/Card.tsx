import React from "react";
import "./style.css";
const Card = () =>{
    return(
        <div className="Card">
            <div className="todo card">
                <h2>ToDo:</h2>   
            </div>
            <div className="doing card">
                <h2>Doing:</h2>
            </div>
            <div className="done card">
                <h2>Done:</h2>
            </div>

        </div>
    )
}
export default Card;