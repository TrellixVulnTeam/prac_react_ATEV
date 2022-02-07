// class 및 상속
// 이전에는 class를 가독성 없는 구현법이 있었지마느
// es6부터는 class를 명시하여 구현 할 수 있으면 상속을 지원해 준다.


class Person{
    //생성자
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //멤버함수 정의
    print(){
        console.log(this.name + "," + this.age);
    }
}

const tom = new Person("tom", 10);
tom.print();

class Developer extends Person{
    constructor(name, age, field){
        super(name, age)
        this.field = field;
    }

    print(){
        super.print();
        console.log(`field : ${this.field}`);
    }
}

const steve = new Developer("steve", 10, "base");
steve.print();