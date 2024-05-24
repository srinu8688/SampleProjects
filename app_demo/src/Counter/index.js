import { Component } from "react";
import "./index.css"
 
class Counter extends Component{
    state={
        count:0
    }
    decrement=()=>{
        if(this.state.count>0){
            this.setState((prevs)=>({
                count:prevs.count-1
            }))

        }
    }
    increment=()=>{
            this.setState((prevs)=>({
                count:prevs.count+1
            }))

        
    }
    render(){
        let {count}=this.state
        return(
            <>
            <div>
            <h1 className="heading">Counter</h1>
                <div className="wrapper">
                    <button className="button-1" onClick={this.decrement}>
                -
                    </button>
                    <h1>{count}</h1>
                    <button className="button-2" onClick={this.increment}>
                        +
                    </button>
                    
                </div>
            </div>
            </>
        )
    }
}
export default Counter