import React, { Component } from 'react'
class EditStudentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: this.props.student
        }
    }
    componentWillReceiveProps(state) {
        this.setState(prev => {
            return {
                student: state.student
            }
        });
    }

    onChangeStudent = (event) => {
        let newStudent = { ...this.state.student };
        if (event.target.name === "studyProgram")
            newStudent["studyProgram"].name = event.target.value;
        else
            newStudent[event.target.name] = event.target.value;

        this.setState(() => {
            return {
                student: newStudent
            }
        });
    };
    submitStudent = (event) => {
        event.preventDefault();
        this.props.funct(this.state.student);
    }
    createSelect = () => {
        const p = this.props.program;
        return <select class="form-control" onChange={this.onChangeStudent}>
            {[...Array(this.props.program)].map((x, i) =>
                 <option value ={x.name}></option>
            )}
        </select>
    }

    render() {
        return (
            <form className="w-100" onSubmit={this.submitStudent}>
                <h3>Edit Student</h3>
                <div className="row">
                    <div className='col-md-5'>
                        <div className="form-group">
                            <label htmlFor="FirstName">First Name</label>
                            <input type="text" name='name' onChange={this.onChangeStudent} className="form-control" id="FirstName" placeholder="Enter new first name" value={this.state.student.name} />
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className="form-group">
                            <label htmlFor="LastName">Last name</label>
                            <input type="text" onChange={this.onChangeStudent} name='lastName' className="form-control" id="LastName" placeholder="Enter new last name" value={this.state.student.lastName} />
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className="form-group">
                            <label htmlFor="Direction">Study Program</label>
                            <input type="text" onChange={this.onChangeStudent} name='studyProgram' className="form-control" id="Direction" placeholder="Enter new direction" value={this.state.student.studyProgram.name} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success mb-2 float-right">Submit</button>
            </form>
        );

    }
}
export default EditStudentDetails;