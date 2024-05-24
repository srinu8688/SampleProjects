import React from "react"
//import { Component } from "react";
//import Counter from "./Counter"
//import TodoApp from "./TodoApp"
import Calculator from "./Calculator"
import './App.css';
//import "./global.css"

/*function App() {
  let [count,updateCount]=useState(0)
 
  return (
    <>
    <h1>Counter value:{count}</h1>
    <button onClick={()=>{updateCount(++count)}}>increment</button>
    </>
  );
  function updateCount(){
    ++count;
    console.log(count)
  
}
*/
/*class App extends Component{
  state={count:0}
  render(){
    return(
      <>
      <h1>Counter:{this.state.count}</h1>
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increment</button>
      </>
    )
  }

}
*/
/*class App extends Component{
  state={product:"realme",
  price:2000,
}
constructor(){
  super();
  this.update=this.update.bind(this)
}
update(){
  let p=document.getElementById("price").value;
  this.useState({price:p})
}
  render(){
    let {product,price}=this.state
    
    }
    return(
      <>
      <h1>Product:{product}</h1>
      <p>Price:{price}</p>
      <input type="text" id="price"/>
      <button onClick={this.update}>Update</button>
      </>
    )
  }
  
}
*/   
/*function App(){
  let price=1000
  let [productName,UpdateName]=useState("Poco x4 pro")
  return(
    <>
    <h1>Product Name:{productName}</h1>
    <p>Price:{price}</p>
    <input type="text" id="change"/>
    <button onClick={()=>{
      let pName=document.getElementById("change").value
      //UpdateName(()=>{
       // return pName
      //})
      //UpdateName(pName)
      UpdateName((prev)=>{
        return prev+" "+pName

      })
    }}>ChangeName</button>
    </>
  )
}*/
/*function App(){
  let price=1000
  let [productName,UpdateName]=useState({
    pName:"Real me 10 pro",
    price:160000,
  })
  return(
    <>
    <h1>Product Name:{productName.pName}</h1>
    <p>Price:{productName.price}</p>
    <input type="text" id="change"/>
    <button onClick={()=>{
      let pName=document.getElementById("change").value
      //UpdateName(()=>{
       // return pName
      //})
      //UpdateName(pName)
      UpdateName(
        ...productName,
        price=price,
        productName=pName,
        


      )
    }}>ChangeName</button>
    </>
  )
}
*/
//backgroundColor
function App(){
  /*return(
    <>
    <div className="Wrapper">
      <h1>Background color Changer</h1>
      <input type="color" onChange={
        (e)=>(
          document.body.style.background=e.target.value

        )
      }/>
    </div>
    
    </>
  )
  */
 return(
  <>
  <Calculator/>
  
  
  </>
 )
}


export default App;
