
import { EventsComponent } from "./bits/Randoms"

const Events = () => {
    return (
        <div className="event-section">
            <h5>UPCOMING</h5>

            <h1>Events & Gatherings</h1>
            <span className="event-description">
                Come through. No tie needed.
            </span>

            <div>
                <EventsComponent
                    month={"OCT"}
                    day={"31"}
                    event_title={"JustUsBoys Debut Event"}
                    location={"Lagos"}
                    time={"10:00 AM"}
                    mode_of_entry={"Register"}
                    link={"https://tinyurl.com/2x3whnhw"}
                />

                <EventsComponent
                    month={"DEC"}
                    day={"07"}
                    event_title={"Mentorship & Career Panel"}
                    location={"Abuja"}
                    time={"10:00 AM"}
                    mode_of_entry={"Coming Soon"}
                />

                <EventsComponent
                    month={"FEB"}
                    day={"27"}
                    event_title={"Annual Justusboys Retreat"}
                    location={"Africa"}
                    time={"10:00 AM"}
                    mode_of_entry={"Coming Soon"}
                />
            </div>
        </div>
    )
}

export default Events

