import './TodoApp.css';
import { useState } from 'react';


export default function TodoApp() {
    const [todosList, setTodosList] = useState([]);
    const [newTodoItem, setNewTodoItem] = useState('');

    function handleAddTodo() {
        // get the input value
        // make a copy of the todolist array
        // add the input value to the copy array
        // set todolist state using the new copy array
        setTodosList([...todosList, newTodoItem]);
        // clearing the input field once state is updated
        setNewTodoItem('');
    }

    return (
        <section className='todoapp'>
            <div className='addTodosSection'>
                <label >
                    <input
                        type='input'
                        required
                        value={newTodoItem}
                        onChange={(e) => setNewTodoItem(e.target.value)}
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
                    todosList.map((todo, i) => (
                        <li key={i}>
                            <label>
                                <input type='checkbox' />
                                {todo}
                                <button onClick={() => {
                                    setTodosList(todosList.filter((eachTodo) => todosList[i] !== eachTodo));
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


