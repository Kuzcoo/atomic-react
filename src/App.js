import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import {Field} from './components/Field/Field';
import {Select} from './components/Select/Select';
import {enhanceSelect} from './components/Select/enhanceSelect';
import {ButtonPrimary} from './components/Buttons/ButtonPrimary';
import {ButtonSecondary} from './components/Buttons/ButtonSecondary';
import {ButtonGhost} from './components/Buttons/ButtonGhost';

const fruits = [
  {name: 'apple'},
  {name: 'banana'},
  {name: 'strawberry'}
];

const countries = [
  {name: 'France'},
  {name: 'Italia'},
  {name: 'Portugal'}
];

const FruitSelect = enhanceSelect(Select);
const CountrySelect = enhanceSelect(Select);

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruitValue: null,
      country: null
    };

    this.chooseFruit = this.chooseFruit.bind(this);
    this.updateCountry = this.updateCountry.bind(this);
  }

  chooseFruit(fruitValue) {
    this.setState({
      fruitValue
    });
  }

  updateCountry(value) {
    this.setState({
      country: value
    });
  }

  render() {
    const {fruitValue, country} = this.state;

    return (
      <div className="App">

        <Field type='text' />

        <FruitSelect
          id='fruit-select'
          value={fruitValue} 
          options={fruits} 
          defaultValue={'Choose a fruit'}
          onChooseItem={this.chooseFruit} />

        <CountrySelect
          id='country-select'
          combobox
          value={country} 
          options={countries} 
          defaultValue='Choose a country'
          onChange={this.updateCountry}
          onChooseItem={this.updateCountry} />

        <ButtonSecondary>Annuler</ButtonSecondary>
        <ButtonPrimary>Envoyer</ButtonPrimary>
        <ButtonGhost>Quitter</ButtonGhost>

      </div>
    );
  }
}

export default App;
