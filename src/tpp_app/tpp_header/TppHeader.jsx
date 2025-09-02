import IconButton from '../../common_components/icon_button/IconButton';
import {UserIcon} from '@oxygen-ui/react-icons';
import'./TppHeader.css';

const TppHeader = () => {
    return (
        <div className="tpp_header_outer">
            <p>Accounts Central</p>
            <IconButton icon={<UserIcon />} size={24} color="#ecf0f1" />
        </div>
    );
}

export default TppHeader;