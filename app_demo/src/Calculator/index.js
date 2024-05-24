import Keypad from "./keypad"
import "./index.css"
import { useState } from "react"

function Calculator(){
    let [input,setInput]=useState("")
    function handleClick(value){
        setInput(input+value)

        

    }
    function calculate(value){
        let output=eval(input)
        setInput(output)
    }
    function handleClear(value){
        setInput("")
    }
    return(
        <divv className="container">
            <h1>Calculator app Using React</h1>
            <div className="calculator">
                <input type="text" className="output" value={input}/>
                <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}/>
            </div>

        </divv>
    )
}
export default Calculator