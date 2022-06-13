import React from "react";
import classes from "./ContactPage.module.scss";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { GoMail } from "react-icons/go";

function ContactPage() {
  return (
    <div>
      <section className={classes.contactPage}>
        <div className={classes.contactForm}>
          <h2>Contact Us</h2>
          <form>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className={classes.input}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={classes.input}
              />
            </div>
            <textarea
              placeholder="Enter message..."
              maxLength={200}
              rows={10}
              cols={40}
              className={classes.message}
            ></textarea>
            <button className={classes.sendBtn}>Send message</button>
          </form>
        </div>
        <div className={classes.contactInfo}>
          <div className={classes.infoBox}>
            <IoLocationOutline size="5rem" color="#1f5c90" />
            <p>7760 Glenridge Dr. Oak Lawn, IL 60453</p>
          </div>
          <div className={classes.infoBox}>
            <BiPhoneCall size="5rem" color="#1f5c90" />
            <p>972-968-9359</p>
          </div>
          <div className={classes.infoBox}>
            <GoMail size="5rem" color="#1f5c90" />
            <p>info@car2go.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
