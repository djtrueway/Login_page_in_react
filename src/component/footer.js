import React from 'react';
import './footer.css'

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            punch : ['About','News','FAQ','Contact us'],
            policy : ['Terms','Privacy Policy','Copyright Policy', 'Report Abuse'],
            service : ['API'],
            langage : ['English', 'French']
        }
    }
    render() {
        return(
            <div className="container-fluid footer">
                <div className="row">
                    <div className="col-md-3">
                        <h5>PunchMusic</h5>
                        <ul>
                            {this.state.punch.map((item,i)=>
                                <li key={i}>{item}</li>
                            )}
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Policy</h5>
                        <ul>
                            {this.state.policy.map((item,i)=>
                                <li key={i}>{item}</li>
                            )}
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Service</h5>
                        <ul>
                            {this.state.service.map((item,i)=>
                                <li key={i}>{item}</li>
                            )}
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Langage</h5>
                        <ul>
                            {this.state.langage.map((item,i)=>
                                <li key={i}>{item}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer