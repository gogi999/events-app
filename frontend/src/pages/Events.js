import { Suspense } from 'react';

import {
  Await,
  defer,
  useLoaderData,
} from 'react-router-dom';

import EventsList from '../components/EventsList';
import { loadEvents } from '../helpers/loadEvents';

function Events() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  // const events = data.events;

  // return (
  //   <>
  //     <EventsList events={events} />
  //   </>
  // );
}

export default Events;

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
