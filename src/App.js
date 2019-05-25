import React from 'react';
import './App.css';
import TopPage from './component/hearder'
import BodyPage from './component/Body'
import Footer from './component/footer'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      logging : false
    }
  }

  render(){
    if(this.state.logging === true){
      return (
        <div>
        <TopPage/>
        <h1>you're logging !</h1>
        <Footer/>
        </div>
      )
    }
    else{
      return this.loginRender()
    }
  }

  loginRender(){
    return(
      <div>
        <TopPage/>
        <BodyPage logging={this.logging}/>
        <Footer/>
      </div>
    )
  }
 logging = () =>{
    this.setState({
      logging : true,
    })
  }
}
export default App;
