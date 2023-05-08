class Student {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    describe() {
        return `${this.name} is ${this.age} years old.`
    }
}
class Class {
    constructor(name) {
        this.name = name
        this.students = []
    }
    describe() {
        return `${this.name} has ${this.students.length} students`
    }
    addStudent(student) {
        if (student instanceof Student) {
            this.students.push(student);
        } else {
            throw new Error(`You cannot join this class because you are not a student: ${student}`)
        }
    }
}
class Menu {
    constructor() {
        this.classes = [];
        this.selectedClass = null;
    }

    start() {
        let selection = this.showMainMenuOptions()

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createClass();
                    break;
                case '2':
                    this.viewClass();
                    break;
                case '3':
                    this.deleteClass();
                    break;
                case '4':
                    this.displayClass();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Invalid Selection')
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new Class
        2) view Class
        3) delete Class
        4) display all Classes
        `)
    }

    showClassMenuOptions(classInfo) {
        return prompt(`
        0) return
        1) create student
        2) delete student
        
        `)
    }
    deleteClass() {
        let index = prompt('Enter Class index for deletion');
        if (index > -1 && index < this.classes.length) {
            this.classes.splice(index, 1);
        }
    }
    displayClass() {
        let classString = '';
        for (let i = 0; i < this.classes.length; i++) {
            classString += i + ') ' + this.classes[i].name + '\n';
        }
        alert(classString)
    }

    createClass() {
        let name = prompt('Type new Class name')
        this.classes.push(new Class(name));

    }

    viewClass() {
        let index = prompt("Enter Class index");
        if (index > -1 && index < this.classes.length) {
            this.selectedClass = this.classes[index];
            let description = 'Class name: ' + this.selectedClass.name + '\n'

            for (let i = 0; i < this.selectedClass.students.length; i++) {
                description += i + ') ' + this.selectedClass.students[i].name
                    + ' - ' + this.selectedClass.players[i].position + '\n'
            }
            let selection = this.showClassMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createStudent();
                    break;
                case '2':
                    this.deleteStudent();
            }
            alert(description)
        }
    }
    createStudent() {
        let name = prompt('Enter new Student name');
        let age = prompt('Enter new Student age')
        this.selectedClass.students.push(new Student(name, age))
    }

    deleteStudent() {
        let index = prompt('Enter player index for deletion')
        if (index > -1 && index < this.selectedClass.students.length) {
            this.selectedClass.students.splice(index, 1);
        }
    }
}


let menu = new Menu();
menu.start();