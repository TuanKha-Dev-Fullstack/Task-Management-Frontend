import { Link } from "react-router-dom";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faList, faPlus, faStar, faSun } from "@fortawesome/free-solid-svg-icons";
import '../Styles/CustomScroll.css';
import logo from '../Images/Logo_TM.png';
import useApi from '../Hooks/UseApi';

const SideBar = () => {
    const url = 'http://localhost:5000/api/v1/categories';
    const [activeLink, setActiveLink] = useState('');
    const handleLinkClick = (link) => {
        setActiveLink(link);
    }
    const { data: categories } = useApi(url);
    console.log(categories);
    return (
        <div className="w-1/4 p-4 my-4 bg-zinc-800 rounded-e-3xl shadow-[10px_0px_20px_rgba(0,0,0,0.5)] flex flex-col">
            <img src={logo} alt="Logo" className="w-48 h-24 self-center mb-4" />
            <ul>
                <li className={`hover:bg-red-300 text-pink-500 rounded ${activeLink === 'tasks' ? 'bg-red-300' : ''}`}>
                    <Link to={"/"}
                        className="font-semibold text-white w-full h-full flex p-2 pl-0"
                        onClick={() => handleLinkClick('tasks')}>
                        <span className={`w-1 mr-4 rounded ${activeLink === 'tasks' ? 'bg-pink-500' : ''}`}></span>
                        <FontAwesomeIcon icon={faHouse}
                            className="text-red-500 mr-2 self-center" />
                        Tasks
                    </Link>
                </li>
                <li className={`hover:bg-orange-300 rounded ${activeLink === 'myday' ? 'bg-orange-300' : ''}`}>
                    <Link to="/myday"
                        className="font-semibold text-white w-full h-full flex p-2 pl-0"
                        onClick={() => handleLinkClick('myday')}>
                        <span className={`w-1 mr-4 rounded ${activeLink === 'myday' ? 'bg-pink-500' : ''}`}></span>
                        <FontAwesomeIcon icon={faSun}
                            className="text-orange-500 mr-2 self-center" />
                        My Day
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
                        <li key={category.id} className={`hover:bg-blue-300 rounded ${activeLink === category.id ? 'bg-blue-300' : ''}`}>
                            <Link to={'/category/' + category.id}
                                className="font-semibold text-white w-full h-full flex p-2 pl-0"
                                onClick={() => handleLinkClick(category.id)}>
                                <span className={`w-1 mr-4 rounded ${activeLink === category.id ? 'bg-pink-500' : ''}`}></span>
                                <FontAwesomeIcon icon={faList}
                                    className="text-blue-500 mr-2 self-center" />
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <button className="p-2 pl-4 rounded text-pink-700 font-bold text-left hover:bg-pink-200">
                <FontAwesomeIcon icon={faPlus} className="text-pink-700 mr-2" />
                New list
            </button>
        </div>
    );
}

export default SideBar;
