import React from 'react';
import Films from './Films'
import People from './People'

class App extends React.Component {
    state = {
        films: [],
        shouldShowHome: false,
        shouldShowFilms: false,
        shouldShowPeople: false,
    }

    componentDidMount() {
        this.setState({ shouldShowHome: true });
    }

    handleFilmClick = () => {
        this.setState({
            shouldShowFilms: true,
            shouldShowHome: false,
            shouldShowPeople: false,
        })

    }

    handlePersonClick = () => {
        this.setState({
            shouldShowFilms: false,
            shouldShowHome: false,
            shouldShowPeople: true,
        })

    }

    returnClick = () => {
        this.setState({
            shouldShowFilms: false,
            shouldShowPeople: false,
            shouldShowHome: true
        })
    }

    render() {
        if (this.state.shouldShowHome) {
            return (
                <>
                    <h1 className="text-center">Reacting to APIs</h1>
                    <img className="mx-auto d-block" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt=""/>
                    <div className="text-center">
                    <button className="btn btn-info btn-lg m-4 shadow" onClick={this.handleFilmClick}>SEE FILMS</button>
                    <button className="btn btn-info btn-lg m-4 shadow" onClick={this.handlePersonClick}>SEE PEOPLE</button>
                    </div>
                </>
            )
        } else if (this.state.shouldShowFilms || this.state.shouldShowPeople) {
            return(
                <>
                <div className="text-center">
                <button className="btn btn-info btn-lg m-4 shadow" onClick={this.returnClick}>RETURN HOME</button>
                </div>
                {this.state.shouldShowFilms ? <Films /> : <People />}
                </>
                )
        }else {
            return (
                <h1>Loading....</h1>
            )
        }

    }

}

    export default App;