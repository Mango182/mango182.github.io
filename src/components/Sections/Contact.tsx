import '@/styles/Contact.css';

import { useForm, ValidationError } from '@formspree/react';


const ContactForm = () => {
  const [state, handleSubmit] = useForm("xvkgqbbb");

  if (state.succeeded) {
    return <p className="thank-you-message">Thank you for your message!</p>;
  }
  return (
    // Contact Form using Formspree
    <form onSubmit={handleSubmit} method="Post">
      <div className="form-group">
        {/* Name */}
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder='Enter your Name' required/>
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder='Enter your Email' required/>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />

        {/* Message */}
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder='Enter your Message' required></textarea>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />

        {/* Submit Button */}
        <button type="submit" disabled={state.submitting}>
          {state.submitting ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  )
};

export default function Contact() {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <ContactForm />
    </section>
  )
}