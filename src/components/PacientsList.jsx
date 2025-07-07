/* 
import React from 'react';
import '../styles/body.css';

export const PacientsList = ({ pacients }) => {
  return (
    <div className="pacients-list-container">
      <ul className="pacients-list">
        {pacients.map(pacient => (
          <li key={pacient.id} className="pacient-item">
            <img src={pacient.img} alt={pacient.name} className='pacient-img' />
            <div className="pacient-img-name-mobile">
              <img src={pacient.img} alt={pacient.name} className='pacient-img-mobile' />
              <h2 className="pacient-name-mobile">{pacient.name}</h2>
            </div>
            <h2 className="pacient-name">{pacient.name}</h2>
            <p className='pacient-age'>{pacient.age}</p>
            <p className='pacient-dni'>{pacient.dni}</p>
            <p className='pacient-phone'>{pacient.phone}</p>
            <p className='pacient-email'>{pacient.email}</p>
            <p className='pacient-last-visit'>{pacient.lastVisit}</p>
            <p className='pacient-next-date'>{pacient.nextDate}</p>
          </li>
        ))}
      </ul>
      <ul className="pacients-list-mobile">
        {pacients.map(pacient => (
          <li key={pacient.id} className="pacient-item">
            <img src={pacient.img} alt={pacient.name} className='pacient-img' />
            <div className="pacient-img-name-mobile">
              <img src={pacient.img} alt={pacient.name} className='pacient-img-mobile' />
              <h2 className="pacient-name-mobile">{pacient.name}</h2>
            </div>
            <div className="pacient-info-mobile">
              <h2 className="pacient-name">Nombre: {pacient.name}</h2>
              <p className='pacient-age'><span className='text-info-mobile'>Edad: </span>{pacient.age}</p>
              <p className='pacient-dni'><span className='text-info-mobile'>DNI: </span>{pacient.dni}</p>
              <p className='pacient-phone'><span className='text-info-mobile'>Tel: </span>{pacient.phone}</p>
              <p className='pacient-email'><span className='text-info-mobile'>Email: </span>{pacient.email}</p>
              <p className='pacient-last-visit'><span className='text-info-mobile'>Ult. visita: </span>{pacient.lastVisit}</p>
              <p className='pacient-next-date'><span className='text-info-mobile'>Sig. visita: </span>{pacient.nextDate}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PacientsList;
 */

import React from 'react';
import '../styles/body.css';

const PacientsList = ({ pacients, selectedId, onSelect }) => {
  return (
    <div className="pacients-list-container">
      <ul className="pacients-list">
        {pacients.map(pacient => (
          <li
            key={pacient.id}
            className={`pacient-item ${selectedId === pacient.id ? 'selected' : ''}`}
            onClick={() => onSelect(pacient.id)}
          >
            <img src={pacient.img} alt={pacient.name} className='pacient-img' />
            <div className="pacient-img-name-mobile">
              <img src={pacient.img} alt={pacient.name} className='pacient-img-mobile' />
              <h2 className="pacient-name-mobile">{pacient.name}</h2>
            </div>
            <h2 className="pacient-name">{pacient.name}</h2>
            <p className='pacient-age'>{pacient.age}</p>
            <p className='pacient-dni'>{pacient.dni}</p>
            <p className='pacient-phone'>{pacient.phone}</p>
            <p className='pacient-email'>{pacient.email}</p>
            <p className='pacient-last-visit'>{pacient.lastVisit}</p>
            <p className='pacient-next-date'> {pacient.nextDate}</p>
          </li>
        ))}
      </ul>

      <ul className="pacients-list-mobile">
        {pacients.map(pacient => (
          <li
            key={pacient.id}
            className={`pacient-item ${selectedId === pacient.id ? 'selected' : ''}`}
            onClick={() => onSelect(pacient.id)}
          >
            <img src={pacient.img} alt={pacient.name} className='pacient-img' />
            <div className="pacient-img-name-mobile ">
              <img src={pacient.img} alt={pacient.name} className='pacient-img-mobile' />
              <h2 className="pacient-name-mobile">{pacient.name}</h2>
            </div>
            <div className="pacient-info-mobile">
              <h2 className="pacient-name">Nombre: {pacient.name}</h2>
              <p className='pacient-age'><span className='text-info-mobile'>Edad: </span> {pacient.age}</p>
              <p className='pacient-dni'><span className='text-info-mobile'>DNI: </span>{pacient.dni}</p>
              <p className='pacient-phone'><span className='text-info-mobile'>Tel: </span>{pacient.phone}</p>
              <p className='pacient-email'><span className='text-info-mobile'>Email: </span> {pacient.email}</p>
              <p className='pacient-last-visit'><span className='text-info-mobile'>Ult. visita: </span>{pacient.lastVisit}</p>
              <p className='pacient-next-date'><span className='text-info-mobile'>Sig. visita: </span>{pacient.nextDate}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PacientsList;
