/*import { Component } from "react";
import "./index.css"
class TodoApp extends Component{
 state={
    list:[
        {
      id:1,
      task:"learn React"
        },
        {
            id:2,
            task:"learnAngular"
        }
    ]
  }
    render(){
        let {list}=this.state
        let {task,id}=list
        return(
            <>
            <div className="container mt-5 w-50">
                <h1 className="text-center">Todo App Using React</h1>
                <div className="input-group">
                    <input type="text" className="form-control"/>
                    <button className="btn btn-primary" onClick={()=>{
                        addNewTodo
                    }}>Add</button>

                </div>
                <ul className="list-group mt-4">
                    {
                        list.map((each)=>{
                            
                            return(
                                <li className="list-group-item">
                                    <p>{each.task}</p>
                                    <button className="btn">❌</button>

                                </li>
                            )
    })
                    }
                </ul>
            </div>
            </>

        )
    }
}
export default TodoApp
*/