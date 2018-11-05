export const listStudents = () => {
    return [
        {
            firstName: 'Brennen',
            lastName: 'Carter',
            index: '147712',
            studyProgram: 'Computer Sciences and Engineering'
        },
        {
            firstName: 'Jaylen',
            lastName: 'Hansen',
            index: '153232',
            studyProgram: 'Application of Information Technologies'
        },
        {
            firstName: 'Valentina',
            lastName: 'Hall',
            index: '158432',
            studyProgram: 'Networking Technologies'
        },
        {
            firstName: 'Avah',
            lastName: 'Christian',
            index: '169426',
            studyProgram: 'Computer Sciences and Engineering'
        },
        {
            firstName: 'Dillan',
            lastName: 'Monroe',
            index: '133365',
            studyProgram: 'Application of Information Technologies'
        },
        {
            firstName: 'Erin',
            lastName: 'Nguyen',
            index: '142105',
            studyProgram: 'Networking Technologies'
        },
        {
            firstName: 'George',
            lastName: 'Wade',
            index: '131112',
            studyProgram: 'Networking Technologies'
        },
        {
            firstName: 'Dulce',
            lastName: 'Bowman',
            index: '1630988',
            studyProgram: 'Application of Information Technologies'
        }
    ];
};

export const cloneStudents = (state,index,student) => {
    const newStudentsArrayRef = [
        ...state.students
    ];

    newStudentsArrayRef[index] = student;
    return newStudentsArrayRef;
}