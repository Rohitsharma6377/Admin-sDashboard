import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import  '../calendar/calendar.css'
import useCalendar from '../store/Calendarstore'
import { createEventId } from '../../data'
const Calendar = () => {

    const {currentsEvents , setCurrentEvents} = useCalendar()
    const handleEvents =async ()=>{
        await Promise.resolve(setCurrentEvents(events))
    }
    const handleDate =(selectInfo)=>{
        let title = prompt('please enter a title for event')
        let calendarApi  = selectInfo.view.calendar;

        calendarApi.unselect();
        if(title){
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.start,
                end: selectInfo.end,
                allDay:selectInfo.allDay
            })
        }
    } 
    const handeleventclic = (clickInfo)=>{
        if(
            confirm("are you sure to delete this Event ?")
            
        ){
            clickInfo.event.remove()
        }
    }
    return (
    <div className="calendar">
        <div>
            <FullCalendar plugins = {[dayGridPlugin , interactionPlugin , timeGridPlugin]}
            headerToolbar={
                {
                    left:'prev,next today ',
                    center :"titel",
                    right:" dayGridMonth, dayGridWeek,dayGridDay"
                }
            }
            allDaySlot={false}
            intialView="timeGridWeek"
            slotDuration={"01:00:00"}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            nowIndicator={true}
            intialEvents={[currentsEvents]}
            eventsSet={handleEvents}
            select={handleDate}
            eventClick={handeleventclic}
            />
        </div>
    </div>
  )
}

export default Calendar;
