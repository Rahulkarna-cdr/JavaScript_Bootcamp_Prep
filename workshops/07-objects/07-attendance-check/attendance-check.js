// ### Attendance Check

// Define a function, `attendanceCheck`, that accepts a day of the week as a string.

// Using the globally-defined classRoom array, `attendanceCheck` should return a
// new array with only the names of the students present on the inputted day of
// the week.

// ```javascript

// classCheck('Monday'); // => ['Marnie', 'Shoshanna']

// classCheck('Wednesday'); // => ['Marnie', 'Lena']
// ```

let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
const attendanceCheck = (day) => {
    const presentStudents = []
    for(let i=0;i<classRoom.length;i++){
        debugger;
        let classObj = classRoom[i];
        let studentName = Object.keys(classObj)[0]
        let attendanceArr = classObj[studentName]

        for(let j=0;j<attendanceArr.length;j++){
           let attendanceObj = attendanceArr[j];
           let dayName = Object.keys(attendanceObj)[0]

           if(dayName===day && attendanceObj[dayName]){
            presentStudents.push(studentName)
           }

        }
    }
return presentStudents;
}

console.log(attendanceCheck('Friday'))