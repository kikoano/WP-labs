import React,{Component} from 'react'

class EditProgramDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studyProgram: this.props.studyProgram
        }
    }
    componentWillReceiveProps(state){
        this.setState(prev=>{
            return{
                studyProgram: state.studyProgram
            }
        });
    }

    onChangeProgram=(event)=>{
        let newStudent={...this.state.student};
            newStudent[event.target.name]=event.target.value;
        this.setState(()=>{
           return{
            studyProgram:newStudent
           }
        });
    };
    submitProgram=(event)=>{
        event.preventDefault();
        this.props.funct(this.state.studyProgram);
    }

    render() {
        return (
            <form className="w-100" onSubmit={this.submitProgram}>
            <h3>Edit Student</h3>
                <div className="row">
                    <div className='col-md-10'>
                        <div className="form-group">
                            <label htmlFor="FirstName">Name</label>
                            <input type="text" name='name' onChange={this.onChangeProgram} className="form-control" id="nameProgram" placeholder="Enter new name" value={this.state.studyProgram.name} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success mb-2 float-right">Submit</button>
            </form>
        );

    }
}
export default EditProgramDetails;