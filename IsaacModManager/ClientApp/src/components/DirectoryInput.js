import React from 'react';
import {Button, Form, Input, InputGroup, InputGroupText, Label} from "reactstrap";
import {GameContext} from "../context/GameContext";


export default class DirectoryInput extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            directory: ""
        }
    }

    render() {
        return (
            <GameContext.Consumer>
                {({game, fetchGameData}) => (
                    game == null ? <h1>Loading...</h1> :
                        <Form className="border rounded m-md-2 p-2">
                            <Label className="text-center w-100">Enter your Isaac Folder</Label>
                            <Input placeholder={game.directory} value={this.state.directory}
                                   onChange={(e) => this.handleInputChanged(e)}/>
                            <Button onClick={(e) => this.handleSubmit(e, fetchGameData)} className="w-100">
                                Submit
                            </Button>
                        </Form>
                )}
            </GameContext.Consumer>
        )
    }

    handleInputChanged(e) {
        this.setState({directory: e.target.value})
    }

    handleSubmit(e, fetchGameData) {
        e.preventDefault();
        console.log(this.state.directory);

        fetch(`Game/PutDirectory`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // WHY CAN'T I JUST USE A STRING
            body: JSON.stringify({body: this.state.directory})
        })
            .then(() => fetchGameData());
    }
}