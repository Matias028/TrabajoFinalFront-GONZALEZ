import React from 'react'
import { CalendarClock } from 'lucide-react';
import { Contact } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { ListChecks } from 'lucide-react';
import '../styles/aside.css';

const Aside = () => {
    return (
        <aside className="aside">
            <button className="aside-button"><CalendarClock /> Turnos</button>
            <button className="aside-button-mobile"><CalendarClock /></button>
            <button className="aside-button"><Contact /> Pacientes</button>
            <button className="aside-button-mobile"><Contact /></button>
            <button className="aside-button"><MessageCircleMore /> Mensajes</button>
            <button className="aside-button-mobile"><MessageCircleMore /></button>
            <button className="aside-button"><ListChecks /> Tareas</button>
            <button className="aside-button-mobile"><ListChecks /></button>

        </aside>
    )
}

export default Aside;





