# React 공부 Repository

## Dependencies
- node
- yarn
- node-sass
- immer
- react-router-dom

## ES6+ 문법 공부 내용  
- [Hoisting](https://github.com/hyunseokjoo/prac_react/blob/main/basic_ES6%2B/hoisting.js)
- [Const](https://github.com/hyunseokjoo/prac_react/blob/main/basic_ES6%2B/const.js)
- [Object](https://github.com/hyunseokjoo/prac_react/blob/main/basic_ES6%2B/object.js)
- [Spread Operator](https://github.com/hyunseokjoo/prac_react/blob/main/basic_ES6%2B/spreadOperator.js)
- [Destructuring](https://github.com/hyunseokjoo/prac_react/blob/main/basic_ES6%2B/namedParameters.js)
- [Default Parameter](https://github.com/hyunseokjoo/prac_react/blob/main/basic_ES6%2B/defaultParameters.js)
- [Named Parameter](https://github.com/hyunseokjoo/prac_react/blob/main/basic_ES6%2B/namedParameters.js)
- [Class](https://github.com/hyunseokjoo/prac_react/blob/main/basic_ES6%2B/class.js)
- [Callback](https://github.com/hyunseokjoo/prac_react/blob/main/basic_ES6%2B/callback.js)
- [Arrow Function](https://github.com/hyunseokjoo/prac_react/blob/main/basic_ES6%2B/arrowFunction.js)
- [High Order Function](https://github.com/hyunseokjoo/prac_react/blob/main/basic_ES6%2B/highOrderFunction.js)

## Babel
- Babel은 ES6,7,8로 작성된 것을 ES5 같이 하위버전으로 변경해주는 것 
- Transpiling을 하는 이유는 es5가 거의 모든 브라우저에서 호환이 되기 때문

## Webpack
- webpack은 js,jsx,css,less,image,html 등 거의 모든 것이 모듈로 될 수 있도록 해주며 번들로 묶을 수 있게해준다.
- 모듈성과 네트워크 성능을 향상시키며 모듈성을 띠어 코드를 필요할 때, 로딩이 가능해진다.
- minifying을 지정할 수 있다.
- HMR(Hot Module Replacement):개발모드에서 원본 소스코드 변경을 감지하여, 변경된 모듈만 즉시 갱신 시킬수 있다.


## Sass/Scss
- [Sass 변수 작성법](https://github.com/hyunseokjoo/prac_react/blob/main/front_end/src/shared.scss)
- [Sass 모듈화](https://github.com/hyunseokjoo/prac_react/blob/main/front_end/src/Profile.module.scss)
- [모듈 import 및 사용](https://github.com/hyunseokjoo/prac_react/blob/main/front_end/src/Profile.js)

## immer 사용하기
- immer란? ES6+에서는 객체의 불변성을 지키는 것이 조금 까다로운데 이런 불변성 지키는 부분을 손쉽게 해주는 라이브러리 이다.
- [immer 사용법 정리](https://github.com/hyunseokjoo/prac_react/blob/main/front_end/src/immer_test.js)

## Hooks
- hook이란? react에서 spa를 구동하기 위해서는 갱신되었다는 정보를 담아야하는데 갱신된정보를 알려줄 수 있도록 하는 신호 알리미 개념이라고 보면 된다.
- [useState](https://github.com/hyunseokjoo/prac_react/blob/main/front_end/src/custom.js) 변수를 지정할 수 있고 그 변수에 값을 업데이트 해 줄 수있다.
- [useEffect](https://github.com/hyunseokjoo/prac_react/blob/main/front_end/src/custom.js) render시에 , mount시에, 어떤 변수나 함수 등 지정한객체가 업데이트 시에 어떤 로직을 처리해주는 hook이다.
- useCallback 이벤트 처리를 할 때 비동기를 지원하기 위해 사용하는 hook이다.
- [useReducer](https://github.com/hyunseokjoo/prac_react/blob/main/front_end/src/useReducer.js) 차후에 redux에서 사용하는 로직으로 useState에서는 구현하기 힘든 더 고차원적인 로직을 처리할 수있게 만들어 주는 hook


## Router
- React에서는 spa를 구현하기위해 사용하는 js이기 때문에 재로딩되는 <a>태그를 사용하지 않는다.
- 기본 jquery나 다른 js에서는 prevent event등을 활용하여 재로딩을 막기도 한다.
- 히스토리API 활용하기 위해 react-router-dom을 활용한다.
- BrowserRouter, Link, NavLink, Route, Switch등을 사용하여 애플리케이션 동작 처리를 한다.
- [기본사용법 정리](https://github.com/hyunseokjoo/prac_react/blob/main/front_end/src/useReducer.js)
- BrowserRouter는 react-router-dom을 활용하기 위해 감싸는 태그 
- Link는 a태그와 똑같은 행동을 하지만, 재로딩이 되지 않게 해준다.
- Route는 path별로 component(화면의 일정부분)을 변경하여 spa를 구현하게 해준다.
- NavLink는 Link와 같은 역할을 하지만, activeStyle을 활용하여 click되어진 것의 style을 변경해준다.
- Switch는 url 매칭이 안되었을 때는 no match(404)에러 처럼 다른 화면을 보여주게 해주고, 순차적으로 위에서 아래로 훑으면서 path를 찾기 때문에 restful api 를 구현하기 쉽게 해준다.
- history, location, math등 속성을 이용하여 화면 api를 잘 구현 할 수 있게 해준다.
  
