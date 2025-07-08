import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../src/components/Header';
import Aside from '../src/components/aside';
import Body from '../src/components/Body';
import DatePacient from './pages/DatePacient';
import { Messages } from './pages/Messages';
import Task from './pages/Task';
import { EndSesion } from './pages/EndSesion';
import '../src/styles/body.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Aside />
      <Routes>
        <Route path="/" element={<Navigate to="/pacientsList" />} />
        <Route path="/pacientsList" element={<Body />} />
        <Route path="/date" element={<DatePacient />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/endSession" element={<EndSesion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
