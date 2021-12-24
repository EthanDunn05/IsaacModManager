import React, {Component} from 'react';
import {Container, Form, FormGroup, FormText, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import ModList from "./ModList";

export class Home extends Component {
    static displayName = Home.name;
    
    constructor(props, context) {
        super(props, context);
        
    }

    render() {
        
        return (
            <div>
                <ModList/>
            </div>
        );
    }
}