import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);

  /*Función para manejar el cambio de fecha*/
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setCalendarOpen(false); // Cerrar el calendario después de seleccionar una fecha
  };

  return (
    <>
      <div className='calendar-container '>
          <div className='button-calendar'>
              <button onClick={() => setCalendarOpen(!calendarOpen)}>
                  <div className='desplegarCalendario'>
                      {selectedDate ? selectedDate.toLocaleDateString() : <i class="far fa-calendar"></i>}
                  </div>
              </button>
          </div>
          <div className='calendar-image'>
              {calendarOpen && (
                  <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  inline // Renderizar el calendario en línea (visible todo el tiempo)
                  />
              )}
          </div>
      </div>
      </>
  );
};

export default Calendar;