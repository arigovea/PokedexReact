import React, { Component } from 'react';
import {Row, Col, Container} from 'reactstrap';

class Profile extends Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.pokemon)
    return <Container>
    <Row>
        <Col md="6">
              <ul>
                 <li>Id: </li>
                 <li>Nombre: </li>         
                </ul>
         </Col>
    </Row>
    
</Container>
    }
}

export default Profile