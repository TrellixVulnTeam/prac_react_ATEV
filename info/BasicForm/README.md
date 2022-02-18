# Form을 이용한 기본 AJAX 처리 
- 전체 소스
```js
import React, { useEffect, useState } from 'react'
import { Alert } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
    const history = useHistory();   // useHistory hook을 사용하여 페이징 처리
    const [inputs, setInputs] = useState({}); // input태그의 내용을 담는 변수
    const [loading, setLoading] = useState(false); //AJAX 통신 중과 후의 이벤트 처리를 위한 변수
    const [errors, setErrors] = useState({}); // AJAX 통신 중 에러 처리 변수
    const [formDisabled, setFormdisabled] = useState(true); // 화면 로직 처리를 위한 변수

    const onSubmit = (e) => {
        e.preventDefault(); // page reload를 막는다
        setLoading(true); // AJAX 통신인 것을 인지
        setErrors({});  // Errors 변수 초길화

        axios.get('http://localhost:8000/accounts/signup/', inputs) // signup 주소 호출 및 변수
        .then(response =>{            
            console.log("response : ", response); // 응답 완료 
            history.push("accounts/login"); // login페이지로 변경
        })
        .catch(error => {
            console.log("error : ", error);
            if (error.response){
                setErrors({
                    username : (error.response.data.username || []).join(" "), // error 응답 변수가 있을 때 username에 대한 error반환
                    password : (error.response.data.password || []).join(" "),// error 응답 변수가 있을 때 password에 대한 error반환
                })
            }
        })
        .finally(() => {
            setLoading(false);
        });
    };

    //inputs 변수가 
    useEffect(() => {
        // Object.values(inputs) => {username: ~~, password: ~~}같이 객체로 변경해줌
        // every는 그 안에 변수 하나하나 꺼내는 함수 
        // 객체안에 모든 변수가 입력이 되었으면 True 반환
        const isEnabled = Object.values(inputs).every(s => s.length > 0 );
        setFormdisabled(!isEnabled);
    }, [inputs]);

    const onChange = (e) => {
        const { name, value } = e.target
        setInputs(prev => ({
            ...prev,
            [name] : value,
        }));
        // setInputs = {
        //     ...inputs,
        //     [name] : value,
        // };
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <input type='text' name='username' onChange={onChange} />
                    {errors.username && <Alert type="error" message={errors.username}></Alert>}
                </div>
                <div>
                    <input type='password' name='password' onChange={onChange} />
                    {errors.password && <Alert type="error" message={errors.password}></Alert>}
                </div>
                <input 
                type='submit' 
                value='회원가입' 
                disabled={loading || formDisabled}/>
            </form>
        </div>
    );
}
```