import React, { Component, useEffect, useState } from 'react'
import {BrowserRouter, Link, NavLink, Route, Switch} from"react-router-dom";
import queryString from "query-string";

//BrowserRouter를 사용하는 이유
//react dom 에서 BrowserRouter 태그로 인식을 시켜우어야 
//Link, Route, Switch등  내부 로직이 동작하게 된다.

//Link를 사용하는 이유
//a태그를 사용하면 브라우저가 재로딩하는 것으로 a로는 spa를 사용할 수 없다.
//a태그는 사용하지 않고 Link를 사용한다.

//Route를 사용하는 이유
//Route를 사용하여 path별로 활용하고 싶은 컴포넌트를 설정하여 
//해당 컴포넌트만 보여 질 수 있도록 한다.
// <Route path="/about/" Component={AboutPage}/>
//Route암에 path="/about/"를 지정할 수 있고 
//해당 path에 Component를 지정하여 Component를 불러 올 수 있다.
//Route는 주소에 해당하는 포함되는 component를 모두 보여지기 때문에 
//exact를 사용하여 그 주소를 정확하게 인식 했을 때 컴포넌트를 보여주고 싶으면 
//exact=True 를 사용하고 blog같이 뒤에 detail이 필요한 경우 그냥 내비둔다.

//NavLink를 사용하는 이유
//Link와 같은 기능을 하지만 activeStyle과 activeClassName 속성을 지원
//activeStyle, activeClassName은 클릭 시 스타일 변경하는 것이라고 보면 된다.
//activeStyle이라는 컴포넌트를 만들고 이것을 클릭 시에 스타일 변경하는 것으로 사용할 수 있다.
//activeClassName을 지정을했다면 똑같이 작성하면 된다.
//Navlink에서도 exact가 있으니 주의 하자.

const nactiveStyle = {
    fontWeight : 'bold',
    backgroundColo: 'yellow',
};


//Switch를 사용하는 이유
//react route를 사용하게 되면 url이 매칭이 안되어있는데도 화면에 표시되는 것이 없고 
//화면이 동작하게 되는데 이럴때는 no match를 알려주는 것이 필요하게 된다.
//Switch를 사용하면 단일 route만 처리되도록 설정이 가능하여 이부분을 해소할 수 있다.
//또한 순서대로 적용이 되므로 route의 detail과 파라미터등의 화면을 조작하기 간편해 진다.
//no match 일 때<Switch> <Route Component={NoMatch}/> </Switch> 이렇게 component만 지정하여 사용

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li>
                        <NavLink exact to="/about/" activeStyle={nactiveStyle}>about</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about/company" activeStyle={nactiveStyle}>AboutCompanyPage</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/profile/" activeStyle={nactiveStyle}>ProfilePage</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog/" activeStyle={nactiveStyle}>ProfilePage</NavLink>
                    </li>
                    <li>
                        <NavLink to="/hello/" activeStyle={nactiveStyle}>NoMatch</NavLink>
                    </li>ㅋ
                </ul>

                <Switch>
                    <Route exact path="/about/" Component={AboutPage}/>
                    <Route exact path="/about/company" Component={AboutCompanyPage}/>
                    <Route exact path="/profile/" Component={ProfilePage}/>
                    <Route path="/blog/:blog_id" Component={BlogPageDetail}/>
                    <Route path="/blog/" Component={BlogPage}/>
                    <Route Component={NoMatch}/>
                </Switch>
                <AboutPage></AboutPage>
                <AboutCompanyPage></AboutCompanyPage>
                <ProfilePage></ProfilePage>
                <BlogPage></BlogPage>
            </BrowserRouter>
        </div>
    );
};

//Route로 설정된 컴포넌트가 받는 3가지 props
//history : 히스토리 조작 -> .location , .push, .goBack. goForward
//location : 현재 경로 정보 -> .hash, .pathname, .search, .state
//math : Router 매칭 정보 -> .isExact, .url, .path, .params

// /about/
const AboutPage = ({history, location, match}) => {
    return(
        <div>
            <h2>AboutPage</h2>
        </div>
    );
};

// /about/
const AboutCompanyPage = () => {
    return(
        <div>
            <h2>AboutPage</h2>
        </div>
    );
};

// /profile/
const ProfilePage = ({ location }) => {
    // /profile/?token=1234 의경우
    // location.search 라는 속성 안에 token=1234로 들어오게 된다.
    // 그래서 속성을 할당받아 사용할 수 있게 되는데 
    // queryString.parse를 이용하여 obj형태로 변경이 가능하다.
    // console.log('location :', queryString.parse(location.search))
    // 아래는 비구조화 할당을 이용하여 token이라는 것을 가져온것이다.
    const { token } = queryString.parse(location.search)
    return(
        <div>
            <h2>PorfilePage</h2>
            token : {token}
        </div>
    );
};

// /blog/
// match 속성 사용법
// 태그안에 어느 값을 활용할려면 `${match.url}100/`로 자성
// match.url은 현재의 주소 /bolg/의 값을 가지고 있게 된다.
// match.url로 작성하면 상위 주소가 바뀌어도 바꿀 필요가 없다.
const BlogPage = ({match}) => {
    return(
        <div>
            <h2>BlogPage</h2>
            <ul>
                <li>
                    <NavLink to={`${match.url}100/`}>100번포스팅</NavLink>
                </li>
                <li>
                    <NavLink to={`${match.url}101/`}>101번포스팅</NavLink>
                </li>
            </ul>
        </div>
    );
};

const BlogPageDetail = ({match}) => {
    // params안에 주소에 설정했던 post_id라는 것을 담겨져서 보내줬는데 
    // 이부분을 match안에 params라는 송성에 담겨오게 되어 아래와 같이 사용한다.
    const {params : {post_id}} = match;
    const [post, setPost]= useState();

    useEffect(() => {
        console.log(`get blog detail api 호출 : ${post_id}`)
        setPost({title : `포스팅: ${post_id}`, content : `포스팅 ${post_id} 내용`});
    }, [post_id]);
    
    return(
        <div>
            <h2>BlogDetail #{post_id}</h2>
            {JSON.stringify(post)}
        </div>
    );
};

//noMath
//location 속성 사용법
const NoMatch = ({ location }) => {
    return (
        <div>
            잘못된 경로로 접근하셨습니다.{location.pathname}
        </div>
    );
};


export default App;
