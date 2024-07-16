import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const ButtonAdd = ({ border_color, text_color, hover_color }) => {
    return (
        <button className={`flex-none h-10 bg-zinc-700 rounded border ${border_color} ${text_color} font-bold ${hover_color}`}>
            <FontAwesomeIcon icon={faPlus} className={`mr-2 ${text_color}`} />
            Add a task
        </button>
    );
};

ButtonAdd.propTypes = {
    border_color: PropTypes.string.isRequired,
    text_color: PropTypes.string.isRequired,
    hover_color: PropTypes.string.isRequired
};

export default ButtonAdd;
