import { useState } from "react";
import Task from "./Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import '../Styles/CustomScroll.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
        { id: 3, title: 'Task 3', completed: false },
        { id: 4, title: 'Task 4', completed: true },
        { id: 5, title: 'Task 5', completed: false },
        { id: 6, title: 'Task 6', completed: true },
        { id: 7, title: 'Task 7', completed: false },
        { id: 8, title: 'Task 8', completed: true },
        { id: 9, title: 'Task 9', completed: false },
        { id: 10, title: 'Task 10', completed: true },
        { id: 11, title: 'Task 11', completed: false },
        { id: 12, title: 'Task 12', completed: true },
        { id: 13, title: 'Task 13', completed: false },
        { id: 14, title: 'Task 14', completed: true },
        { id: 15, title: 'Task 15', completed: false },
        { id: 16, title: 'Task 16', completed: true },
        { id: 17, title: 'Task 17', completed: false },
        { id: 18, title: 'Task 18', completed: true },
        { id: 19, title: 'Task 19', completed: false },
        { id: 20, title: 'Task 20', completed: true },
    ]);
    const [showCompleted, setShowCompleted] = useState(true);
    const completedTasks = tasks.filter(task => task.completed);
    const incompleteTasks = tasks.filter(task => !task.completed);
    const handleButtonCompleted = () => {
        setShowCompleted(!showCompleted);
    }
    return (
        <div className="overflow-y-auto custom-scrollbar flex-grow">
            <div className="my-4">
                {incompleteTasks.map((task) => (
                    <Task key={task.id}
                        task={task} />
                ))}
                <button
                    className="bg-zinc-700 text-white px-2 py-1 my-4 rounded flex items-center hover:bg-pink-300"
                    onClick={handleButtonCompleted}>
                    <span className="w-4 flex justify-center">
                        <FontAwesomeIcon icon={showCompleted ? faChevronDown : faChevronRight} />
                    </span>
                    <span className="ml-2">Completed</span>
                </button>
                {showCompleted && (<div className="mt-2">
                    {completedTasks.map((task) => (
                        <Task key={task.id}
                            task={task} />
                    ))}
                </div>)}
            </div>
        </div>
    );
};

export default TaskList;