import React from 'react'
import ShareScheduler from '../Components/ShareScheduler'
import {useNavigate} from 'react-router-dom'

function MySchedule(props) {
    const {loginState, checkLoginState} = props;
    const naviate = useNavigate();
    
    React.useEffect(() => {
        checkLoginState();
    },[])

    return (
        <div>
            <div className="px-5 my-1">
                <ShareScheduler disabled={false} />
            </div>
        </div>
    )
}

export default MySchedule
