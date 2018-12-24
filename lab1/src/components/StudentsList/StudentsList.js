import React,{Component} from 'react'
import StudentItem from "../StudentItem/StudentItem";

class StudentsList extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        const items=this.props.students;
        const renderItems=items.map((item,index) => {
            return(
                <StudentItem key={item.index+index} student={item} stChange={this.props.studentChanges} deleteFunctionInStudent={this.props.deleteFunction}/>

            );
        });
        return(
          <ul className="list-group">
              {renderItems}
          </ul>
        );
    }
}
export default StudentsList;