import React, { Component, useEffect, useState } from 'react'

const useCurrentTiem = () => {
    const [currentTime, setCurrentTime] = useState(); 

    useEffect(() => {
        const handler = setInterval(() => {
            const currentTime = (new Date()).toISOString().slice(11,9);
            setCurrentTime(currentTime);
        }, 1000)
        return () => clearInterval(handler);
    },[]);

    return currentTime;
};


const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize',onResize);
    }, []);

    return width;
};

const App = () => {
    const currentTime = useCurrentTiem();
    const windowWidth = useWindowWidth();
    return(
    <div>
        현재시각
        <hr/>
        {currentTime}
        {windowWidth}
    </div>
    );
};

export default App;