import React, { Component } from "react";
import './App.scss';
import Razas from "./components/Razas";
class App extends Component {
  state = {
    razas: []
  };

  componentDidMount = async () => {
    const req = await fetch("https://dog.ceo/api/breeds/list/all");
    const res = await req.json(req);
    const {message} = res;

    this.setState({
      razas: message
    });
    console.log(this.state.razas);
  };

  render() {
    return(
      <div className="App">
          <div className="container">
            <h1 className="is-size-1 has-text-grey-dark"> Dog Breeds </h1>
            <Razas razas={this.state.razas} />
          </div>
      </div>
    );
  }

}
export default App;
