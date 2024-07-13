import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonAdd = () => {
    return (
        <button className="flex-none h-10 bg-zinc-700 rounded border border-pink-300 text-pink-700 font-bold hover:bg-pink-300">
            <FontAwesomeIcon icon={faPlus} className="text-pink-700 mr-2" />
            Add a task
        </button>
    );
};

export default ButtonAdd;
