import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Task = ({ task, onComplete, onEdit, onDelete }) => {
    return (
        <div className="flex items-center justify-between p-3 mb-2 bg-zinc-700 rounded shadow">
            <div className="relative flex rounded-full cursor-pointer">
                <input
                    type="checkbox"
                    checked={task.isCompleted}
                    // onChange={() => onComplete(task.id)}
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-none checked:bg-pink-300"
                />
                <span
                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </div>
            <div className="flex-1 px-4">
                <span className={`${task.isCompleted ? 'line-through text-zinc-800' : 'text-white'} text-left text-sm`}>
                    {task.name}
                </span>
            </div>
            <div className="flex items-center">
                <FontAwesomeIcon
                    icon={task.isImportant ? solidStar : regularStar}
                    className="text-pink-300 cursor-pointer mr-2"
                    // onClick={() => onEdit(task.id)}
                />
                <FontAwesomeIcon
                    icon={faEdit}
                    className="text-pink-300 cursor-pointer mr-2"
                    // onClick={() => onEdit(task.id)}
                />
                <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="text-pink-300 cursor-pointer"
                    // onClick={() => onDelete(task.id)}
                />
            </div>
        </div>
    );
};

Task.propTypes = {
    task: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Task;