// components/CalendarioConsultas.jsx
import React, { useEffect, useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { getAppointments } from '../../services/appointment';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ptBR from 'date-fns/locale/pt-BR';
import './CalendarioConsultas.css';

const locales = { 'pt-BR': ptBR };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarioConsultas = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      const data = await getAppointments();
      const formatted = data.map((item) => ({
        title: item.client?.name || item.patient?.name || 'Consulta',
        start: new Date(`${item.date}T${item.time}`),
        end: new Date(`${item.date}T${item.time}`),
        allDay: false,
      }));
      setEvents(formatted);
    }

    fetchAppointments();
  }, []);

  return (
    <div className="calendario-container">
      <h2 className="calendario-titulo">Agenda de Consultas</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        messages={{
          next: 'Próximo',
          previous: 'Anterior',
          today: 'Hoje',
          month: 'Mês',
          week: 'Semana',
          day: 'Dia',
          agenda: 'Agenda',
          date: 'Data',
          time: 'Hora',
          event: 'Consulta',
          showMore: total => `+ Ver mais (${total})`
        }}
      />
    </div>
  );
};

export default CalendarioConsultas;
