export const getStudyPrograms = ()=>{
    return fetch("http://localhost:8080/study_programs")
}
export const addProgram = (input)=>{
    console.log(input.studyProgram);
    return fetch("http://localhost:8080/study_programs",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name:input.name,
        })
    });
}
export const deleteStudyPrograms = (index)=>{
    return fetch("http://localhost:8080/study_programs/"+index,{
        method: "DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    });
}