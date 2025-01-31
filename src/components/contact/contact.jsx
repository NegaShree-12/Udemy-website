import React from "react";
import "./ContactForm.css";
import TopNavbar from "../Topnavbar/Topnavbar";

const ContactForm = () => {
  return (
    
    <>
      <TopNavbar />
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-form-section">
          <h2 className="contact-heading">
            Get in <span className="contact-highlight">touch</span>
          </h2>
          <p className="contact-description">
            Fill out the form below, and we’ll get back to you soon.
          </p>
          <form className="contact-form">
            <input
              type="text"
              placeholder="Contact Name"
              className="input-field"
            />
            <input type="text" placeholder="Street" className="input-field" />
            <div className="row">
              <input
                type="text"
                placeholder="City"
                className="input-field half-width"
              />
              <input
                type="text"
                placeholder="Postcode"
                className="input-field half-width"
              />
            </div>
            <input
              type="text"
              placeholder="Contact Phone"
              className="input-field"
            />
            <input type="email" placeholder="Email" className="input-field" />
            <textarea
              placeholder="Let's talk about your idea"
              className="input-field textarea"
            ></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>

        <div className="contact-map-section">
          <iframe
            className="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.5134688553!2d76.88483286798547!3d11.013957787970114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1738228586495!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    </>
  );
};

export default ContactForm;
