import React from 'react';

import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';

function EditEvent() {
  const data = useRouteLoaderData('event-detail');
  const event = data.event;

  return (
    <EventForm event={event} method="patch" />
  );
}

export default EditEvent;
