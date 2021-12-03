import React from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth, Resize, DragAndDrop  } from '@syncfusion/ej2-react-schedule';
import axios from 'axios'
import {useParams} from 'react-router-dom'
// import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'
import { extend } from '@syncfusion/ej2-base';

const Scheduler = (props) => {
    const [data, setData] = React.useState(null);
    const {disabled} = props;
    const { id } = useParams();


    React.useEffect(() => {
        window.document.getElementsByClassName('e-schedule-toolbar-container')[0].remove();
        window.document.getElementsByClassName('navbar')[0].remove();
        // const login = localStorage.getItem("login");
        // if (login) {
            // let user = localStorage.getItem('user');
            // user = JSON.parse(user);
            axios.get(`/api/v1/goals/${id}`)
            .then(res => {
                const goal = res.data.data.goal;
                if (goal.length > 0) {
                    const goals = JSON.parse(goal[0].goals);
                    setData(goals);
                }
            })
            .catch(err => {
                console.log(err);
            })
        // }
    }, [])

    const schedule = extend([], data, null, true);


    return (
        <>
            <div style={disabled ? {pointerEvents: 'none', opacity: '0.6'} : {pointerEvents: 'none'}}>
                <ScheduleComponent cssClass=""  enablePersistence={true} allowMultiRowSelection={false} cssClass="schedules" eventSettings={{dataSource: schedule}} width='100%' height='97vh' currentView='Agenda'>
                    <Inject services={[Day, Week, Agenda ]} />
                </ScheduleComponent>
            </div>
        </>
    )
}

export default Scheduler;