import React, {Component} from 'react';
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    render() {
        return (
            <header>
                <Navbar className="border-bottom shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">IsaacModManager</NavbarBrand>
                        <Nav>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
