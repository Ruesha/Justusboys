import { EventsComponent } from "./bits/Randoms"
import flyer from "../assets/flyer.png"

const Events = () => {
    return (
        <div className="event-section">
            <h5>UPCOMING</h5>

            <h1>Event & Gathering</h1>
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
                    flyer={flyer}
                />
            </div>
        </div>
    )
}

export default Events