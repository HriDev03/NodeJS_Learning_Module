// class A {
//   constructor() {
//     console.log("A constructor");
//   }

//   method() {
//     console.log("A method");
//   }
// }

// class B extends A {
//   constructor() {
//     super();
//     console.log("B constructor");
//   }

//   method() {
//     console.log("B method");
//     super.method();
//   }
// }

// const obj = new B();
// obj.method();

//---------------------------------------------------------------------------

// class A {
//   constructor() {
//     this.message = "Hello from A";
//   }

//   say() {
//     console.log(this.message);
//   }
// }

// class B {
//   constructor() {
//     this.message = "Hello from B";
//   }
// }

// Object.setPrototypeOf(B.prototype, A.prototype);
// const b = new B();
// b.say();


// class A {
//   constructor() {
//     this.value = 42;//value=42
//   }

//   getValue() {
//     return this.value;//100
//   }
// }

// class B extends A {
//   constructor() {
//     super();
//     this.value = 100;//100
//   }

//   getValue() {
//     return super.getValue();
//   }
// }

// const b = new B();
// console.log(b.getValue());


class Parent {
  sayHello() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  sayHello() {
    console.log("Hello from Child");
    super.sayHello();
  }
}

const c = new Child();
c.sayHello();

Object