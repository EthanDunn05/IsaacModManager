import React, {Component} from 'react';
import {Container} from "reactstrap";

export class Home extends Component {
    static displayName = Home.name;
    
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            game: null
        };
    }

    componentDidMount() {
         this.fetchGameData();
    }
    
    renderMods() {
        return (
            <div>
                {this.state.game.mods.map(mod =>
                    <Container className="border rounded m-2 p-2">
                        <h2>{mod.name}</h2>
                        {mod.enabled ? "Enabled" : "Disabled"}
                    </Container>
                )}
            </div>
        );
    }

    render() {
        let content = this.state.game == null 
            ? <p>Loading...</p> 
            : this.renderMods();
        
        return (
            <div>
                {content}
            </div>
        );
    }

    async fetchGameData() {
        const response = await fetch("Game");
        const data = await response.json();
        this.setState({game: data});
    }
}