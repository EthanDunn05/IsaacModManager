import React from "react";
import {Form, FormGroup, FormText, Input} from "reactstrap";


export default class ModList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            game: null
        };
    }

    componentDidMount() {
        this.fetchGameData();
    }

    render() {
        return (
            this.state.game == null ? <p>Loading...</p> :
            <Form className="form-check form-switch border rounded m-md-2">
                {this.state.game.mods.map((mod, index) =>
                    <FormGroup className="m-2">
                        <Input type="checkbox" checked={mod.enabled} onChange={(e) => this.handleModChange(e, mod, index)}/>
                        <FormText>{mod.name}</FormText>
                    </FormGroup>
                )}
            </Form>
        );
    }
    
    fetchGameData() {
        fetch("Game")
            .then(response => response.json())
            .then(data => this.setState({game: data}));
    }
    
    handleModChange(event, mod, index) {
        event.preventDefault();
        console.log(JSON.stringify(Object.assign(mod, {enabled: event.target.checked})));
        
        fetch(`Game/${index}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.assign(mod, {enabled: event.target.checked}))
        })
            .then(() => this.fetchGameData());
    }
}