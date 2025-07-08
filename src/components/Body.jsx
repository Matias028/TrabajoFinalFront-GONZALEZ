

import React, { useState } from 'react';
import PacientsList from '../components/PacientsList';
import '../styles/body.css';
import { UserPlus, UserRoundX } from 'lucide-react';
import showPacienteForm from './NewPacient';
import pacientListData from '../data/pacientsListData';

const Body = () => {
    const [pacients, setPacients] = useState(pacientListData.pacients);
    const [selectedPacientId, setSelectedPacientId] = useState(null);
    const search = {pacients}


    const handleSelectPacient = (id) => {
        setSelectedPacientId(id);
    };

    const handleDeletePacient = () => {
        if (selectedPacientId === null) {
            alert('Selecciona un paciente para eliminar');
            return;
        }
        const confirmed = window.confirm('¿Querés eliminar este paciente?');
        if (confirmed) {
            setPacients(pacients.filter(p => p.id !== selectedPacientId));
            setSelectedPacientId(null);
        }
    };

    const handleAddPacient = (newPacient) => {
        const newId = pacients.length ? Math.max(...pacients.map(p => p.id)) + 1 : 1;

        const pacientToAdd = {
            id: newId,
            img: "https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg?semt=ais_hybrid&w=740",
            lastVisit: 'No registrada',
            nextDate: 'No asignada',
            ...newPacient
        };

        setPacients([...pacients, pacientToAdd]);
    };

    const handleShowForm = () => {
        showPacienteForm(handleAddPacient);
    };

    return (
        <div className="body-container">
            <div className="title-container">
                <h1 className='title'>Lista de Pacientes</h1>
                <div className="btns-container">
                    <button className='btn-new-pacient' onClick={handleShowForm}>
                        Crear Paciente <UserPlus />
                    </button>
                    <button className='btn-delete-pacient' onClick={handleDeletePacient}>
                        Eliminar paciente <UserRoundX />
                    </button>
                </div>
            </div>
            <div className="pacients-list-container">
                <ul className="title-list">
                    <li className='item'>Nombre</li>
                    <li className='item'>Edad</li>
                    <li className='item'>DNI</li>
                    <li className='item'>Telefono</li>
                    <li className='item'>Email</li>
                    <li className='item'>Ultima visita</li>
                    <li className='item'>Siguiente visita</li>
                </ul>
                <PacientsList
                    pacients={pacients}
                    selectedId={selectedPacientId}
                    onSelect={handleSelectPacient}
                />
            </div>
        </div>
    );
};

export default Body;
