import React from 'react';
class Films extends React.Component{


    render(){

        return(
            <>
            <div className="container bg-secondary">
                <div className="row">
                    <div className="col-12">
                        <div className="card mt-4 shadow">
                            <div className="card-body">
                                <h5 className="card-title">Film Title: {this.props.title}</h5>
                                <p className="card-text">Film Description: {this.props.description}</p>
                                <div className="card-text">
                                <a href= {`https://ghibliapi.herokuapp.com/people/{this.props.id}`} target="_blank" rel="noreferrer">Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
        )
    }
}

export default Films;