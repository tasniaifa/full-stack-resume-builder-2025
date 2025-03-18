import React, {useState} from 'react';
import Progress from './Progress';
import { Personal, Education, Work } from './Form';

function MultiSteps() {
  return (
    <Multi />
  )
}

function Multi(){

    const [steps, setSteps] = useState(1);
    const totalSteps = 3;

    function handlePrev(){
        if (steps > 1) setSteps((steps) => steps - 1)
    }

    function handleNext(){
        if (steps < 3) setSteps((steps) => steps + 1)
    }


    const renderSteps = () =>{
        switch(steps){
            case 1:
                return <Personal />;
            case 2:
                return <Education />;
            case 3:
                return <Work/>;
            default:
                return null; 
        }
    }

    return(
        <div className="container">
            <div className="progress_container">
                <Progress totalSteps = {totalSteps} steps = {steps} className="progress"/>
                <div className={`${steps >= 1 ? "circle active" : "circle"}`}>1</div>
                <div className={`${steps >= 2 ? "circle active" : "circle"}`}>2</div>
                <div className={`${steps >= 3 ? "circle active" : "circle"}`}>3</div>
            </div>
            <div>
                {renderSteps()}
            </div>
            <div className="btns">
                <button className={`${steps <= 1 ? "disabled" : "btn"}`} onClick={handlePrev}> Previous </button>
                <button className={`${steps >= 3 ? "disabled" : "btn"}`} onClick={handleNext}> Next </button>
                <button className={`${steps >= 3 ? "btn" : "disabled"}`} onClick={handleNext}> Submit </button>
            </div>
        </div>
    )
}

function Message({steps}){
    //return <h2>{message[steps - 1]}</h2>
}

export default MultiSteps