import React from 'react';
class People extends React.Component {
    state = {
        people: []
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => { this.setState({ people }) })
            .catch(e => console.log(e));
    }
    render() {
        return (
            <>
                {this.state.people.map(person => {
                    return (

                        <div key= {`film id ${person?.id}`} className="container bg-dark">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card mt-4 shadow">
                                        <div className="card-body">
                                            <h5 className="card-title">Person Name: {person?.name}</h5>
                                            <p className="card-text">Person Age: {person?.age}</p>
                                            <p className="card-text">Person Gender: {person?.gender}</p>
                                            <div className="card-text">
                                                <a href={`https://ghibliapi.herokuapp.com/people/${person?.id}`} target="_blank" rel="noreferrer">Person Link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </>
        )
            }
        }




        export default People;