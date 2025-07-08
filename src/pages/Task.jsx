import React from 'react'
import '../styles/task.css'

export default function Task() {
    return (
        <div className="todo-container">
            <h2 className='todo-title'>Lista de Tareas</h2>
            <ul class="todo-list">
                <li className="task">✅ Completar planillas de pacientes</li>
                <li className="task">🔲 Hacer compras para el consultorio</li>
                <li className="task">🔲 Llamar a las Obras sociales</li>
                <li className="task">🔲 Mandar email a gerencia</li>
            </ul>
            <div class="todo-input">
                <input type="text" placeholder="Agregar nueva tarea..." />
            </div>
        </div>
    )
}
