import { useState } from "react";
import { BsCheckAll } from "react-icons/bs";
// import { RiDeleteBin7Line } from "react-icons/ri";
import { IoTrashBinOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import './OneTodo.css'


export default function OneTodo({ todo, todoList, setTodoList }) {
    const [done, setDone] = useState(todo.completed)

    function handleDoneTodo() {
        setDone(!done)
    }

    function handleDeleteTodo(todoParam) {
        // deleting the current selected todo item when the delete button is clicked
        // filter returns a new array of todos which pass the condition
        // so all todos that are not this (todoList[i]) todo will be returned
        // the 'i' is accessed from map method above
        setTodoList(todoList.filter((eachTodo) => todoParam.id !== eachTodo.id));
    }

    return (
        <li
            className={done ? 'todoDone' : ''}
        >
            <span className='details-todo'>
                <BsCheckAll
                    className={done ? 'reactIcon checkTicks'
                        : 'reactIcon checkTicks transparent-check'}
                />
                <span className='tha-todo-name' onClick={handleDoneTodo}>
                    {todo.name}
                </span>
            </span>

            <span className='icons-todo'>
                <FiEdit
                    className={done ? 'reactIcon disable-icon' : 'reactIcon editIcon'}
                />
                <IoTrashBinOutline
                    className={done
                        ? 'reactIcon dull-delete-icon' : 'reactIcon deleteIcon'}
                    onClick={() => handleDeleteTodo(todo)}
                    disabled={done}
                />
            </span>
        </li>
    )
}