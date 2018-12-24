import React, { Component } from 'react'

class StudentItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const deleteElement=(index)=>{
            this.props.deleteFunctionInStudent(index)
        }
        return(
            <div>
                <li className="list-group-item list-group-item-action" onClick={() => this.props.stChange(this.props.student)}>
                    <div className="row">
                        <div className="col-md-2">{this.props.student.name}</div>
                        <div className="col-md-2">{this.props.student.lastName}</div>
                        <div className="col-md-3">{this.props.student.index}</div>
                        <div className="col-md-3">{this.props.student.studyProgram.name}</div>
                        <button type="submit" className="btn btn-danger mb-2 float-right" onClick={() => deleteElement(this.props.student.index)}>Delete</button>
                    </div>
                </li>
            </div>
        );
    }
}
export default StudentItem;