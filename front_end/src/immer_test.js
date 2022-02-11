//node에서 module 불러오는 방법 express나 nest에서는 자중 사용한다.
const { produce } = require('immer');

//
const fruits1 = ['오렌지','사과' ,'레몬','바나나'];
console.log(fruits1);

const newFruits1 = fruits1.slice(1,2,'딸기');
console.log(fruits1);
console.log(newFruits1);
//출력 
//[ '오렌지', '사과', '레몬', '바나나' ]
//[ '오렌지', '사과', '레몬', '바나나' ]
// slice를 사용하여 사과, 레몬 을제거하고 딸기를 넣을려고했지만,
// 제대로 동작하지않는 것으로 보인다.

const fruits3 = ['오렌지','사과' ,'레몬','바나나'];
const newFruits3 =[
	...fruits3.slice(0,1),
	'딸기',
	...fruits3.slice(3),
]
console.log(fruits3);
console.log(newFruits3);
//출력
//[ '사과' ]
//[ '오렌지', '사과', '레몬', '바나나' ]
// 마찬가지로 fruits3의 내용을 변경하고 싶지 않았지만, 
// fruits가 변경이 되고 새로운 newFruits3안에 이전 값들이 들어간것으로 보인다\
// 가독성과 내용에 불일치가 되는 것같아 보기 불편하고 개발하기 불편하다.

const fruits2 = ['오렌지','사과' ,'레몬','바나나'];
const newFruits2 = produce(fruits2, draft => {
    draft.splice(1,2,"딸기");
});
console.log(fruits2);
console.log(newFruits2);
//출력
//[ '오렌지', '사과', '레몬', '바나나' ]
//[ '오렌지', '딸기', '바나나' ]
//내용이 다른 언어와 유사한? 형태로 변경된것을 볼수 있다.
//기존 fruits는 그대로 두고 newFruits에 내가 원하는 결과로 값이 들어간것을 볼수 있다.