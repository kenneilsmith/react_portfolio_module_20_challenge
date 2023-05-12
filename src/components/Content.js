import React from "react";
import headshot from "../assets/images/headshot.png";
import blog from "../assets/images/blog_screenshot.png";
import note_taker from "../assets/images/note_taker_screenshot.png";
import { FaGithub } from "react-icons/fa";
import resume from "../assets/resume/resume.docx";
import resumeIcon from "../assets/images/resume.png";
import weather_app from "../assets/images/weather_app.png";
import work_scheduler from "../assets/images/work_scheduler.png";
import horiseon from "../assets/images/horiseon.png";
import password_gen from "../assets/images/password_gen.png";

const Content = () => {
  return (
    <main>
      <section id="about-me">
        <h1>About Me</h1>
        <img src={headshot} alt="Damian Smith" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
          nunc eget nibh rutrum consequat. Donec at egestas leo. Duis felis
          felis, viverra vel vehicula vel, fermentum a arcu. Donec ut ultrices
          eros. Sed volutpat augue non leo feugiat sollicitudin. Sed consequat,
          lorem eu aliquam porttitor, diam leo vulputate ante, a blandit eros
          magna eu nisl. Donec tincidunt, augue eget ultrices malesuada, ipsum
          sapien
        </p>
      </section>
      <section id="portfolio">
        <h1>Portfolio</h1>

        <div className="projects">
          <div className="project">
            <a href="https://hidden-chamber-39007.herokuapp.com">
              <h3>Blog App</h3>
            </a>
            <a href="https://github.com/kenneilsmith/MVC-tech-blog-challenge-14">
              <FaGithub />
            </a>
            <img src={blog} alt="Project 1" />
          </div>

          <div className="project">
            <a href="https://glacial-crag-00459.herokuapp.com/">
              <h3>Note Taker App</h3>
            </a>
            <a href="https://github.com/kenneilsmith/MVC-tech-blog-challenge-14">
              <FaGithub />
            </a>
            <img src={note_taker} alt="Project 1" />
          </div>

          <div className="project">
            <a href="https://kenneilsmith.github.io/weather_dashborad_module_6/">
              <h3>Weather App</h3>
            </a>
            <a href="https://github.com/kenneilsmith/weather_dashborad_module_6">
              <FaGithub />
            </a>
            <img src={weather_app} alt="Project 1" />
          </div>

          <div className="project">
            <a href=" https://kenneilsmith.github.io/workday_scheduler_module_5/">
              <h3>Work Day Scheduler</h3>
            </a>
            <a href="https://github.com/kenneilsmith/workday_scheduler_module_5">
              <FaGithub />
            </a>
            <img src={work_scheduler} alt="Project 1" />
          </div>
          <div className="project">
            <a href="https://kenneilsmith.github.io/horiseon_optimized_mod_1/">
              <h3>Horiseon Optimized</h3>
            </a>
            <a href="https://github.com/kenneilsmith/horiseon_optimized_mod_1">
              <FaGithub />
            </a>
            <img src={horiseon} alt="Project 1" />
          </div>
          <div className="project">
            <a href="https://kenneilsmith.github.io/password_generator_mod_3/">
              <h3>Password Generator</h3>
            </a>
            <a href="https://github.com/kenneilsmith/password_generator_mod_3">
              <FaGithub />
            </a>
            <img src={password_gen} alt="Project 1" />
          </div>
        </div>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <form>
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label for="email">Email address:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section id="resume">
        <h1>Resume</h1>
        <a href={resume}>
          <img src={resumeIcon} alt="Resume Icon" id="resumeIcon" />
          Download Resume
        </a>
      </section>
    </main>
  );
};

export default Content;
