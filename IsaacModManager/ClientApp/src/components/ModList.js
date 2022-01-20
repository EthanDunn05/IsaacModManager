import React from "react";
import {Form, FormGroup, FormText, Input} from "reactstrap";
import {GameContext} from "../context/GameContext";


export default class ModList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        return (
            <GameContext.Consumer>
                {({game, fetchGameData}) => (
                    game == null ? <p>Loading...</p> :
                    <Form className="form-check form-switch border rounded m-md-2">
                        {game.mods.map((mod, index) =>
                            <FormGroup className="m-2">
                                <Input type="checkbox" checked={mod.enabled} onChange={(e) => this.handleModChange(e, mod, index, fetchGameData)}/>
                                <FormText>{mod.name}</FormText>
                            </FormGroup>
                        )}
                    </Form>
                )}
            </GameContext.Consumer>
        );
    }
    
    handleModChange(event, mod, index, fetchGameData) {
        event.preventDefault();
        
        fetch(`Game/PutMod/${index}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.assign(mod, {enabled: event.target.checked}))
        })
            .then(() => fetchGameData());
    }
}