import React from "react";
import "styles/pages/contact.scss";
import { HelmetConfig } from "utils";

function Contact() {
  return (
    <>
      <HelmetConfig title="Contact Us" path="/contact" />
      <section id="contact">
        <div className="container">
          <h1>We look forward to hearing from you!</h1>
          <p>
            Stylo was founded in 1997, with its first products being geometry
            boxes. The founders have been in this business since 1985. Stylo is
            a wholesale stationery brand. Over the years, Stylo has made sure to
            deliver excellent products. To cover the classroom requirements,
            Stylo diversifies its product list every year and is known for its
            quality assurance.
          </p>
          <div className="grid">
            <p>
              <strong className="accent">B. Dayal & Sons</strong>
              <br /> 274, 1st Floor, Prakash Street,
              <br /> Teliwara, Sadar Bazar, Delhi-110006
            </p>
            <p>
              <strong className="accent">Rajender Rustagi</strong>
              <br /> +91 98100 49121
              <br />
              <strong className="accent">Rakesh Rustagi</strong>
              <br /> +91 98182 80890
            </p>
            <p>
              <strong className="accent">stylostationery@gmail.com</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export { Contact };
