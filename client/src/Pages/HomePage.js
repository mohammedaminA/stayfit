import React from 'react';
import Scheduler from '../Components/Scheduler';
import {useNavigate} from 'react-router-dom';


const HomePage = (props) => {
    const {loginState, checkLoginState}  = props;
    const navigate = useNavigate();

    React.useEffect(() => {
        checkLoginState();
    },[])

    return (
        <div>
            <div className="header">
                <div className="text-center">
                    <h1 className="text-white">STEP-UP YOUR</h1>
                    <h1 style={{fontSize: '60px'}} className="text-white m-0 p-0">
                        <span style={{color: 'red'}}>FITNESS </span> WITH US
                    </h1>
                    <h4 className="text-white">Schedule Your Gym Time</h4>
                </div>
            </div>
            <h1 className="text-center py-3">Your Fitness Schedule</h1>
            {loginState ? 
                <div className="px-5"><Scheduler disabled={!loginState} /></div>
                :
                <div className="d-flex aling-items-center justify-content-center mx-5">
                    <div style={{width: '50vw'}}>
                        <img src={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fitness-hangover-1565770628.jpg?crop=0.668xw:1.00xh;0.252xw,0&resize=980:*"} style={{width: '80%', height: '80%'}} />
                    </div>
                    <div style={{width: '50vw'}}>
                        <h1 className="m-0">Schedule Your <span style={{color: 'red'}}>Fitness</span> With Us</h1>
                        <ol>
                            <li>Testing Please Ignore</li>
                            <li>Testing Please Ignore</li>
                            <li>Testing Please Ignore</li>
                        </ol>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <div className="header_buttons">
                            <button type="button" onClick={() => navigate("/login")}>Login</button>
                            <button type="button" onClick={() => navigate("/register")}>Signup</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default HomePage;