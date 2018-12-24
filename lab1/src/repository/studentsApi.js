export const getStudents = ()=>{
    return fetch("http://localhost:8080/students")
}
export const addStudent = (input)=>{
    console.log(input.studyProgram);
    return fetch("http://localhost:8080/students/add",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            index:input.index,
            name:input.name,
            lastName:input.lastName,
            studyProgramName:input.studyProgram
        })
    });
}
export const updateStudent = (student)=>{
    return fetch("http://localhost:8080/students/"+student.index,{
        method: "PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name:student.name,
            lastname:student.lastname,
            studyProgramName:student.studyProgram.name
        })
    });
}
export const deleteStudent = (index)=>{
    return fetch("http://localhost:8080/students/"+index,{
        method: "DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    });
}