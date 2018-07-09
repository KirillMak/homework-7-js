import React , { Component } from 'react';
import {Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap';
import './Header.css';
import {Link} from 'react-router-dom';
export default class Header extends Component {
    render(){
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Pokedex</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1}>
                        <Link to = "/caughtPokemons" >
                            Caught Pokemons
                        </Link>
                    </NavItem>
                    <NavItem eventKey={2} href="https://www.pokemon.com/ru/">
                        More about Pokemons
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

//href="/caughtPokemons"