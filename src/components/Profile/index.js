import React, { Component } from 'react';
import {Row, Col, Container} from 'reactstrap';

class Profile extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const { name, id, sprites} = this.props.location.state.pokemon
        console.log(this.props.location.state.pokemon)
    return <Container id="profile-card">
    <Row>
        <Col md="12">
                <h2>Name: {name}</h2> 
                <h3>Id: {id}</h3>       
         </Col>
            {
                sprites.front_default === null ? null : 
                <Col md="6">
                <label>Front</label>
                <img alt={name} 
                src = {sprites.front_default}/> </Col>
             }
             {
                sprites.back_default === null ? null : 
                <Col md="6">
                <label>Back</label>
                <img alt={name} 
                src = {sprites.back_default}/>  </Col>
             }
        
         {
                sprites.front_female === null ? null : 
                <Col md="6">
                <label>Front Female</label>
                <img alt={name} 
                src = {sprites.front_female}/> </Col>
             }
             {
                sprites.back_female === null ? null : 
                <Col md="6">
                <label>Back Female</label>
                <img alt={name} 
                src = {sprites.back_female}/> </Col>
             } 
             {
                sprites.front_shiny === null ? null : 
                <Col md="6">
                <label>Front Shiny</label>
                <img alt={name} 
                src = {sprites.front_shiny}/> </Col>
             }
             {
                sprites.back_shiny === null ? null : 
                <Col md="6">
                <label>Back Shiny</label>
                <img alt={name} 
                src = {sprites.back_shiny}/> </Col>
             }
            {
                sprites.front_shiny_female === null ? null : 
                <Col md="6">
                <label>Front Shiny Female</label>
                <img alt={name} 
                src = {sprites.shiny_female}/> </Col>
             }
             {
                sprites.back_shiny_female === null ? null : 
                <Col md="6">
                <label>Back Shiny Female</label>
                <img alt={name} 
                src = {sprites.back_shiny_female}/> </Col>
             }
    </Row>
</Container>
    }
}

export default Profile