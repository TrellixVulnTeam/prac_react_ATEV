# Routes 및 Route 사용법  
- BrowserRouter를 감싸논 컴포넌트가 보통 React programming에 시작점이 되는데 
- 시작점에서는 보통 Layout과 Routes,Route를 활용하여 컴포넌트가 SPA형식으로 동작 할 수 있도록 만들어 준다.

```js 
<Layout>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accounts" element={<AccountsRoutes/>} />
    </Routes>
</Layout>
```
### Route를 사용하는 방법
- 기본적으로 Route를 import하고 path에는 주소를 element는 컴포넌트를 구성하게 된다.
- router-dom v5에서는 exact를 써주어 일치한 주소라는 것을 인식 시켜주었지만, v6에서는 사용하지 않아도 자동으로 적용되어있다.

### 중첩 Route 사용하는 방법
- project단이 아닌 app단으로 들어가게되면 accounts, blog, post, menu등등 기능적인 부분으로 나뉘어 app을 구성하게 되는데 
- 이 때는 중첩 Route를 사용하여 컴포넌트를 나눌 수 있다.
```js
//복수라우팅
<Route path="/accounts/*" element={<Page1 />} />

//v5
<Switch>
  <Route path="/accounts" />
  <Route path="/accounts/:accountsNum" />
</Switch>

//v6
<Routes>
  <Route path="/accounts">
    <Route path=":accountsNum" /> // /accounts/:accountsNum
  </Route>
</Routes>
```
- 첫번째 방법은 중첩route라기보다는 accounts에 들어오는 복수 라우팅이라고 보면 된다. accounts주소에 들어오게 되면 주소에 해당하는 컴포넌트 들은 다 보여주겟다는 뜻이다. 라우팅 관리 측면에서 무조건 다 보여줘야하는 about같은 것을 이렇게 작성해도 될 것같지만 굳이 이렇게 사용할 필요가 없는 것 같다.
- 두번째 부터 중첩route의 경우이다. accounts주소로 들어오게 되면 accountsNum를 사용하여 detail화면을 구성하게 되는데 이때는 중첩 route를 사용하여 구성하는 것이 가능하다.
- 또 다른 방법은 컴포넌트를 구성하여 작성하는 방법인데
```js 
// pages/indes.js 에서 구성하고 
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/accounts" element={<AccountsRoutes/>} />
</Routes>

// pages/accounts/index.js
<Routes>
    <Route path="/accounts/profile" element={<Profile/>} />
    <Route path="/accounts/login" element={<Login/>} />
</Routes>
```
- 위와 같이 구성하게 되면 app단위로 컴포넌트들을 만들어 관리 하기 쉽게 된다.

```js
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/accounts" element={<AccountsRoutes/>} />
</Routes>
```
-v6에서는 Switch가 Routes로 변경이 되었다.
-Switch는 작성해도 되고 안해도 되었지만, v6는 꼭 Routes를 작성하여야한다.
-Routes에서는 exact를 사용하지 않아도 되며


### Outlet사용하기 
```js
<Routes>
    <Route path="post/*" element={<Post />}>
        <Route path=":id" element={<PostDetail />} />
    </Route>
</Routes>
```
- 중첩routing 사용 한 코드이다.
- 여기서 /web/ 주소로 들어가게 되면
- Outlet을 사용하여 children Route를 쉽게 구성할수 있다.
- 아래 두 코드블럭은 같은 기능을 한다.
```js
import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import PostDetail from "./PostDetail";

const Post = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="1">Post #1</Link>
        </li>
        <li>
          <Link to="2">Post #2</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Post;
```
```js

import React from "react";
import { Link, Routes, Route} from "react-router-dom";
import PostDetail from "./PostDetail";

const Post = () => {
  return (
    <div>
      <h1>This is Web</h1>
      <ul>
        <li>
          <Link to="1">Post #1</Link>
        </li>
        <li>
          <Link to="2">Post #2</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":id" element={<PostDetail />} />
      </Routes>
    </div>
  );
};

export default Post;
```