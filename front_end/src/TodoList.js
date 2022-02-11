import produce from 'immer';
import React, { Component } from 'react';

const TodoItem = ({todo, index}) => <li>{index} {todo}</li>


class TodoList extends Component {
    state = { 
        todoList : ['파이썬', '일정1'],
        current: '',
    };

    onChange = (e) => {
        const {value} = e.target;
        this.setState = {
            current: value,
        };
    };
    onKeyDown = (e) => {
        if (e.keyCode === 13){
            // const {todoList, current} = this.state;
            // this.setState={
            //     current:'',
            //     todoList : [...todoList, current],
            // }
            this.setState(produce(draft => {
                const current = draft.current.trim()
                draft.current = '';
                draft.todoList.push(current);
            }))
        }
    }

    render () {
        return(
            <div>
                <ul>
                    {this.state.todoList.map((todo, index) =>
                        <TodoItem key={index} todo={todo} />
                    )}
                </ul>
                <input
                    placeholder='일정을 입력해주세요.'
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                />
            </div>
        )
    };
}

export default TodoList;