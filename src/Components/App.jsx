import React from 'react';
import Cards from './Cards'

class App extends React.Component {
    state={
        films: []
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(obj => {
                this.setState({films: obj})
            }).catch(e => console.log(e));
    }

    render() {
        return (
            <>
            {this.state.films.map((film, index) => {
                return <Cards key={index} {...film} />
            })}
         </>
        )
    }

}

export default App;