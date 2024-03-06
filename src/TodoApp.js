import './TodoApp.css';
import { useState } from 'react';


export default function TodoApp() {
    const [todoList, setTodoList] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    function handleAddTodo() {
        // get the input value
        // make a copy of the todolist array
        // add the input value to the copy array
        // set todolist state using the new copy array
        setTodoList([...todoList, newTodo]);
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
                    todoList.map((todo, i) => (
                        <li key={i}>
                            <label>
                                <input type='checkbox' />
                                {todo}
                                <button onClick={() => {
                                    setTodoList(todoList.filter((eachTodo) => todoList[i] !== eachTodo));
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


