//Named Parameters

function print_person1(name, age, region){
    console.log(name, age, region);
};

print_person1('tom',10,'Seoul');

function print_person2({name, age, region}){
    console.log(name, age, region);
}

print_person1({ name:'tom',age:10,region:'Seoul'});

//위와 같이 객체를 만들어 비구조화 할당으로 사용하여 Named Parameters를 만든다

//python 에서는 
//def print_person(name, age, region):
// print(name, age, region)
//print_person('tom',10,'Seoul')
//print_person(name='tom',age=10,region='Seoul') 둘다 사용가능 