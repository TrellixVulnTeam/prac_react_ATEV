import React, { Component, createContext } from 'react'

//Context API를 사용하는 이유
//하위 컴포넌트가 많아 질 때 하위 컴포넌트에서 무의미 하게 
//값을 전달하게 되는데 이 부분을 없애고 가독성과 이해력을 
//높위기 위해 사용한다.

//useContext안에 값을 초기값을 지정할 수 있다.
const MessageContext = createContext();

const App = () => {
    //ContextAPI Provider 를 통해서 값을 넘겨주게 된다.
    <MessageContext.Provider value="Provider Values">
        <Level1 message="Context API in React"/>
    </MessageContext.Provider>
};

const Level1 = ({message}) => {
    <Level2 message={message}/>
};

const Level2 = ({message}) => {
    <Level3 message={message}/>
};

const Level3 = ({message}) => {
    //comsumer 에서 내용을 불러와 사용할 수 있다.
    <MessageContext.Consumer>
       {(message) =>  <>Level3 : {message}</>}
    </MessageContext.Consumer>
};

export default App;