//import { Component } from "react"
function User(props){
    console.log(props)
    return(
        <>
        <h1>{props.id}</h1>
        </>
    )
}

/*class User extends Component{
    
    render(){
        return(
            <>
            <h1>User Name:{this.props.name}</h1>
            <p>Users Age:{this.props.age}</p>
            
            </>
        )
    }
}
*/

export default User