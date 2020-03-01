import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Container, Row, Col } from 'reactstrap';
import Search from './components/Search';
import Pokedex  from './components/Pokedex';
import Profile  from './components/Profile';
import Menu from './components/Menu';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      pokemons: []
    }
  }

  catchPokemon = (pokemon) =>{
    this.state.pokemons.push(pokemon)
    this.setState({
      pokemons: this.state.pokemons
    })
  }
  
  render(){
    return <Router>
      <Menu/>
      <Container>
      <Row>
        <Col md='2'></Col>
        <Col md='8'>
        <Switch>
          <Route path='/pokedex'>
            <Pokedex pokemons={this.state.pokemons} />
          </Route>
          <Route path = '/profile' component = {Profile}/>
          <Route path = "/">
            <Search catchPokemon={this.catchPokemon} />
            </Route>
          </Switch>
        </Col>
        <Col md='2'></Col>
      </Row>
      </Container>
    </Router>
  }
}

export default App;
