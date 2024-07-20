import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

const tailwindColors = {
    'pink-300': '#f472b6',
    'red-500': '#ef4444',
    'yellow-500': '#facc15',
};

const Task = ({ task, color, onRefetch, hover_color }) => {
    const inputBgColor = tailwindColors[color] || 'transparent';
    const [isEdit, setIsEdit] = useState(false);
    const [taskName, setTaskName] = useState(task.name);
    const inputRef = useRef(null);
    const handleComplete = async (id) => {
        await axios({
            method: 'PATCH',
            url: 'http://localhost:5000/api/v1/tasks/' + id + '/finished',
        });
        onRefetch();
    }
    const handleImportant = async (id) => {
        await axios({
            method: 'PATCH',
            url: 'http://localhost:5000/api/v1/tasks/' + id + '/important',
        });
        onRefetch();
    }
    const handleDelete = async (id) => {
        await axios({
            method: 'DELETE',
            url: 'http://localhost:5000/api/v1/tasks/' + id,
        });
        onRefetch();
    }
    const handleEdit = async (id) => {
        await axios({
            method: 'PATCH',
            url: 'http://localhost:5000/api/v1/tasks/' + id + '/update',
            data: {
                name: taskName,
            },
            headers: { "Content-Type": "multipart/form-data" },
        });
        setIsEdit(false);
        onRefetch();
    }
    const handleKeyDown = (event, id) => {
        if (event.key === 'Enter') {
            handleEdit(id);
        }
    }
    useEffect(() => {
        if (isEdit && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEdit]);
    return (
        <div className="flex items-center justify-between p-3 mb-2 bg-zinc-700 rounded shadow">
            <div className="relative flex rounded-full cursor-pointer">
                <input
                    type="checkbox"
                    checked={task.isCompeleted}
                    onChange={() => handleComplete(task.id)}
                    style={task.isCompeleted ? { backgroundColor: inputBgColor } : {}}
                    className={`before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-none hover:border-none ${hover_color}`}
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100 peer-hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1">
                        <path fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd" />
                    </svg>
                </span>
            </div>
            <div className="flex-1 px-4">
                {isEdit ? (
                    <input
                        type="text"
                        className="w-full bg-transparent text-white border-none focus:outline-none"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        onBlur={() => handleEdit(task.id)}
                        onKeyDown={(e) => handleKeyDown(e, task.id)}
                        ref={inputRef}
                    />
                ) : (
                    <span className={`${task.isCompeleted ? 'line-through text-zinc-800' : 'text-white'} text-left text-sm cursor-pointer`}>
                        {task.name}
                    </span>
                )}
            </div>
            <div className="flex items-center">
                <FontAwesomeIcon
                    icon={task.isImportant ? solidStar : regularStar}
                    className={`text-${color} cursor-pointer mr-2`}
                    title='Important'
                    onClick={() => handleImportant(task.id)}
                />
                {!task.isCompeleted && (
                    <FontAwesomeIcon
                        icon={faEdit}
                        className={`text-${color} cursor-pointer mr-2`}
                        title='Edit'
                        onClick={() => setIsEdit(true)}
                    />
                )}
                <FontAwesomeIcon
                    icon={faTrashAlt}
                    className={`text-${color} cursor-pointer mr-2`}
                    title='Delete'
                    onClick={() => handleDelete(task.id)}
                />
            </div>
        </div>
    );
};

Task.propTypes = {
    task: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
    onRefetch: PropTypes.func,
    hover_color: PropTypes.string,
};

export default Task;
