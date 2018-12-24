import React, { Component } from 'react';
import './App.css';
import StudentsList from "../StudentsList/StudentsList";
import StudyProgramList from "../StudyProgramList/StudyProgramList";
import EditStudentDetails from "../EditStudentDetails/EditStudentDetails";
import EditProgramDetails from "../EditProgramDetails/EditProgramDetails";
import AddStudent from "../AddStudent/AddStudent";
import AddProgram from "../AddProgram/AddProgram";
import { getStudents, addStudent, updateStudent, deleteStudent } from "../../repository/studentsApi";
import { getStudyPrograms, deleteStudyPrograms, addProgram } from "../../repository/studyProgramsApi";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studyPrograms: [],
            updateStudyPrograms: null,
            students: [],
            updateStudents: null,
            errorProgram: false,
            messageProgram: "Error",
            error: false,
            message: "Error"
        }
    }

    componentDidMount() {
        this.loadData();
        this.loadPrograms();

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
    loadPrograms = () => {
        getStudyPrograms()
            .then(response => response.json())
            .then(data => {
                this.setState({
                    studyPrograms: data
                })
            })
    }
    selectedStudentHandler = (student) => {
        this.setState(() => {
            return {
                updateStudents: student
            }
        });
    };
    selectedProgramHandler = (studyProgram) => {
        this.setState(() => {
            return {
                updateStudyPrograms: studyProgram
            }
        });
    };

    showMessageProgram = () => {
        if (this.state.errorProgram)
            return (
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    {this.state.messageProgram}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.closeMessageProgram}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )
    }
    closeMessageProgram = () => {
        this.setState(() => {
            return {
                errorProgram: false
            }
        });
    }

    showMessage = () => {
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
                <EditStudentDetails programs={this.studyPrograms} student={currentStudent} funct={this.onChangedStudent} />
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
    onAddProgram = (input)=>{
        addProgram(input).then((response) => {
            if (response.ok) {
                this.loadPrograms();
                this.setState(prevState => {
                    return {
                        updateStudyPrograms: null
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
    deleteSelectedProgram = (id) => {
        deleteStudyPrograms(id).then((response) => {
            if(response.ok){
            this.loadPrograms();
            this.setState(prevState => {
                return {
                    updateStudyPrograms: null
                }
            });
        }
        else{
            this.setState(prevState => {
                return {
                    errorProgram: true,
                    messageProgram: "Cannot delete because students are using it!"
                }
            });
        }
        })
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
                <h2>Study Programs</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <StudyProgramList studyProgram={this.state.studyPrograms} studyProgramChanges={this.selectedProgramHandler} deleteFunction={this.deleteSelectedProgram} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {this.showMessageProgram()}
                        <div className="row">
                            <div className="col-md-12">
                                <AddProgram funct={this.onAddProgram} />
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <h2>Students</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <StudentsList students={this.state.students} studentChanges={this.selectedStudentHandler} deleteFunction={this.deleteSelectedStudent} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {this.showMessage()}
                        <div className="row">
                            <div className="col-md-12">
                                <AddStudent funct={this.onAddStudent} />
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
