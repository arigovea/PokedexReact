import React,{Component} from 'react'
import { Form, FormGroup, Label,Input,Container,Row,Col, Button, Alert} from 'reactstrap';
import * as yup from 'yup';
import {getPokemon} from '../../services/pokemonServices';
import Pokemon from './Pokemon';
class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            pokemon: null,
            isNameValid: true,
            pokemonExists: true
        }
    }

    onChange = (event) => {
        const name = event.target.value
        this.setState({name})
    }

    onClick = async (event) => {
        event.preventDefault()
        const {name : poke} = this.state
        let schema = yup.object()
            .shape({
                pokemon: yup.string().min(3).required()
            })
            //!this.state.isNameValid
           const isValid =  await schema.isValid({ pokemon: poke})
           
           this.setState({
            isNameValid: isValid,
            pokemonExists: true
        }) 
           if(!isValid) return

           let state = {}
           try{
            const {data} = await getPokemon(poke)
            state ={ pokemonExists: true,
                pokemon: data}
            
           } catch(error){
               state.pokemonExists = false
           }
           this.setState(state)
    }

    render(){
       return <Container>
            <Row>
                <Col md="12">
                    <Form>
                        <FormGroup>
                            <Label for="pokemon">
                                Pokemon a buscar:
                            </Label>
                            <Input 
                            type="text" 
                            name="pokemon" 
                            placeholder="Nombre" 
                            value={this.state.name}
                            onChange={this.onChange}
                            invalid={!this.state.isNameValid}
                                />
                                {!this.state.pokemonExists && <Alert color='danger'>El pokemon no existe</Alert>}
                            <Button 
                            outline color="danger" 
                            size="lg" block
                            onClick={this.onClick}
                            >Buscar
                            </Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
            {
                this.state.pokemon && <Pokemon pokemon={this.state.pokemon}
                catchPokemon={this.props.catchPokemon}/>
            }
            
        </Container>
    }
}
export default Search