import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const Title = ({ text, icon, color, editMode, categoryId = 0, onRefetch, onNotify }) => {
    const [title, setTitle] = useState(text);
    const [isEdit, setIsEdit] = useState(false);
    const inputRef = useRef(null);
    useEffect(() => {
        setTitle(text);
        setIsEdit(false);
    }, [text]);
    useEffect(() => {
        if (isEdit && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEdit]);
    const handleEdit = async () => {
        try {
            const response = await axios({
                method: 'PATCH',
                url: `http://localhost:5000/api/v1/categories/${categoryId}`,
                data: {
                    name: title
                },
                headers: { "Content-Type": "multipart/form-data" },
            });
            if (response.status === 200) {
                onNotify(200, response.data || 'Category updated successfully!');
                setIsEdit(false);
                onRefetch();
            } else 
                onNotify(response.data?.status, response.data);
        } catch (error) {
            onNotify(error.response.data?.status, error.response.data?.errors.name[0]);
        }
    };
    const handleButtonClick = () => {
        if (isEdit) {
            handleEdit();
        } else {
            setIsEdit(true);
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleEdit();
        }
    }
    return (
        <div className={`font-semibold text-3xl ${color} flex-none h-10 flex items-center`}>
            <FontAwesomeIcon
                icon={icon}
                className="mr-2"
            />
            <input
                type="text"
                value={title}
                className="bg-transparent w-full border-none focus:outline-none"
                ref={inputRef}
                onChange={(e) => setTitle(e.target.value)}
                disabled={!isEdit}
                onKeyDown={(e) => handleKeyDown(e)}
            />
            {editMode && (
                <button
                    className="text-xl underline self-center"
                    onClick={handleButtonClick}
                >
                    {isEdit ? "Save" : "Edit"}
                </button>
            )}
        </div>
    );
};

Title.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
    editMode: PropTypes.bool,
    categoryId: PropTypes.number,
    onRefetch: PropTypes.func,
    onNotify: PropTypes.func
};

export default Title;
