// link : https://www.hackerrank.com/challenges/grading/problem
function gradingStudents(grades) {
  // Write your code here

  grades = grades.map((grade) => {
    if (grade >= 38) {
      const modGrade = Math.abs((grade % 5) - 5);
      if (modGrade < 3) {
        grade = grade + modGrade;
      }
    }
    return grade;
  });

  return grades;
}

console.log(gradingStudents([73, 67, 38, 33]));
