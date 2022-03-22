import ProfileCard from "./components/ProfileCard";

import React, { Component } from 'react'

class App extends Component{
  constructor(){
    super();

    this.handleclick =this.handleclick.bind(this);

    this.state ={
      writers:{
        loading: false,
        list:[]
      }
    
  };
}
handleclick(){
  this.setstate({
  writers:{
    loading:true
  }  
  });
  setTimeout(async()=>{
    let resp = await fetch("/writers.json");
    let result = await resp.json();


    this.setstate({
      writers:{
        loading:false,
        list: result

      }
    });

}, 3500);

}

render() {
  const{
    writers:{loading, list}
  }= this.state;

  if(loading){
    return(
      <div>
      <h1>writers profile</h1>
      <div className="container">
      <div className="card action">
      <p className=" infoText">loading...</p>
      </div>

      </div>
      </div>
      )
    }

  return (
    <div>
    <hi>writersprofiles</hi>
    <div className="container">
    {list.lenght == 0 ? (
      <div className="card action">
      <p className="infoText">Ooop...no writers profile found</p>
      <button className="actionBtn" onClick={this.handleClick}>Get Writers</button>
      </div>

    ):(
      list.map((writer) =>(
        <ProfileCard key={writer.id} writer={writer}/>
      ))
    )}

    </div>
    </div>
    
  )


  }
}
export default App;



