import React, { Component } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridDay from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

import api from '../../services/api';

import { Container } from './styles';

export default class Calendar extends Component {
  state = {
    events: []
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { events } = this.state;
    const response = await api.get(`/algo`, {
      params: {
        product: 'AGENDA',
        qtde: 10000,
        date: '2019-11-02 09:00:00'
      }
    });

    this.setState({
      events: [...events, response.data.events[0]]
    });

    console.log(this.events);
  };

  render() {
    const { events } = this.state;
    return (
      <Container>
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          }}
          plugins={[dayGridPlugin, timeGridDay, interactionPlugin]}
          ref={this.calendarComponentRef}
          time={false}
          editable
          weekends={false}
          events={events[0]}
          dateClick={this.handleDateClick}
        />
      </Container>
    );
  }
}
