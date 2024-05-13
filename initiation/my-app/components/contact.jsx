import contactStyles from '@/styles/Contact.module.css';

function ContactSection() {
  return (
    <div className={ contactStyles.section }>
      <h1>
        Contact
      </h1>
      <div>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <textarea placeholder="Message"></textarea>
        <button>
          Send
        </button>
      </div>
    </div>
  )
}

export default ContactSection;