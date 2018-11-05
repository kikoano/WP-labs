import React, {  } from 'react';
import './EditStudentDetails.css';

const EditStudentDetails = (props) => {

    const onFormSubmit = (formSubmitEvent) => {
        formSubmitEvent.preventDefault();

        keepDefaultValues(formSubmitEvent);

        props.onStudentEdit(
            {
                firstName: formSubmitEvent.target.firstName.value,
                lastName: formSubmitEvent.target.lastName.value,
                index: formSubmitEvent.target.index.value,
                studyProgram: formSubmitEvent.target.studyProgram.value
            }
        );
    };

    var keepDefaultValues = (formSubmitEvent) => {
        if(formSubmitEvent.target.firstName.value.length === 0)
            formSubmitEvent.target.firstName.value = props.student.firstName;
        if(formSubmitEvent.target.lastName.value.length === 0)
            formSubmitEvent.target.lastName.value = props.student.lastName;
        if(formSubmitEvent.target.index.value.length === 0)
            formSubmitEvent.target.index.value = props.student.index;
        if(formSubmitEvent.target.studyProgram.value.length === 0)
            formSubmitEvent.target.studyProgram.value = props.student.studyProgram;
    }

        return (
            <div id="form-wrapper" className="list-group-item">
                <form onSubmit={onFormSubmit}>

                    <div id="avatar">
                         <span><i className="fa fa-user fa"></i></span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="FirstName">First Name: {props.student.firstName}</label>
                        <div className="input-group">
                            <input type="text" className="form-control" name="firstName" id="FirstName"
                                   placeholder="Edit First Name"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="LastName">Last Name: {props.student.lastName}</label>
                        <div className="input-group">
                            <input type="text" className="form-control" name="lastName" id="LirstName"
                                   placeholder="Edit Last Name"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Index">Index: {props.student.index}</label>
                        <div className="input-group">
                            <input type="text" className="form-control" name="index" id="Index"
                                   placeholder="Edit Index"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="StudyProgram">Study Program: {props.student.studyProgram}</label>
                        <div className="input-group">
                            <input type="text" className="form-control" name="studyProgram" id="StudyProgram"
                                   placeholder="Edit Study Program"/>
                        </div>
                    </div>

                    <div id="kopce" className="form-group">
                        <button type="submit" className="btn btn-secondary btn-lg">Submit</button>
                    </div>

                </form>
            </div>
        );
    }

export default EditStudentDetails;