let studentTable = document.getElementById("studentBody");
const DEFAULT_INDEX = -1;
let Student = function (inputName, inputGrade, inputGender, inputEmail, inputPhone, inputAdress) {
    this.inputName = inputName;
    this.inputGrade = inputGrade;
    this.inputGender = inputGender;
    this.inputEmail = inputEmail;
    this.inputPhone = inputPhone;
    this.inputAdress = inputAdress;
};
let StudentList = function () {
    this.datalist = [];
    this.presentIndex = DEFAULT_INDEX;
    this.updateList = function () {
        let inputName = document.getElementById('inputName').value;
        let inputGrade = document.getElementById('inputGrade').value;
        let inputGender = document.getElementById('inputGender').value;
        let inputEmail = document.getElementById('inputEmail').value;
        let inputPhone = document.getElementById('inputPhone').value;
        let inputAdress = document.getElementById('inputAdress').value;
        if (this.presentIndex === DEFAULT_INDEX) {
            let student = new Student(inputName, inputGrade, inputGender, inputEmail, inputPhone, inputAdress);
            this.datalist.push(student);
            this.setStorage();
            this.showList();
        } else {
            this.datalist[this.presentIndex] = new Student(inputName, inputGrade, inputGender, inputEmail, inputPhone, inputAdress);
            this.setStorage();
            this.showList();
            this.presentIndex = DEFAULT_INDEX;
            document.getElementById('save').value = "OK";
        }
    };
    this.showList = function () {
        studentTable.innerText = "";
        this.datalist.forEach((student, index) => {
            studentTable.innerHTML += `<tr>
                <td>${++index}</td>
                <td>${student.inputName}</td>
                <td>${student.inputGrade}</td>
                <td>${student.inputGender}</td>
                <td>${student.inputEmail}</td>
                <td>${student.inputPhone}</td>
                <td>${student.inputAdress}</td>
                <td><button onclick="studentList.editStudent(${--index})">sửa</button> / <button onclick="studentList.remoteStudent(${--index})">xoá</button></td>
            </tr>`;
        })
    };

    this.editStudent = function (index) {
        this.presentIndex = index;
        let student = this.datalist[index];
        document.getElementById('inputName').value = student.inputName;
        document.getElementById('inputGrade').value = student.inputGrade;
        document.getElementById('inputGender').value = student.inputGender;
        document.getElementById('inputEmail').value = student.inputEmail;
        document.getElementById('inputPhone').value = student.inputPhone;
        document.getElementById('inputAdress').value = student.inputAdress;
        document.getElementById('save').value = "sửa"
    };
    this.remoteStudent = function (index) {
        this.datalist.splice(index, 1);
        this.setStorage();
        this.showList();
    };
    this.setStorage = function () {
        let jsonList = JSON.stringify(this.datalist);
        localStorage.setItem('Students', jsonList)
    };
    this.getStorage = function () {
        if (localStorage.length > 0) {
            let jsonList = localStorage.getItem('Students');
            this.datalist = JSON.parse(jsonList);
            this.showList();
        }
    };
};
let studentList = new StudentList();
