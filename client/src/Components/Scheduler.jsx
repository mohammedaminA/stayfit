import React from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth, Resize, DragAndDrop  } from '@syncfusion/ej2-react-schedule';
import axios from 'axios'
// import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'
import { extend, removeClass } from '@syncfusion/ej2-base';

const Scheduler = (props) => {
    const [data, setData] = React.useState(null);
    const {disabled} = props;


    React.useEffect(() => {

        const login = localStorage.getItem("login");
        if (login) {
            let user = localStorage.getItem('user');
            user = JSON.parse(user);
            axios.get(`/api/v1/goals/${user._id}`)
            .then(res => {
                const goal = res.data.data.goal;
                if (goal.length > 0) {
                    console.log(goal[0].goals);
                    const goals = JSON.parse(goal[0].goals);
                    setData(goals);
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [])

    const schedule = extend([], data, null, true);

    const dataBinding = (e)  => {
        if (e.result?.length > 0) {
            const login = localStorage.getItem("login");
            if (login) {
                if (e.result != data) {
                    let user = localStorage.getItem('user');
                    user = JSON.parse(user);
                    axios.post(`/api/v1/goals/`, {user_id: user._id, goals: JSON.stringify(e.result)})
                    .then(res => {
                    })
                    .catch(err => {
                        console.log(err);
                    })
                }
            }
        }
    }

    const onPopupOpen = (args) => { 
        if (args.data.name === "cellClick") { 
            if ((args.data.startTime) < new Date(new Date().setHours(0, 0, 0, 0))) { 
                args.cancel = true; 
            } 
        } else { 
            if ((args.data.StartTime) < new Date(new Date().setHours(0, 0, 0, 0))) { 
                args.cancel = true; 
            } 
        } 
    } 
    
    const onRenderCell = (args) => { 
        if (args.date < new Date(new Date().setHours(0, 0, 0, 0))) { 
            args.element.classList.add('e-disableCell'); 
        } 
    
    }

    const onActionBegin = (args) => { 
        if (args.requestType === "eventChange") { 
            if ((args.data.StartTime) < new Date(new Date().setHours(0, 0, 0, 0))) { 
                args.cancel = true; 
            } 
        } 
        if (args.requestType === "eventCreate") { 
            for (var i = 0; i < args.data.length; i++) { 
                if ((args.data[i].StartTime) < new Date(new Date().setHours(0, 0, 0, 0))) { 
                args.cancel = true; 
                } 
            } 
        } 
    } 

    return (
        <>
            <div style={disabled ? {pointerEvents: 'none', opacity: '0.6'} : {}}>
                <ScheduleComponent enablerecurrencevalidation={false} enablePersistence={true} allowMultiRowSelection={false} dataBinding={dataBinding} cssClass="schedules" eventSettings={{dataSource: schedule}} width='100%' height='97vh' currentView='Month' renderCell={onRenderCell} actionBegin={onActionBegin} popupOpen={onPopupOpen}>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth, Resize, DragAndDrop ]} />
                </ScheduleComponent>
            </div>
        </>
    )
}

export default Scheduler;



// export default class Scheduler extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             scheduleData: []
//         }
//         this.data = extend([], this.state.scheduleData, null, true);
//         this.scheduleObj = null;
//     }

//     componentDidMount() {
//         const login = localStorage.getItem("login");
//         if (login) {
//             let user = localStorage.getItem('user');
//             user = JSON.parse(user);
//             axios.get(`/api/v1/goals/${user._id}`)
//             .then(res => {
//                 const goal = res.data.data.goal;
//                 if (goal.length > 0) {
//                     // console.log(goal[0].goals);
//                     const goals = JSON.parse(goal[0].goals);
//                     this.state.scheduleData = goals
//                     console.log(this.state.scheduleData)

//                 }
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//         }
//     }

//     onPopupOpen(args) { 
//         if (args.data.name === "cellClick") { 
//         if ((args.data.startTime) < new Date(new Date().setHours(0, 0, 0, 0))) { 
//             args.cancel = true; 
//         } 
//         } else { 
//         if ((args.data.StartTime) < new Date(new Date().setHours(0, 0, 0, 0))) { 
//             args.cancel = true; 
//         } 
//         } 
//     } 
//     onRenderCell(args) { 
//         if (args.date < new Date(new Date().setHours(0, 0, 0, 0))) { 
//         args.element.classList.add('e-disableCell'); 
//         } 
    
//     } 
//     onActionBegin(args) { 
//         if (args.requestType === "eventChange") { 
//         if ((args.data.StartTime) < new Date(new Date().setHours(0, 0, 0, 0))) { 
//             args.cancel = true; 
//         } 
//         } 
//         if (args.requestType === "eventCreate") { 
//         for (var i = 0; i < args.data.length; i++) { 
//             if ((args.data[i].StartTime) < new Date(new Date().setHours(0, 0, 0, 0))) { 
//             args.cancel = true; 
//             } 
//         } 
//         } 
//     } 
//     render() {
//         return (
//             <div>
//                 <ScheduleComponent ref={schedule => this.scheduleObj = schedule} width='100%' height='650px' ref={t => this.scheduleObj = t} eventSettings={{ dataSource: this.data}} renderCell={this.onRenderCell.bind(this)} popupOpen={this.onPopupOpen.bind(this)} actionBegin={this.onActionBegin.bind(this)}> 
//                     <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} /> 
//                 </ScheduleComponent> 
//             </div>
//         )
//     }
// }
