import React from 'react';
import './music.css'

class Music extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div clasName="row">
                                <div class="card col-md-3 card-follow article-follow">
                                    <div class="avatar-follow mx-auto m-1 ml-3">

                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-sm mb-3">Follow me &rarr;</a>
                                    </div>
                                </div>
                                <div class="card col-md-3 card-follow article-follow">
                                    <div class="avatar-follow mx-auto m-1 ml-3">

                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-sm mb-3">Follow me &rarr;</a>
                                    </div>
                                </div>
                                <div class="card col-md-3 card-follow article-follow">
                                    <div class="avatar-follow mx-auto m-1 ml-3">

                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-sm mb-3">Follow me &rarr;</a>
                                    </div>
                                </div>
                                <div class="card col-md-3 card-follow article-follow">
                                    <div class="avatar-follow mx-auto m-1 ml-3">

                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-sm mb-3">Follow me &rarr;</a>
                                    </div>
                                </div>

                            </div>


                            </div>
                            <div className="col-md-4 nav-board">

                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Music;