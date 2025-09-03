import { colors } from '@mui/material';
import IconButton from '../icon_button/IconButton';
import './TitleAndNavigations.css';
import {ChevronLeftIcon} from '@oxygen-ui/react-icons';
import { useNavigate } from 'react-router-dom';

const TitleAndNavigations = ({title}) => {
    const navigate = useNavigate();
    return (
        <div className="title_and_navigations_outer">
            <IconButton icon={<ChevronLeftIcon width={64} height={64} fill="#2c3e50" />} color="#2c3e50" onClick={()=>navigate('/')} />
            <p>{title}</p>
        </div>
    );
}

export default TitleAndNavigations;