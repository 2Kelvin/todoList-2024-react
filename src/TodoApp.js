import './TodoApp.css';
import { useState } from 'react';
import { v4 } from 'uuid'
import OneTodo from './OneTodo';


export default function TodoApp() {
    const [todoList, setTodoList] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    function handleAddTodo() {
        // get the input value
        // make a copy of the todolist array
        // add the input value to the copy array
        // set todolist state using the new copy array
        if (newTodo) {
            // only adding the newTodo if it's not empty
            setTodoList(
                [
                    ...todoList,
                    { id: v4(), name: newTodo, completed: false } // random id created using uuid.v4()
                ]
            );
        }
        // clearing the input field once state is updated
        setNewTodo('');
    }

    return (
        <section className='todoapp'>
            <div className='addTodosSection'>
                <label >
                    <input
                        type='input'
                        required
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                </label>

                <button onClick={handleAddTodo}>
                    Add item
                </button>
            </div>

            <ul className='displayTodosSection'>
                {
                    // iterating through each todo item in the todosList array
                    // displaying each todo in a list item; in a reusable component 'OneTodo'
                    todoList.map((todo) => (
                        <OneTodo
                            key={todo.id}
                            todo={todo}
                            todoList={todoList}
                            setTodoList={setTodoList}
                        />
                    ))
                }
            </ul>
        </section>
    );
}


