import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';

import '../assets/calendarstyle.css';

const ReactCalendar = () => {
    return (
        <div className='bg-white'>
            <FullCalendar 
                plugins={[dayGridPlugin]} 
                initialView="dayGridMonth" 
                locales={[jaLocale]}
                locale="ja"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek',
                }}
                themeSystem='bootstrap5'
                events={[
                    {title:'開催日', start: '2024-03-06'},
                    {title:'開催日', start: '2024-03-12'},
                    {title:'開催日', start: '2024-03-19'},
                ]}
            />

        </div>
    );
}

export default ReactCalendar;