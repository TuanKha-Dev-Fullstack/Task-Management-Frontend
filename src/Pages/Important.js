import { faStar } from "@fortawesome/free-solid-svg-icons";
import Title from "../Components/Title";
import TaskList from "../Components/TaskList";
import PropTypes from "prop-types";
import useApi from "../Hooks/UseApi";
import InputTask from "../Components/InputTask";

const Important = ({ color }) => {
    const url = 'http://localhost:5000/api/v1/tasks/important';
    const { data: tasks, refetch } = useApi(url);
    const handleRefetch = () => {
        refetch();
    };
    return (
        <div className="w-3/4 bg-zinc-800 m-4 rounded-xl p-4 overflow-hidden flex flex-col">
            <Title text="Important" icon={faStar} color={'text-' + color} />
            <TaskList 
                color={color} 
                url={url} 
                hover_color={'hover:bg-yellow-500'}
                data={tasks} 
                onRefetch={handleRefetch} />
            <InputTask onRefetch={handleRefetch} />
        </div>
    );
};

Important.propTypes = {
    color: PropTypes.string.isRequired
};

export default Important;