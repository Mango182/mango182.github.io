import '../../styles/Contact.css';

const ContactForm = () => {
  return (
    <form action="https://formspree.io/f/xvkgqbbb" method="Post">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder='Enter your Name'/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder='Enter your Email'/>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder='Enter your Message' ></textarea>
        <button type="submit">Send</button>
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