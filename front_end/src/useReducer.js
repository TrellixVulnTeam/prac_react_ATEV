import React, { Component, useReducer, useState } from 'react'

//useReducer에 등록되어있는 함수는
//prevState, action를 활용하게 되는데 
//아래에서 사용하는 state를 prevState에 넣어 활용하게되고
//action은 onChange에서 넘겨준 객체나 값들을 넣은 변수임
const reducer = (prevState, action) => {
    //action에 넣어줌 변수 type, value를 활용하여 로직을 생성
    const {type, value}= action;
    // action.type이 SET_NAME일 때 
    if(type === "SET_NAME"){
        //myname만 변경 이하 동일 
        return {...prevState, myname: value};
    }
    else if (type === "SET_AGE"){
        return {...prevState, age: value};
    }
    return prevState;
};
//redux에서 useReducer를 활용하여 처리 하는 로직이 중요하니
//익혀 두자 

const App= () => {
    //useReducer를 활용하여 함수형태의 state값 변경하는 어려운 로직을 구현할 수 잇음
    //useReducer(활용 함수, 초기값)으로 정의
    const [state, dispatch] = useReducer(reducer, {myname: '' ,age: '' });
    //활용할 내용은 state고 호출 함수 이름은 dispatch라고 정의
    const {myname, age} = state;
    const onChange = (e) =>{
        //{name:type, value}는 input에 name을 정의하여 값을 가져오는데 
        //e.target.name을 type이라는 변수를 생성 및 넣어 주겠다는 의미
        const {name:type, value} = e.target;
        //dispatch에 action에 값을 정의 하여 호출하게 되는데 
        //action = {type : type , value: value}로 아래와 같이 호출하게 됨. 
        dispatch({type, value});
    }
    

    // const [person, setPerson] = useState({myname : '', age : ''});
    // const {myname, age}= person;
    // const onChange = (e) =>{
    //     const {name, value} = e.target;
    //     setPerson((preState) => ({
    //         ...preState,
    //         [name] : value,
    //     }));
    // }

    return (
        <div>
            myname : {myname} ,  age : {age}
            <input type="text" name="SET_NAME"
            placeholder="name" onChange={onChange}/>
            <input type="text" name="SET_AGE"
            placeholder="age" onChange={onChange}/>
        </div>
    );
}

export default App;