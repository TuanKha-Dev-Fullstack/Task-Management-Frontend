import { faStar } from "@fortawesome/free-solid-svg-icons";
import Title from "../Components/Title";
import TaskList from "../Components/TaskList";
import useApi from "../Hooks/UseApi";
import InputTask from "../Components/InputTask";
import PropTypes from 'prop-types';

const Important = ({ onNotify }) => {
    const url = 'http://localhost:5000/api/v1/tasks/important';
    const { data: tasks, refetch } = useApi(url);
    return (
        <div className="w-3/4 bg-zinc-800 m-4 rounded-xl p-4 overflow-hidden flex flex-col">
            <Title text="Important" icon={faStar} color="text-yellow-500" editMode={false} />
            <TaskList
                color="yellow-500"
                url={url}
                hover_color={'hover:bg-yellow-500'}
                data={tasks}
                onRefetch={refetch} />
            <InputTask onRefetch={refetch} iconColor={"text-yellow-300"} buttonColor={"bg-yellow-500"} isImportant={true} onNotify={onNotify}/>
        </div>
    );
};

Important.propTypes = {
    onNotify: PropTypes.func
};

export default Important;