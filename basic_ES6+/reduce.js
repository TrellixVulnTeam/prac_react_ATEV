reduceTest= [1,2,3,4,5]

//reduce 정의
// const reduceRet = reduceTest.reduce((acc, num, i, source) => {
//      accumulator : 누적값 [옵션을 통해 초기값이 주어지지 않는 경우 배열 인자의 첫번째 값을 사용한다.]
//      num : 요소값
//      index : 순차 횟수
//      source : 순회 하는 대상

//      console.log(acc)
//      1 초깃값 정하지 않는 경우
//      10 초깃값 정한 경우
//      console.log(num)
//      2 초깃값 정하지 않는 경우 
//      1 초깃값 정한 경우
//      console.log(b)
//      배열의 길이
//      console.log(b)
//      console.log(b)
// }, 10(초깃값) )


const reduceRet = reduceTest.reduce((acc, b, i, source) => {
    console.log(acc, b, i, source);
}, 10 );

// 출력
// 10 1 0 [ 1, 2, 3, 4, 5 ]
// undefined 2 1 [ 1, 2, 3, 4, 5 ]
// undefined 3 2 [ 1, 2, 3, 4, 5 ]
// undefined 4 3 [ 1, 2, 3, 4, 5 ]
// undefined 5 4 [ 1, 2, 3, 4, 5 ]


const reduceRet3 = reduceTest.reduce((acc, b, i, source) => {
    console.log(acc, b, i, source);
});

// 출력 
//1 2 1 [ 1, 2, 3, 4, 5 ]
// undefined 3 2 [ 1, 2, 3, 4, 5 ]
// undefined 4 3 [ 1, 2, 3, 4, 5 ]
// undefined 5 4 [ 1, 2, 3, 4, 5 ]

let reduceRet2 = reduceTest.reduce((acc, b) => {
    return acc + b
});

//let reduceRet2 = reduceTest.reduce((acc, b) => acc + b);

// 위에 두식은 같은 기능이다.
console.log(reduceRet2);