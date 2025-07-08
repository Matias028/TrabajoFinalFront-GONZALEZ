import React from 'react';
import { CalendarClock, Contact, MessageCircleMore, ListChecks } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/aside.css';

const Aside = () => {
    return (
        <aside className="aside">
            <Link to="/date" className="aside-button"><CalendarClock /> Turnos</Link>
            <Link to="/date" className="aside-button-mobile"><CalendarClock /></Link>

            <Link to="/pacientsList" className="aside-button"><Contact /> Pacientes</Link>
            <Link to="/pacientsList" className="aside-button-mobile"><Contact /></Link>

            <Link to="/messages" className="aside-button"><MessageCircleMore /> Mensajes</Link>
            <Link to="/messages" className="aside-button-mobile"><MessageCircleMore /></Link>

            <Link to="/tasks" className="aside-button"><ListChecks /> Tareas</Link>
            <Link to="/tasks" className="aside-button-mobile"><ListChecks /></Link>
        </aside>
    );
};

export default Aside;
