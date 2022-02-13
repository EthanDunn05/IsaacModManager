import React from 'react';
import {Container, Form, FormGroup, FormText, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import ModList from "./ModList/ModList";

export class Home extends React.Component {
    static displayName = Home.name;
    
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Container className="d-inline-flex">
                <Container className="border rounded p-1 m-1 overflow-auto" style={{maxHeight: "90vh"}}>
                    <ModList/>
                </Container>
                <Container className="border rounded p-1 m-1">
                    
                </Container>
            </Container>
        );
    }
}