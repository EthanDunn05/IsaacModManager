import React from 'react';
import {Container, Form, FormGroup, FormText, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import ModList from "./ModList";
import DirectoryInput from "./DirectoryInput";
import {GameContext} from "../context/GameContext";

export class Home extends React.Component {
    static displayName = Home.name;
    
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            game: null,
            fetchGameData: () => this.fetchGameData(),
        }
    }
    
    componentDidMount() {
        this.fetchGameData();
    }

    render() {
        return (
            <GameContext.Provider value={this.state}>
                <Container className="d-inline-flex">
                    <Container className="border rounded p-1 m-1 overflow-auto" style={{maxHeight: "90vh"}}>
                        <DirectoryInput/>
                        <ModList/>
                    </Container>
                    <Container className="border rounded p-1 m-1">
                        
                    </Container>
                </Container>
            </GameContext.Provider>
        );
    }

    fetchGameData() {
        fetch("Game/Get")
            .then(response => response.json())
            .then(data => this.setState({game: data}));
    }
}