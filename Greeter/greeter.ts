class Student {
  fullName: string;

  constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleName + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "Neelima", lastName: "Pati" };
document.body.innerHTML = greeter(user);
