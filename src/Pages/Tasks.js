import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Title from "../Components/Title";
import TaskList from "../Components/TaskList";
import InputTask from "../Components/InputTask";
import useApi from "../Hooks/UseApi";

const Tasks = () => {
    const url = "http://localhost:5000/api/v1/tasks";
    const { data: tasks, refetch } = useApi(url);
    const handleRefetch = () => {
        refetch();
    };

    return (
        <div className="w-3/4 bg-zinc-800 m-4 rounded-xl p-4 overflow-hidden flex flex-col">
            <Title text="Tasks" icon={faHouse} color="text-red-500" />
            <TaskList
                color="red-500"
                url={url}
                hover_color="hover:bg-red-500"
                data={tasks}
                onRefetch={handleRefetch}
            />
            <InputTask onRefetch={handleRefetch} />
        </div>
    );
};

export default Tasks;
