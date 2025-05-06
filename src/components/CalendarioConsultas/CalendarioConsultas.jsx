import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { getAppointments, updateAppointment } from "../../services/appointment";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import isToday from "date-fns/isToday";
import ptBR from "date-fns/locale/pt-BR";
import { useMediaQuery } from "react-responsive";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarioConsultas.css";

const locales = { "pt-BR": ptBR };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarioConsultas = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editingTime, setEditingTime] = useState("");
  const [filter, setFilter] = useState("todos");
  const [consultasHoje, setConsultasHoje] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    async function fetchAppointments() {
      const data = await getAppointments();
      const formatted = data.map((item) => {
        const start = new Date(`${item.date}T${item.time}`);
        const end = new Date(start.getTime() + 60 * 60 * 1000);

        return {
          id: item.id,
          title: `Paciente: ${
            item.patient?.nome || "Desconhecido"
          } - Cliente: ${item.client?.name || "Desconhecido"}`,
          start,
          end,
          clientName: item.client?.name,
          patientName: item.patient?.nome,
          time: item.time,
          clientId: item.client?.id,
          patientId: item.patient?.id,
          tooltip: `Consulta de ${item.patient?.nome || "Paciente"} com ${
            item.client?.name || "Cliente"
          } às ${item.time}`,
          type: item.patient ? "paciente" : "cliente",
        };
      });

      setEvents(formatted);

      const hoje = formatted.filter((event) => isToday(event.start));
      setConsultasHoje(hoje.length);
    }

    fetchAppointments();
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setEditingTime(event.time);
  };

  const handleSave = async () => {
    if (selectedEvent && editingTime) {
      const newDate = format(selectedEvent.start, "yyyy-MM-dd");

      await updateAppointment(selectedEvent.id, {
        date: newDate,
        time: editingTime,
        clientId: selectedEvent.clientId,
        patientId: selectedEvent.patientId,
      });

      setSelectedEvent(null);
      window.location.reload();
    }
  };

  const CustomWeekHeader = ({ label }) => {
    const dias = {
      Sun: "Dom",
      Mon: "Seg",
      Tue: "Ter",
      Wed: "Qua",
      Thu: "Qui",
      Fri: "Sex",
      Sat: "Sáb",
    };

    const traduzido = dias[label] || label;
    return <span>{traduzido}</span>;
  };

  const filteredEvents =
    filter === "todos"
      ? events
      : events.filter((e) =>
          filter === "paciente"
            ? e.type === "paciente"
            : e.type === "cliente"
        );

  const eventStyleGetter = (event) => {
    const backgroundColor = event.type === "paciente" ? "#e0f7fa" : "#ffe0b2";
    return {
      style: {
        backgroundColor,
        color: "#000",
        borderRadius: "5px",
        padding: "2px 5px",
        border: "1px solid #999",
      },
    };
  };

  return (
    <div className="calendario-container">
      <h2 className="calendario-titulo">Agenda de Consultas</h2>

      {consultasHoje > 0 && (
        <div className="alerta-consultas">
          ⚠️ Você tem <strong>{consultasHoje}</strong> consulta
          {consultasHoje > 1 ? "s" : ""} marcada
          {consultasHoje > 1 ? "s" : ""} para hoje.
        </div>
      )}

      <div className="filtros-legenda">
        <div className="filtro">
          <label>Filtrar por tipo:</label>
          <select onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option value="todos">Todos</option>
            <option value="paciente">Somente Pacientes</option>
            <option value="cliente">Somente Clientes</option>
          </select>
        </div>

        <div className="legenda">
          <span style={{ background: "#e0f7fa" }} className="legenda-box" />
          Paciente
          <span style={{ background: "#ffe0b2", marginLeft: "10px" }} className="legenda-box" />
          Cliente
        </div>
      </div>

      <Calendar
        localizer={localizer}
        events={filteredEvents}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        defaultView={isMobile ? "agenda" : "month"}
        tooltipAccessor="tooltip"
        eventPropGetter={eventStyleGetter}
        style={{ height: "80vh" }}
        messages={{
          next: "Próximo",
          previous: "Anterior",
          today: "Hoje",
          month: "Mês",
          week: "Semana",
          day: "Dia",
          agenda: "Agenda",
          date: "Data",
          time: "Hora",
          event: "Consulta",
          noEventsInRange: "Sem consultas neste período.",
        }}
        formats={{
          timeGutterFormat: (date, culture, localizer) =>
            localizer.format(date, "HH:mm", culture),
          eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
            `${localizer.format(start, "HH:mm", culture)} - ${localizer.format(
              end,
              "HH:mm",
              culture
            )}`,
          agendaTimeFormat: (date, culture, localizer) =>
            localizer.format(date, "HH:mm", culture),
        }}
        components={{
          event: ({ event }) => (
            <div title={event.tooltip}>
              <strong>Paciente:</strong> {event.patientName} <br />
              <strong>Cliente:</strong> {event.clientName}
            </div>
          ),
          week: { header: CustomWeekHeader },
          day: { header: CustomWeekHeader },
        }}
      />

      {selectedEvent && (
        <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Editar Consulta</h3>
            <p>
              <strong>Cliente:</strong> {selectedEvent.clientName}
            </p>
            <p>
              <strong>Paciente:</strong> {selectedEvent.patientName}
            </p>
            <label htmlFor="time">Novo horário:</label>
            <input
              id="time"
              type="time"
              value={editingTime}
              onChange={(e) => setEditingTime(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleSave}>Salvar</button>
              <button onClick={() => setSelectedEvent(null)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarioConsultas;
