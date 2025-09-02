import ProfileSection from './profile_section/ProfileSection';
import QuickAction from './quick_action/QuickAction';
import './WelcomeSection.css'

const WelcomeSection = () => {
    return(
        <>
        <div className="welcome_outer">
            <ProfileSection/>
            <QuickAction/>
        </div>
            
        </>
    );
}

export default WelcomeSection;