import { Link } from "react-router-dom";
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faList, faPlus, faStar, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import '../Styles/CustomScroll.css';
import logo from '../Images/Logo_TM.png';
import axios from "axios";
import PropTypes from 'prop-types';

const SideBar = ({ categories, refetch, onChange, onNotify }) => {
    // Define state
    const [activeLink, setActiveLink] = useState(sessionStorage.getItem('activeLink') || 'tasks');
    const [category, setCategory] = useState('');
    const inputRef = useRef(null);
    // Handle link click to set active link
    const handleLinkClick = (link) => {
        setActiveLink(link);
        sessionStorage.setItem('activeLink', link);
    };
    const handlePost = async () => {
        try {
            const response = await axios.post(
                'http://localhost:5000/api/v1/categories',
                { name: category },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            if (response.status === 200) {
                onNotify(200, response.data || 'Category created successfully!');
                refetch();
                setCategory('');
            }
        } catch (error) {
            onNotify(error.response.data?.status, error.response.data?.errors.name[0]);
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handlePost();
        }
    }
    const handleDelete = async (id) => {
        await axios({
            method: 'DELETE',
            url: 'http://localhost:5000/api/v1/categories/' + id,
        });
        refetch();
        onChange();
    }
    return (
        <div className="w-1/4 p-4 my-4 bg-zinc-800 rounded-e-3xl shadow-[10px_0px_20px_rgba(0,0,0,0.5)] flex flex-col">
            <img src={logo} alt="Logo" className="w-48 h-24 self-center mb-4" />
            <ul>
                <li className={`hover:bg-red-300 text-pink-500 rounded ${activeLink === 'tasks' ? 'bg-red-300' : ''}`}>
                    <Link to="/"
                        className="font-semibold text-white w-full h-full flex p-2 pl-0"
                        onClick={() => handleLinkClick('tasks')}>
                        <span className={`w-1 mr-4 rounded ${activeLink === 'tasks' ? 'bg-pink-500' : ''}`}></span>
                        <FontAwesomeIcon icon={faHouse}
                            className="text-red-500 mr-2 self-center" />
                        Tasks
                    </Link>
                </li>
                <li className={`hover:bg-yellow-500 rounded ${activeLink === 'important' ? 'bg-yellow-500' : ''}`}>
                    <Link to="/important"
                        className="font-semibold text-white w-full h-full flex p-2 pl-0"
                        onClick={() => handleLinkClick('important')}>
                        <span className={`w-1 mr-4 rounded ${activeLink === 'important' ? 'bg-pink-500' : ''}`}></span>
                        <FontAwesomeIcon icon={faStar}
                            className="text-yellow-200 mr-2 self-center" />
                        Important
                    </Link>
                </li>
            </ul>
            <hr className="my-4 border-pink-300" />
            <div className="flex-grow overflow-y-auto custom-scrollbar">
                <ul>
                    {categories?.map((category) => (
                        <li key={category.id} className={`hover:bg-blue-300 rounded flex ${activeLink === 'category/' + category.id ? 'bg-blue-300' : ''}`}>
                            <Link to={`/category/${category.id}`}
                                className="font-semibold text-white w-full h-full flex p-2 pl-0"
                                onClick={() => handleLinkClick('category/' + category.id)}>
                                <span className={`w-1 mr-4 rounded ${activeLink === 'category/' + category.id ? 'bg-pink-500' : ''}`}></span>
                                <FontAwesomeIcon icon={faList}
                                    className="text-blue-500 mr-2 self-center" />
                                {category.name}
                            </Link>
                            <FontAwesomeIcon icon={faTrashAlt}
                                className="text-blue-500 w-10 self-center hover:cursor-pointer"
                                onClick={() => handleDelete(category.id)} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center justify-between bg-zinc-800">
                <input
                    type="text"
                    value={category}
                    className="w-full h-10 text-white border-none focus:outline-none px-2 bg-zinc-700 rounded mr-1"
                    placeholder="Enter new category..."
                    ref={inputRef}
                    onChange={(e) => setCategory(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
                <button className="p-2 pl-4 rounded bg-pink-700"
                    onClick={handlePost}>
                    <FontAwesomeIcon icon={faPlus} className="text-pink-300 mr-2" />
                </button>
            </div>
        </div>
    );
};

SideBar.propTypes = {
    categories: PropTypes.array,
    refetch: PropTypes.func,
    onChange: PropTypes.func,
    onNotify: PropTypes.func
};

export default SideBar;
