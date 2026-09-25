import { FaArrowRight, FaClock, FaInstagram, FaLocationDot, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import './Randoms.css'
import { FaSms } from 'react-icons/fa'
import boyflyer from "../../assets/boys-day.jpg"


export const EventsComponent = ({
    month,
    day,
    event_title,
    location,
    time,
    mode_of_entry,
    link,
    flyer
}) => {
    return (
        <div className="container" id="community">
            {flyer && (
                <div className="flyer-wrap">
                    <img
                        src={flyer}
                        alt={event_title}
                        className="flyer-img"
                    />
                    <div className="flyer-date">
                        <span>{month}</span>
                        <span>{day}</span>
                    </div>
                </div>
            )}

            <div className="details">
                <h2>{event_title}</h2>

                <span>
                    <FaLocationDot />
                    {location}
                    {" "}
                    <FaClock />
                    {time}
                </span>
            </div>

            {link ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="entry"
                >
                    {mode_of_entry} <FaArrowRight />
                </a>
            ) : (
                <div className="entry">
                    {mode_of_entry}
                </div>
            )}
        </div>
    )
}




export const Hero2 = () => {
    return (
      <div className='hero2-screen'>
        <div className="heroimage">
            <img src={boyflyer} alt="" />
        </div>
  
        <div className='hero2-content'>
        
          <div className="hero2-title">
            <span>Nobody does life alone here.</span> {""}
          </div>
  
          <div className="hero-description">
            <span>Step into a community of men who are growing , learning and showing up for each other every day. Drop your email and we&#39;ll reach out.</span>
          </div>
  
          <div className='hero2-input'>
            <input
                type="text" 
                name="email"
                className='email-input'
                placeholder='Your email address'
            />
            <button className='join-brotherhood'>Join the Circle <FaArrowRight /></button>
          </div>
        </div>
      </div>
    )
  }





  
  export const GetInTouch = () => {
      const links = [
          {
              social: "Instagram",
              icon: <FaInstagram />,
              url: "https://www.instagram.com/justusboysafrica/"
          },
          {
              social: "Twitter / X",
              icon: <FaXTwitter />,
              url: "https://x.com/Justusboysafric?s=20"
          },
          {
              social: "Whatsapp",
              icon: <FaWhatsapp />,
              url: "https://wa.me/+2349036249990"
          },
          {
              social: "Email us",
              icon: <FaSms />,
              url: "mailto:info@justusboysafrica.com"
          },
      ]
  
      return (
          <div className='get-in-touch' id="contact">
              <h5>GET IN TOUCH</h5>
  
              <h1>Find us everywhere.</h1>
  
              <span>
                  Follow along, slide in the DMs, or just come through to an event.
              </span>
  
              <div className='social-media'>
                  {links.map((link) => (
                      <a
                          key={link.social}
                          href={link.url}
                      >
                          <button>
                              {link.icon}
                              {link.social}
                          </button>
                      </a>
                  ))}
              </div>
          </div>
      )
  }