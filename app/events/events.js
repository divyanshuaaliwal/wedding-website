import React from "react";
import styles from "./events.module.css";
import { SectionHeader, Wrapper } from '../mainLayout';

const events = [
  {
    id: 1,
    title: "Premium Members Meetup",
    date: "September 28, 2025",
    description: "An exclusive gathering for premium members to connect and network."
  },
  {
    id: 2,
    title: "Virtual Matrimony Webinar",
    date: "October 10, 2025",
    description: "Guidance session on finding compatible matches and understanding profiles."
  },
  {
    id: 3,
    title: "Community Matrimony Fair",
    date: "October 20, 2025",
    description: "Meet families and potential matches in a traditional setting."
  },
  {
    id: 4,
    title: "Festive Celebration Night",
    date: "November 5, 2025",
    description: "A cultural evening with music, food, and opportunities to bond with other families."
  },
  {
    id: 5,
    title: "Exclusive Elite Mixer",
    date: "November 18, 2025",
    description: "Invite-only networking session for elite members seeking serious matches."
  },
  {
    id: 6,
    title: "Winter Family Gala",
    date: "December 12, 2025",
    description: "A formal gathering for members and families to celebrate the season together."
  }
];

const Events = () => {
    return (
        <Wrapper>
            <div className={styles.container}>
                
                <SectionHeader
                    title={"Our Events"}
                    description={
                        "We host online and offline events where members and families can meet, interact, and explore matches in a safe, welcoming space."
                    } />
                
                <div className={styles.eventsGrid}>
                    {events.map((event) => (
                        <div key={event.id} className={styles.eventCard}>
                            <h2 className={styles.title}>{event.title}</h2>
                            <p className={styles.date}>{event.date}</p>
                            <p className={styles.description}>{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </Wrapper>
    );
};

export default Events;