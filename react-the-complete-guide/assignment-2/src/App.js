import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputText: ''
  }

  inputTextChangedHandler = (event) => {
    this.setState({ inputText: event.target.value });
  }

  deleteCharacterHandler = (characterIndex) => {
    const inputCharacters = [...this.state.inputText];
    inputCharacters.splice(characterIndex, 1);
    const updatedText = inputCharacters.join('');

    this.setState({ inputText: updatedText });
  }


  render() {

    const characters = this.state.inputText.split('').map((character, index) => {
      return <Char
        inputCharacter={character}
        key={index}
        clicked={() => this.deleteCharacterHandler(index)} />
    });

    return (
      <div className="App">
        <h1>This is assignment 2</h1>
        <ol>
          <li>Create an input field (in App component) with a changelistener which outputs the length of the entered text below it (e.g. in a paragraph)</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays</p>
        <hr />
        <input
          type="text"
          onChange={(event) => this.inputTextChangedHandler(event)}
          value={this.state.inputText} />
        <p>{this.state.inputText.length}</p>
        <Validation inputLength={this.state.inputText.length} />
        {characters}
      </div>
    );

  }

}

export default App;
