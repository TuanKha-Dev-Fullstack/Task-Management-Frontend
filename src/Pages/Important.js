import { faStar } from "@fortawesome/free-solid-svg-icons";
import Title from "../Components/Title";
import TaskList from "../Components/TaskList";
import ButtonAdd from "../Components/ButtonAdd";
import PropTypes from "prop-types";

const Important = ({ color }) => {
    return (
        <div className="w-3/4 bg-zinc-800 m-4 rounded-xl p-4 overflow-hidden flex flex-col">
            <Title text="Important" icon={faStar} color={'text-' + color} />
            <TaskList color={color}/>
            <ButtonAdd border_color="border-yellow-200" text_color="text-yellow-500" hover_color="hover:bg-yellow-200" />
        </div>
    );
};

Important.propTypes = {
    color: PropTypes.string.isRequired
};

export default Important;