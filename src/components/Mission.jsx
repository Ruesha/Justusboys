
import {
  FaArrowRight,
  FaCompass,
  FaHeart,
  FaUsers,
  FaSeedling,
} from "react-icons/fa";

import "./Mission.css";

const MissionSection = () => {
  return (
    <section className="mission-section" id="story">
      <div className="mission-container">

        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="mission-intro">

          <span className="mission-badge">
            OUR MISSION
          </span>

          <h1>
            We built{" "}
            <span>something different.</span>
          </h1>

          <div className="mission-copy">

            <p className="mission-text">
              <strong>A generation of young men</strong> are growing up
              in a world where strength is often confused with silence.
              Where asking for help can feel like weakness, and genuine
              connection can be difficult to find.
            </p>

            <p className="mission-text">
              We believe men deserve a space where they can speak freely,
              build meaningful relationships, discover direction, and
              become better versions of themselves without having to
              pretend they have everything figured out.
            </p>

          </div>

        </div>


        {/* =====================================================
            MISSION CARDS
        ===================================================== */}

        <div className="mission-cards">

          {/* CONNECTION */}

          <article className="card">

            <div className="icon">
              <FaUsers />
            </div>

            <div className="card-content">

              <h3>
                Connection
              </h3>

              <p>
                Build genuine relationships with men who understand
                the journey, share the conversation, and make space
                for you to be yourself.
              </p>

            </div>

          </article>


          {/* DIRECTION */}

          <article className="card">

            <div className="icon">
              <FaCompass />
            </div>

            <div className="card-content">

              <h3>
                Direction
              </h3>

              <p>
                Find greater clarity in where you are going, what
                matters to you, and the kind of man you want to become.
              </p>

            </div>

          </article>


          {/* GROWTH */}

          <article className="card">

            <div className="icon">
              <FaSeedling />
            </div>

            <div className="card-content">

              <h3>
                Growth
              </h3>

              <p>
                Give yourself room to learn, reflect, and grow through
                honest conversations and the experiences we share together.
              </p>

            </div>

          </article>


          {/* BROTHERHOOD */}

          <article className="card">

            <div className="icon">
              <FaHeart />
            </div>

            <div className="card-content">

              <h3>
                Brotherhood
              </h3>

              <p>
                Show up for one another, celebrate the wins, carry each
                other through the hard days, and never walk the journey
                alone.
              </p>

            </div>

          </article>

        </div>


        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="mission-cta">

          <span className="mission-cta-line"></span>

          <p>
            Ready to find your circle?
          </p>

          <a
            href="https://luma.com/8oou1qdo"
            className="mission-join"
          >
            <span>
              Join the Circle
            </span>

            <FaArrowRight />

          </a>

        </div>

      </div>
    </section>
  );
};

export default MissionSection;
