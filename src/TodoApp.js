import './TodoApp.css';
import { useState } from 'react';


let nextTodoIndex = 0;

export default function TodoApp() {
    const [todoList, setTodoList] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    function handleAddTodo() {
        // get the input value
        // make a copy of the todolist array
        // add the input value to the copy array
        // set todolist state using the new copy array
        setTodoList(
            [
                ...todoList,
                { id: nextTodoIndex++, name: newTodo, completed: false }
            ]
        );
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
                    // displaying each todo in a list item
                    todoList.map((todo) => (
                        <li key={todo.id}>
                            <label>
                                <input
                                    type='checkbox'
                                />
                                {todo.name}
                                <button>Edit</button>
                                <button onClick={() => {
                                    // deleting the current selected todo item when the delete button is clicked
                                    // filter returns a new array of todos which pass the condition
                                    // so all todos that are not this (todoList[i]) todo will be returned
                                    // the 'i' is accessed from map method above
                                    setTodoList(todoList.filter((eachTodo) => todo.id !== eachTodo.id));
                                }}>
                                    Delete
                                </button>
                            </label>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}


