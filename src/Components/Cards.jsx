import React from 'react';
class Cards extends React.Component{


    render(){

        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card mt-4 shadow">
                            <div className="card-body">
                                <h5 className="card-title">Film Title: {this.props.title}</h5>
                                <p className="card-text">Film Description: {this.props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default Cards;