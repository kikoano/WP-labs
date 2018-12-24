import React,{Component} from 'react'
import StudyProgramItem from '../StudyProgramItem/StudyProgramItem';

class StudyProgramList extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        const items=this.props.studyProgram;
        const renderItems=items.map((item,index) => {
            return(
                <StudyProgramItem key={item.id} studyProgram={item} stChange={this.props.studyProgramChanges} deleteFunctionInProgram={this.props.deleteFunction}/>

            );
        });
        return(
          <ul className="list-group">
              {renderItems}
          </ul>
        );
    }
}
export default StudyProgramList;