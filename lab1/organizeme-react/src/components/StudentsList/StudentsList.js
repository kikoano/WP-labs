import React, { Component } from 'react';
import StudentItem from "../StudentItem/StudentItem";
import ReactPaginate from 'react-paginate';

class StudentsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageNum: 0,
            pagesSize: 4
        }
    }

    render() {

        const offset = this.state.pageNum * this.state.pagesSize;
        const nextPageOffset = offset + this.state.pagesSize;
        const pageCount = Math.ceil(this.props.students.length / this.state.pagesSize);
        const students = this.getStudentsPage(offset, nextPageOffset);

        return (
            <div>
                <ul className="list-group">
                 {students}
                </ul>
                <ReactPaginate previousLabel={"previous"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination"}
                               subContainerClassName={"pages pagination"}
                               activeClassName={"active"}/>
            </div>

        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({pageNum: selected});
    };

    getStudentsPage = (offset, nextPageOffset) => {
        return this.props.students
            .map((student,index) => {
                return <StudentItem student={student}
                                    key = {index}
                                    onStudentChange = {() => this.props.onStudentChange(student)}/>
            })
            .filter((task, index) => {
                return index >= offset && index < nextPageOffset;
            });
    };
}

export default StudentsList;