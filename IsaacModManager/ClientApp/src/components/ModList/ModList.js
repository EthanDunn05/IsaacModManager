import React from "react";
import {Form, FormGroup, FormText, Input} from "reactstrap";
import DirectoryInput from "./DirectoryInput";


export default class ModList extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            mods: null,
        }
    }
    
    componentDidMount() {
        this.fetchMods();
    }
    
    render() {
        return (
            this.state.mods == null ? <p>Loading...</p> :
                <div>
                    <DirectoryInput fetchMods={() => this.fetchMods()}/>
                    <Form className="form-check form-switch border rounded m-md-2">
                        {this.state.mods.map((mod, index) =>
                            <FormGroup className="m-2">
                                <Input type="checkbox" checked={mod.enabled} onChange={(e) => this.handleModChange(e, mod, index)}/>
                                <FormText>{mod.name}</FormText>
                            </FormGroup>
                        )}
                    </Form>
                </div>
        );
    }
    
    handleModChange(event, mod, index) {
        event.preventDefault();
        
        fetch(`Game/PutMod/${index}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.assign(mod, {enabled: event.target.checked}))
        })
            .then(() => this.fetchMods());
    }
    
     fetchMods() {
        fetch("Game/GetMods")
            .then(result => result.json())
            .then(data => this.setState({mods: data}));
    }
}