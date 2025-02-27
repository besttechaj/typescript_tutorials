"use strict";
// console.log(`welcome to typescript tutorial`);
//# classes and private keyword in typescript
//! code 1
// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = 'bihar';
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// const obj1 = new User('jeevan@gmail.com', 'jeevan');
// console.log(obj1.email);
//! code 2: we can write the above code in simple way also
// class User {
//   readonly city: string = 'bihar';
//   constructor(public email: string, private name: string) {}
// }
// const obj1 = new User('jeevan@gmail.com', 'jeevan');
// console.log(obj1.email);
//# getter and setter with private and public keyword
// class User {
//   private course_count = 1;
//   readonly city: string = 'bihar';
//   constructor(public email: string, public name: string) {}
//   private deleteToken() {
//     console.log(`token has been deleted`);
//   }
//   // getter method -> can be used to perform some manipulation with the data
//   get getEmailId(): string {
//     return `apple_${this.email}`;
//   }
//   // getter method
//   get fetchCourseCount(): number {
//     return this.course_count;
//   }
//   //setter method
//   set updateCourseCount(courseNumber: number) {
//     if (this.course_count <= 1) {
//       throw Error('course should be more than 1');
//     }
//     this.course_count = courseNumber;
//   }
// }
// const obj1 = new User('jeevan@gmail.com', 'jeevan');
// console.log(obj1.getEmailId);
//# protected keyword -> accessible by subclass | self class
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.course_count = 1;
        this.city = 'bihar';
    }
    deleteToken() {
        console.log(`token has been deleted`);
    }
    // getter method -> can be used to perform some manipulation with the data
    get getEmailId() {
        return `apple_${this.email}`;
    }
    // getter method
    get fetchCourseCount() {
        return this.course_count;
    }
    //setter method
    set updateCourseCount(courseNumber) {
        if (this.course_count <= 1) {
            throw Error('course should be more than 1');
        }
        this.course_count = courseNumber;
    }
}
//! subclass
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this.course_count = 5;
    }
}
const obj1 = new User('jeevan@gmail.com', 'jeevan');
console.log(obj1.getEmailId);
