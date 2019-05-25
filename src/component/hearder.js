import React from 'react';
import './hearder.css';


class TopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search : ""
        }
    }
    render(){
        return (
            <div className="App">
              <header className="App-header">
              <nav className="navbar navbar-expand-lg ">
              <a className="navbar-brand title-hearder" href="">Navbar</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
        
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="">Home <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Gerne
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="">Action</a>
                  <a className="dropdown-item" href="">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="">Something else here</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  annee
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="">Action</a>
                  <a className="dropdown-item" href="">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="">Top10</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control-search mr-sm-2" value={this.state.search} onChange={this.handleChange} type="search" placeholder="  Search Music you love" aria-label="Search"/>
              <button className="btn my-2 my-sm-0" onClick={this.handleClick} type="submit">Search </button>
            </form>
          </div>
        </nav>
        </header>
         </div>
        );
    }

    handleChange = (event) =>{
        this.setState({
            search : event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault()
        alert(`"your looking for ${this.state.search}"`)
        this.setState({
            search : ""
        })
    }
  }

  export default TopPage;
  