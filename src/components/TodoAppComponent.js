import React from 'react';

import TodoForm from '../containers/TodoFormContainer';
import TodoList from '../containers/TodoListContainer';

class TodoApp extends React.Component {

    render() {
        return (
            <div className='container__app'>
            	<div className='container__app-1'>
                	<TodoForm />
                </div>
                <div className='container__app-2'>
                	<TodoList />
                </div>
            </div>
        );
    }
}

export default TodoApp;
