import { useState } from "react";
import Task from "./Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import '../Styles/CustomScroll.css';
import useApi from "../Hooks/UseApi";

const TaskList = () => {
    const {data: tasksUncompleted} = useApi("http://localhost:5000/api/v1/tasks/unfinished");
    const {data: tasksCompleted} = useApi("http://localhost:5000/api/v1/tasks/finished");
    const [showCompleted, setShowCompleted] = useState(true);
    const handleButtonCompleted = () => {
        setShowCompleted(!showCompleted);
    }
    return (
        <div className="overflow-y-auto custom-scrollbar flex-grow">
            <div className="my-4">
                {tasksUncompleted?.map((task) => (
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
                    {tasksCompleted?.map((task) => (
                        <Task key={task.id}
                            task={task} />
                    ))}
                </div>)}
            </div>
        </div>
    );
};

export default TaskList;