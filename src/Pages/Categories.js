import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Title from "../Components/Title";
import PropTypes from "prop-types";
import useApi from "../Hooks/UseApi";
import TaskList from "../Components/TaskList";
import InputTask from "../Components/InputTask";

const Categories = ({ data, onRefetch }) => {
    const url = 'http://localhost:5000/api/v1/tasks/' + data.id;
    const { data: tasks, refetch } = useApi(url);
    return (
        <div className="w-3/4 bg-zinc-800 m-4 rounded-xl p-4 overflow-hidden flex flex-col">
            <Title text={data.name} icon={faHouse} color="text-blue-500" editMode={true} categoryId={data.id} onRefetch={onRefetch} />
            <TaskList 
                color="blue-500"
                url={url} 
                hover_color={'hover:bg-blue-500'}
                data={tasks} 
                onRefetch={refetch} />
            <InputTask onRefetch={refetch} id={data.id} />
        </div>
    )
}

Categories.propTypes = {
    data: PropTypes.object,
    onRefetch: PropTypes.func
}

export default Categories;