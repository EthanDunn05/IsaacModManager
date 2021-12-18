import React, {Component} from 'react';

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
                    <div>
                        <p>{mod.directory}</p>
                        <p>{mod.name}</p>
                        <p>{mod.enabled ? "Enabled" : "Disabled"}</p>
                        <br/>
                    </div>
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