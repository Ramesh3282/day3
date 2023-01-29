function forloopFun(student){
    const studentkey=Object.keys(student)
    console.log("Iterate Json using for ")
    for(let i=0;i<studentkey.length;i++){
        console.log(studentkey[i]+':'+student[studentkey[i]])

    }
}

function forinFun(student){
    console.log("Iterate Json using for in")
    for(key in student){
        console.log(key+':'+student[key])

    }
}

function forofFun(student){
    console.log("Iterate Json using for of")
    studentkeys=Object.keys(student)
    for(key of studentkeys){
        console.log(key+':'+student[key])

    }
}

function foreachFun(student){
    console.log("Iterate Json using for each")
    
    const studentkey=Object.keys(student)
    studentkey.forEach((val)=>{
        console.log(val+':'+student[val])
    }
    )
}



const student_obj={
    name:"Ram",
    sub1:50,
    sub2:70,
    sub3:60,
    total:180,
    average:60,
    result:'Pass'
}

forloopFun(student_obj)
forinFun(student_obj)
forofFun(student_obj)
foreachFun(student_obj)
