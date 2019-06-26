import React from 'react';
import './Body.css';


class BodyPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
            confirm : "",
            check : false
        }
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <h3 className="text-white mb-5">Create an account</h3>
                        <form>
                            <div className="form-group">
                                <label for="Email">Email address</label>
                                <input type="email" onChange={this.handleChange} value={this.state.email} className="form-control" placeholder="your email here" name="email"/>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" onChange={this.handleChange} value={this.state.password} className="form-control" placeholder="your password here" name="password"/>
                            </div>
                            <div className="form-group">
                                <label for="Email">Confirm Password</label>
                                <input type="password" onChange={this.handleChange} value={this.state.comfirm} className="form-control" placeholder="your Confirm Password here" name="confirm"/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">I agree on PunchMusic</label>
                            </div>
                            <button onClick={this.handleSubmit} className="btn btn-signup" >Sign Up</button>
                        </form>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div class="card  text-white text-center p-3">
                                    <blockquote className="blockquote mb-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                    <footer className="blockquote-footer text-white">
                                    <small>
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                    </footer>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card bg- text-white text-center p-3">
                                    <blockquote class="blockquote mb-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                    <footer className="blockquote-footer text-white">
                                    <small>
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                    </footer>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card card-botton  text-white text-center p-3">
                                    <blockquote className="blockquote mb-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                    <footer class="blockquote-footer text-white">
                                    <small>
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                    </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    handleChange =(event)=>{
        const name = event.target.name
        this.setState({
            [name] : event.target.value    
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const email = this.state.email
        const password = this.state.password
        const confirm = this.state.confirm

        if (email.length > 0 && password.length > 0 && confirm.length > 0){
            if (password === confirm){
                return this.props.logging()
            }else{
                alert(`email is ${email} password don't match !`)
                return false;
            }
        }else{
            alert("missing email password and more !")
        }
    }

}

export default BodyPage;