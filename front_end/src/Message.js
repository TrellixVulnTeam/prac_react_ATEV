import React from 'react';
import styles from "./Message.module.scss";

class Message extends React.Component{
    render() {
        return (
            <div className={styles.wrapper}>
                Message Componenet
            </div>   
        )
    }
}

export default Message;