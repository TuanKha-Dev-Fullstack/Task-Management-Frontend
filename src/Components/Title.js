import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Title = ({text, icon, color}) => {
    return (
        <div className={`font-semibold text-3xl ${color} flex-none h-10`}>
            <FontAwesomeIcon icon={icon} className="mr-2" />
            {text}
        </div>
    );
};

Title.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired
};

export default Title;   