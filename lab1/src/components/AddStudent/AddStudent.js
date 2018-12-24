import React, { Component } from 'react'

class Input {
    constructor(){
        this.index="";
        this.name="";
        this.lastName="";
        this.studyProgram="";
    }
}

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input : new Input()
        }
    }

    onChangeStudent = (event) => {
        let newInput = { ...this.state.input };
        newInput[event.target.name] = event.target.value;

        this.setState(() => {
            return {
                input: newInput
            }
        });
    };
    addStudent = (event) => {
        event.preventDefault();
        this.props.funct(this.state.input);
    }

    render() {
        return (
            <form className="w-100" onSubmit={this.addStudent}>
                <h3>Add Students</h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="Index">Index</label>
                            <input type="text" name="index" className="form-control" onChange={this.onChangeStudent} id="Index" placeholder="Enter new index" value={this.state.index} />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="form-group">
                            <label htmlFor="FirstName">First Name</label>
                            <input type="text" name='name' onChange={this.onChangeStudent} className="form-control" id="FirstName" placeholder="Enter new first name" value={this.state.name} />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="form-group">
                            <label htmlFor="LastName">Last name</label>
                            <input type="text" onChange={this.onChangeStudent} name='lastName' className="form-control" id="LastName" placeholder="Enter new last name" value={this.state.lastName} />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="form-group">
                            <label htmlFor="Direction">Study Program</label>
                            <input type="text" onChange={this.onChangeStudent} name='studyProgram' className="form-control" id="Direction" placeholder="Enter new direction" value={this.state.studyProgram} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success mb-2 float-right">Submit</button>
            </form>
        );
    }
}
export default AddStudent;