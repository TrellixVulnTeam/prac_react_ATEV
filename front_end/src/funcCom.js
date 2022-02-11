import React, { Component, useCallback, useEffect, useState } from 'react'

//클래스형 컴포넌트 생성 약식
class app1 extends Component{
    //state변수로 값 설정
    state = {
        value1: 0,
        value2: 0,
    };

    //함수 선언 방식
    onClick = () => {
        this.setState({value1: 10});
    };

    render (){
        return (
        <div>
            Hello world
            <hr/>
            <button onClick={this.onClick}></button>
        </div>
        );
    }
};


//함수형 컴포넌트 구성
const app2 = () => {
    //useState 사용법
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value, setValue] = useState({value1:0, value2:0});
    //위에 같이 객체 형태의 내용도 입력이 가능하다
    //value1과 value안에 value1은 다른 내용을 가리킨다.

    // 이벤트 정의
    const onClick = () => {
        // 이렇게 사용하게 되면, 객체의 값이 {value1:0}으로 완전 변경이 되어버리게 된다.
        // 그래서 꼭 {value1:0, value2:10}이렇게 전체를 정의 하거나 
        // {...value, value1:0}으로 전개 연산자를 사용하여야한다.
        //setValue({ value1: 0}); 
        setValue((prevState)=> ({...prevState, value1:0}));
    };

    //useCallback 
    //아래와 같이 하면 마운트 될때만 한번 생성 하기로 함 
    //[] 배열 안에 변수를 넣어 변경 되어 사용하게 된다.
    //useCallback은 성능이 많이 안좋을 때 고민을 해 본다.
    const onClick1 = useCallback(() => {
        setValue((prevState)=> ({...prevState, value1:0}));
    },[]);
    
    //useEffect 사용법
    //아래와 같이 3가지 방법을 사용할 수 있다.
    useEffect(() => {} )//render시에 호출 된다. 값이 바뀌면 계속 호출되는 것 잘 사용하지 않는다.
    useEffect(() => {
        console.log('mount');
    } , [])//mounct 시에만 호출 된다. 컴포넌트 그려질때 한번 호출 된다는 것
    useEffect(() => {
        console.log('value1 변경');
    } , [value1])// value1 속성 값이 변경 될 때마다 호출된다.

    
    return (
    <div>
        Hello world
        <hr/>
        {value1}
        <button onClick={onClick}>click</button>
    </div>
    );
};


export default app2;