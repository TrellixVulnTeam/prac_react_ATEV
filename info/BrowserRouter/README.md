# BroserRouter 사용법 

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Root/> 
  </BrowserRouter>,
  document.getElementById('root')
);
```
- BrowserRouter를 사용할 때는 컴포넌트 위에 감싸는 형식으로 작성하여야 한다.
- 그래서 재사용성을 높이기 위해 Root 파일에 BrowserRouter를 기입하고 작성하는 것이 일반적이다.