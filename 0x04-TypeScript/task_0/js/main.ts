interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Bob',
    lastName: 'Marley',
    age: 22,
    location: 'Jamaica'
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const tdFirstName = document.createElement('td');
    const tdLocation = document.createElement('td');
    tdFirstName.innerHTML = `${student.firstName}`;
    tdLocation.innerHTML = `${student.location}`;
    tr.appendChild(tdFirstName);
    tr.appendChild(tdLocation);
});
