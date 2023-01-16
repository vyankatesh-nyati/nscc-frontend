import React from 'react'
import EventRow from '../EventRow/EventRow'
import styles from './EventList.module.css'
import { Event } from '../interfaces/event.interface';

type ElementProps = {
  heading: string;
  events: Event[];
}

const EventList: React.FC<ElementProps> = ({ heading, events }) => {
  return (
    <div className={styles.main}>

      <p className={styles.heading}>{heading}</p>

      <div className={styles.tables}>
        {
          events.map(event => <>
            <EventRow
              key={event.id}
              eventName={event.displayName}
              date={new Date(event.startAt).toLocaleString("en-IN")}
            />
          </>
          )
        }
      </div>
    </div >
  )
}

export default EventList