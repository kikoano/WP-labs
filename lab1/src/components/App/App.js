import React, { Component } from 'react';
import './App.css';
import StudentsList from "../StudentsList/StudentsList";
import EditStudentDetails from "../EditStudentDetails/EditStudentDetails"
import AddStudent from "../AddStudent/AddStudent";
import { getStudents, addStudent, updateStudent, deleteStudent } from "../../repository/studentsApi";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            updateStudents: null,
            error: false,
            message: "Error"
        }
    }

    componentDidMount() {
        this.loadData();
    }
    loadData = () => {
        getStudents()
            .then(response => response.json())
            .then(data => {
                this.setState({
                    students: data
                });
            });
    }
    selectedStudentHandler = (student) => {
        this.setState(() => {
            return {
                updateStudents: student
            }
        });
    };
    showMessage = (msg) => {
        if (this.state.error)
            return (
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    {this.state.message}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.closeMessage}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )
    }
    closeMessage = () => {
        this.setState(() => {
            return {
                error: false
            }
        });
    }

    showStudentsDiv = () => {
        const currentStudent = this.state.updateStudents;
        if (currentStudent != null) {
            return (
                <EditStudentDetails student={currentStudent} funct={this.onChangedStudent} />
            )
        }
    };
    onChangedStudent = (student) => {
        updateStudent(student).then((response) => {
            if (response.ok) {
                this.loadData();
                this.setState(prevState => {
                    return {
                        updateStudents: null
                    }
                });
            }
            else {
                this.setState(prevState => {
                    return {
                        error: true,
                        message: "Input Error"
                    }
                });
            }
        }).catch((m) => {
            this.setState(prevState => {
                return {
                    error: true,
                    message: "Input Error"
                }
            });
        });
    }
    onAddStudent = (input) => {
        addStudent(input).then((response) => {
            if (response.ok) {
                this.loadData();
                this.setState(prevState => {
                    return {
                        updateStudents: null
                    }
                });
            }
            else {
                this.setState(prevState => {
                    return {
                        error: true,
                        message: "Input Error"
                    }
                });
            }
        }).catch((m) => {
            this.setState(prevState => {
                return {
                    error: true,
                    message: "Input Error"
                }
            });
        });
    }

    deleteSelectedStudent = (index) => {
        deleteStudent(index).then((response) => {
            this.loadData();
            this.setState(prevState => {
                return {
                    updateStudents: null
                }
            });
        })
    }

    render() {
        return (
            <div className="container-fluid">
                {this.showMessage()}
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <StudentsList students={this.state.students} studentChanges={this.selectedStudentHandler} deleteFunction={this.deleteSelectedStudent} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12"><
                                AddStudent funct={this.onAddStudent} />
                            </div>
                            <div className="col-md-12">
                                {this.showStudentsDiv()}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default App;
