import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap';

class Pokemon extends Component{
    constructor(props){
        super(props)
        this.state = {
            pokemon: null
        }
    }
    render(){
        const { name, id, sprites, types} = this.props.pokemon
        return <Row className="pokemon-box" id="container-pokemon">
            <Col md={5}>
                <img alt={name} 
                src = {sprites.front_default}/>
            </Col>
            <Col md={7}>
                <ul>
                <li>Id: {id}</li>
                <li>Name: {name} </li>
                <li>Type: {types[0].type.name}</li>
                </ul>
            </Col>
            <Button 
                    color="warning"
                    onClick = {() => {
                        this.props.catchPokemon({
                            name, id, sprites
                        })
                    }}>Catch!</Button>

        </Row>
    }
}

export default Pokemon