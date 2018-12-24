import React, { Component } from 'react'

class Input {
    constructor(){
        this.name="";
    }
}

class AddProgram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input : new Input()
        }
    }

    onChangeProgram = (event) => {
        let newInput = { ...this.state.input };
        newInput[event.target.name] = event.target.value;

        this.setState(() => {
            return {
                input: newInput
            }
        });
    };
    addProgram = (event) => {
        event.preventDefault();
        this.props.funct(this.state.input);
    }

    render() {
        return (
            <form className="w-100" onSubmit={this.addProgram}>
                <h3>Add Students</h3>
                <div className="row">
                    <div className='col-md-10'>
                        <div className="form-group">
                            <label htmlFor="FirstName">Name</label>
                            <input type="text" name='name' onChange={this.onChangeProgram} className="form-control" id="name" placeholder="Enter new name" value={this.state.name} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success mb-2 float-right">Submit</button>
            </form>
        );
    }
}
export default AddProgram;