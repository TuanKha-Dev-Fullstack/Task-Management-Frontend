import axios from "axios";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const InputTask = ({ onRefetch, id, iconColor, buttonColor }) => {
    const [title, setTitle] = useState('');
    const inputRef = useRef(null);
    const handlePost = async () => {
        await axios({
            method: 'POST',
            url: 'http://localhost:5000/api/v1/tasks',
            data: {
                name: title,
                categoryId: id || null,
            },
            headers: { "Content-Type": "multipart/form-data" },
        });
        onRefetch();
        setTitle('');
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handlePost();
        }
    }
    return (
        <div className="flex items-center justify-between bg-zinc-800 rounded shadow">
                <input
                    type="text"
                    value={title}
                    className="w-full h-10 text-white border-none focus:outline-none mt-2 px-2 bg-zinc-700 rounded"
                    placeholder="Enter title of the new task..."
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    ref={inputRef}
                />
                <button className={`w-20 h-10 rounded ${buttonColor} ml-2 mt-2`}
                    onClick={handlePost}>
                    <FontAwesomeIcon icon={faPlus} className={`${iconColor} px-2`} />
                </button>
        </div>
    );
};

InputTask.propTypes = {
    onRefetch: PropTypes.func,
    id: PropTypes.number,
    iconColor: PropTypes.string,
    buttonColor: PropTypes.string
};

export default InputTask;