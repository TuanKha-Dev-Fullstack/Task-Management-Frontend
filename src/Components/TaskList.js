import { useState } from "react";
import Task from "./Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import '../Styles/CustomScroll.css';
import useApi from "../Hooks/UseApi";
import PropTypes from 'prop-types';

const TaskList = ({ color, url, hover_color }) => {
    const { data: tasks, refetch } = useApi(url);
    const tasksUncompleted = tasks?.filter((task) => !task.isCompeleted);
    const tasksCompleted = tasks?.filter((task) => task.isCompeleted);
    const [showCompleted, setShowCompleted] = useState(true);
    const handleButtonCompleted = () => {
        setShowCompleted(!showCompleted);
    }
    const handleRefetch = () => {
        refetch();
    }
    return (
        <div className="overflow-y-auto custom-scrollbar flex-grow">
            <div className="my-4">
                {tasksUncompleted?.map((task) => (
                    <Task key={task.id}
                        task={task}
                        color={color} 
                        onRefetch={handleRefetch} 
                        hover_color={hover_color} />
                ))}
                <button className={`bg-zinc-700 text-white px-2 py-1 my-4 rounded flex items-center ${hover_color}`}
                    onClick={handleButtonCompleted}>
                    <span className="w-4 flex justify-center">
                        <FontAwesomeIcon icon={showCompleted ? faChevronDown : faChevronRight} />
                    </span>
                    <span className="ml-2">Completed</span>
                </button>
                {showCompleted && (<div className="mt-2">
                    {tasksCompleted?.map((task) => (
                        <Task key={task.id}
                            task={task}
                            color={color}
                            onRefetch={handleRefetch}
                            hover_color={hover_color} />
                    ))}
                </div>)}
            </div>
        </div>
    );
};

TaskList.propTypes = {
    color: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    hover_color: PropTypes.string
};

export default TaskList;