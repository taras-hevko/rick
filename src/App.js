import React from 'react'
import './App.css'
import Loader from "react-loader-spinner"

import { getCharacter } from './api/api';

console.log(getCharacter);

export class App extends React.Component {
  state = {
    data: [],
  }

  async componentDidMount() {
    this.setState({ data: await getCharacter })
  }


  render() {
    const {data} = this.state;

    if (!data) {
      return (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      );
    }

    return (
      <div className="App">
        <h1>Me app</h1>
        <ul>
        {data.map(el => (
            <li key={el.id} style={{"outline": '1px black solid'}}>
              {el.name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
