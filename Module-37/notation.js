const subject = {
    namee:'biology',
    marks:100,
    2025: 'finish',
    'faculty-name' : 'ps',
}

// dot notation
const nameOfSub = subject.namee;
console.log(nameOfSub);

// bracket notation
const totalMark = subject['marks']
console.log(totalMark)


const facultyName = subject['faculty-name'];
console.log(facultyName);

const year = subject[2025];
console.log(year)