import React, { Component } from 'react';
import {Row, Col, Container, Button} from 'reactstrap';
import {Link} from 'react-router-dom';


class Pokedex extends Component {
    render(){
        const{ pokemons } = this.props
        console.log(this.props.pokemons.length)
    return <Container>
        {
            pokemons.map(p => (
                <Row>
                    <Col md="6">
                        <img alt = {p.name} src={p.sprites.front_default}/>
                    </Col>
                    <Col md="6">
                        <ul>
                            <li>Id: {p.id}</li>
                            <li>Nombre: {p.name}</li>
                            <Link to="/Profile">
                            <Button outline color="success">
                                Profile</Button>
                            </Link>
                            
                        </ul>
                    </Col>
                </Row>
            ))
     }
    </Container>
    }
}

export default Pokedex