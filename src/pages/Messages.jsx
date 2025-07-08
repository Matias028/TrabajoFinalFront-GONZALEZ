import React from 'react'
import '../styles/messagesChat.css'

export const Messages = () => {
    return (
        <div className="chat-container">
            <div className="chat-messages">
                <div className="message-user">Hola</div>
                <div className="message-bot">¡Hola! ¿En qué puedo ayudarte?</div>
                <div className="message-user">Solo estoy probando el chat.</div>
                <div className="message-bot">Perfecto, todo funciona bien :)</div>
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Escribe un mensaje..." />
            </div>
        </div>

    )
}
