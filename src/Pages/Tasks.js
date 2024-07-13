import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Title from "../Components/Title";
import TaskList from "../Components/TaskList";
import ButtonAdd from "../Components/ButtonAdd";

const Tasks = () => {
    return (
        <div className="w-3/4 bg-zinc-800 m-4 rounded-xl p-4 overflow-hidden flex flex-col">
            <Title text="Tasks" icon={faHouse} color="text-red-500" />
            <TaskList />
            <ButtonAdd />
        </div>
    );
};

export default Tasks;