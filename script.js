const students = [
  {
    name: "Cleiton",
    firstNote: 10,
    secondNote: 9,
  },
  {
    name: "Luiz",
    firstNote: 6,
    secondNote: 5,
  },
  {
    name: "Luan",
    firstNote: 8,
    secondNote: 6,
  }
];

function calculateAverage(firstNote, secondNote) {
  return (firstNote + secondNote) / 2;
}

for (const student of students) {  
  average = calculateAverage(student.firstNote, student.secondNote);

  if (average >= 7) {
    alert("A média do aluno " + student.name + " é: " + average + "\n" + "Parabéns, " + student.name + "! Você foi aprovado no consurso!");
  } else {
    alert("A média do aluno " + student.name + " é: " + average + "\n" + "Não foi dessa vez, " + student.name + "! Tente novamente!");
  }  
}

