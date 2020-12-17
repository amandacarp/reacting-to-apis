import React from 'react';
class People extends React.Component{


    render(){
        if (!this.props.id){
            return (
            <h1>Loading...</h1>
            )
        } else{
        return(
            <>
            <div className="container bg-dark">
                <div className="row">
                    <div className="col-12">
                        <div className="card mt-4 shadow">
                            <div className="card-body">
                                <h5 className="card-title">Person Name: {this.props.name}</h5>
                                <p className="card-text">Person Age: {this.props.age}</p>
                                <p className="card-text">Person Gender: {this.props.gender}</p>
                                <div className="card-text">
                                <a href= {`https://ghibliapi.herokuapp.com/people/${this.props.id}`} target="_blank" rel="noreferrer">Person Link</a>
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
}

export default People;