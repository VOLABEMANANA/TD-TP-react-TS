import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

const ModalForm = ({close}:any , props : any)=>{
  const options : string[] = ["TODO", "DOING", "DONE"];
    const {id, Title, Task, children, refT, refS, refD, value1, value2, Status} = props;
    const [State,setState] = useState(false);
  return(
    <div className="container">
      <button className="closeBtn" onClick={()=>{close(false)}}>x</button>
        <h2 className="H3" >Id:</h2>
        <input className="input" type="text" placeholder="task's id"></input>
        <h2 className="H3"> Title:</h2>
        <input className="input" type="text" placeholder="task's title"></input>
        <h2 className="H3">Task:</h2>
        <input className="input" type="text" placeholder="task's name"></input> <br/><br/>
        <select ref={refS} >
                                    <option value={Status}>{Status}</option>
                                    {
                                        options.map((elt, k)=>(
                                            <option value={elt} key={k}>{elt}</option>
                                        ))
                                    }
                                </select>
      <button onClick={()=>{setState(true) }}>add</button>
    </div>
  )
}

const App = ()=>{
  const [State,setState] = useState(false);
  return (
    <>
    <div className="Title">
      <h3> To Do List</h3>
        <div className="add">
          <p>Add new task</p>
          <button onClick={()=>{setState(true) }} className="Btn" >+</button>{State && <ModalForm close={setState}/>}
        </div>
    </div>

    <Card />
    </>
  )
}

export default App;
