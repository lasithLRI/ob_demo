import QuickActionButton from './quick_action_button/QuickActionButton';
import './QuickAction.css';
import {UserIcon} from '@oxygen-ui/react-icons';

const QuickAction = () => {
    return (
        <div className="quick_action_outer">
            <QuickActionButton icon={<UserIcon />} size={24} color="#ecf0f1" label={"Payments"} />
            <QuickActionButton icon={<UserIcon />} size={24} color="#ecf0f1" label={"Payments"} />
            <QuickActionButton icon={<UserIcon />} size={24} color="#ecf0f1" label={"Payments"} />
            <QuickActionButton icon={<UserIcon />} size={24} color="#ecf0f1" label={"Payments"} />
            <QuickActionButton icon={<UserIcon />} size={24} color="#ecf0f1" label={"Payments"} />
            <QuickActionButton icon={<UserIcon />} size={24} color="#ecf0f1" label={"Payments"} />
        </div>
    );
}

export default QuickAction;