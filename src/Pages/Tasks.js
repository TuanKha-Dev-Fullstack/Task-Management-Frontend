import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Title from "../Components/Title";
import TaskList from "../Components/TaskList";
import ButtonAdd from "../Components/ButtonAdd";
import PropTypes from "prop-types";

const Tasks = ({ color }) => {
    const url = "http://localhost:5000/api/v1/tasks";
    return (
        <div className="w-3/4 bg-zinc-800 m-4 rounded-xl p-4 overflow-hidden flex flex-col">
            <Title text="Tasks" icon={faHouse} color={'text-' + color} />
            <TaskList color={color} url={url} hover_color={'hover:bg-red-500'}/>
            <ButtonAdd border_color="border-pink-300" text_color={'text-' + color} hover_color="hover:bg-pink-300" />
        </div>
    );
};

Tasks.propTypes = {
    color: PropTypes.string.isRequired
};

export default Tasks;