import React, { Component } from 'react'

class StudyProgramItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const deleteElement=(id)=>{
            this.props.deleteFunctionInProgram(id)
        }
        return(
            <div>
                <li className="list-group-item list-group-item-action" onClick={() => this.props.stChange(this.props.studyProgram)}>
                    <div className="row">
                        <div className="col-md-10">{this.props.studyProgram.name}</div>
                        <button type="submit" className="btn btn-danger mb-2 float-right" onClick={() => deleteElement(this.props.studyProgram.id)}>Delete</button>
                    </div>
                </li>
            </div>
        );
    }
}
export default StudyProgramItem;