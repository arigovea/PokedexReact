import React, { Component } from 'react';
import {Row, Col, Container, Button} from 'reactstrap';
import {Link} from 'react-router-dom';


class Pokedex extends Component {
    render(){
        const{ pokemons } = this.props
        console.log(this.props.pokemons)
    return <Container>
        {
            pokemons.map(p => (
                <Row id="pokedex-card">
                    <Col md="5">
                        <img alt = {p.name} src={p.sprites.front_default}/>
                    </Col>
                    <Col md="7">
                        <ul>
                            <li>Id: {p.id}</li>
                            <li>Name: {p.name}</li>
                            <Link to={{
                                    pathname: "/profile",
                                    state: {pokemon: p}
                            }}>
                            <Button outline color="info">
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