import ImageTextSlider from './ImageTextSlider';
import TestimonialsSwiper from './testimonial';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header>
        <div className="up-box container">
          <div className="container text-center">
            {/*<img src="/logo.png" alt="" width="200px" className="mt-5" />*/}
            <Image
              src={'/logo.png'}
              alt={'item.name'}
              width="200"
              className="mt-5"
              fill
            />
          </div>
          
        </div>
      </header>
      <div className="header container text-center p-5">
        <h1 className="">NEED HELP RELOCATING TO AFRICA?</h1>
        <p className="lead text-transform-uppercase">
          Get a 45 min phone consultation
        </p>
        <div className="row text-center col-md-6 m-auto mt-4">
          <a className="btn btn-outline-dark btn-lg m-2 col-md-12" href="#" role="button">Explore Your Options</a>
          {/*<a className="btn btn-success btn-lg m-2 col-md-12" href="#" role="button"><i className='bx bxl-whatsapp'></i> WhatsApp</a>*/}
        </div>
      </div>

      <div className="container mt-5 bg-light p-3 rounded shadow-sm">
        <ImageTextSlider />
      </div> 

      <section className="container mt-5">
  <div className="container text-center mt-5 mb-5">
    <h2 className="mb-4">Our Services</h2>
    <p className="lead">
      At Relocate Tz, we help individuals, families and entrepreneurs navigate every step of their journey to Tanzania. Whether you're planning a short visit, a trial run or a permanent move, we provide tailored support including visa guidance, flight assistance, relocation logistics and expert advice on starting a business, education for your children and identifying the best areas to live. Our goal is to make your transition smooth, informed and inspiring so you can focus on building your new life with confidence and peace of mind.
    </p>
  </div>

  <div className="row justify-content-center gy-4">
    {[
      {
        icon: 'bx-home',
        title: 'Where to live',
        text: 'Discover the best neighborhoods and cities in Tanzania based on lifestyle, safety, cost and accessibility.',
      },
      {
        icon: 'bx-money',
        title: 'How to buy property',
        text: 'Get expert advice on purchasing land, houses or investment properties in Tanzania as a foreigner or resident.',
      },
      {
        icon: 'bx-dock-left',
        title: 'Work Opportunities',
        text: 'Explore job sectors in demand, how to apply for work permits, and tips on finding employment in Tanzania.',
      },
      {
        icon: 'bx-user-check',
        title: 'Residency Permit',
        text: 'Learn which residency options fit your needs and get help with permit application, renewal and compliance.',
      },
      {
        icon: 'bx-first-aid',
        title: 'Safety and Security',
        text: 'Stay informed about local safety practices, emergency services, secure areas, and expat safety tips.',
      },
      {
        icon: 'bx-cart',
        title: 'Cost Of Living',
        text: 'Understand the average expenses for housing, food, utilities, transport and daily living across Tanzania.',
      },
      {
        icon: 'bx-male-female',
        title: 'Social Life',
        text: 'Find expat groups, cultural events, nightlife, dining, and family-friendly activities to enjoy in Tanzania.',
      },
      {
        icon: 'bx-donate-heart',
        title: 'Health Care',
        text: 'Access reliable information on hospitals, clinics, insurance, and health services for foreigners in Tanzania.',
      },
    ].map((item, i) => (
      <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
        <div className="card h-100 p-3 text-center shadow-sm d-flex flex-column justify-content-between">
          <i className={`bx ${item.icon} bx-lg mb-3`}></i>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text flex-grow-1">{item.text}</p>
            <a href="" className="btn btn-sm btn-dark mt-3 align-self-center">
              <i className="bx bxs-send"></i> Get Started
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


<button
  className="btn btn-success bxx position-fixed bottom-0 end-0 m-4 rounded shadow whatsapp-float"
  data-bs-toggle="modal"
  data-bs-target="#whatsappModal"
  aria-label="Chat with us on WhatsApp"
>
  <i className="bx bxl-whatsapp bx-sm"></i>
</button>

{/* WhatsApp Modal */}
<div
  className="modal fade"
  id="whatsappModal"
  tabIndex={-1}
  aria-labelledby="whatsappModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content rounded-4 shadow-lg border-0">
      <div className="modal-header bg-dark text-white">
        <h5 className="modal-title" id="whatsappModalLabel">
          Chat with Relocate Tz
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body p-4 text-center">
        <p className="mb-3">
          Got questions? Our relocation experts are here for you!
          <br />
          Tap below to chat with us on WhatsApp.
        </p>
        <a
          href="https://wa.me/255712345678"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success px-4"
        >
          <i className="bx bxl-whatsapp me-2"></i> Start Chat
        </a>
      </div>
    </div>
  </div>
</div>

      

      <div className="container text-center mt-5 mb-5 bg-light p-3 rounded shadow-sm">
        <h2 className="mb-4">Testimonials</h2>
        <p className='lead'>
          Explore how our customers say about us. We are proud to have helped many people relocate to Tanzania and we are happy to share their experiences with you.
        </p>
        <TestimonialsSwiper />
      </div>

      <div className="container text-center mt-5 mb-5 p-2 rounded shadow-sm">
        <h2 className="mt-5 mb-4">Contact Us</h2>
        <hr/>
        <div className="row text-center col-md-10 m-auto mt-4">
        <div className="col-lg-6 container my-5">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control p-3" id="name" placeholder="Enter your full name" />
                  </div>

                  <div className="mb-3">
                    <input type="email" className="form-control p-3" id="email" placeholder="Enter your email" />
                  </div>

                  <div className="mb-3">
                    <input type="tel" className="form-control p-3" id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div className="mb-3">
                    <textarea className="form-control" id="message" rows={5} placeholder="Type your message here..."></textarea>
                  </div>

                  <button type="submit" className="btn btn-dark w-100">Send Message</button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <h6 className="h4">Reach us on</h6>
            <p className='lead'>
              If you have any questions or need assistance, feel free to reach out to us. We are here to help you with your relocation needs.
            </p>
            <ul className="list-group list-group-flush">
                <li className="list-group-item lead"><i className="bx bxs-phone"></i> Phone: <a href="" className="text-decoration-none text-primary">+255 758 123 822</a></li>
                <li className="list-group-item lead"><i className="bx bxs-envelope"></i> Email: <a href="" className="text-decoration-none text-primary">info@locatetz.com</a></li>
                <li className="list-group-item lead"><i className="bx bxs-envelope"></i> Email2: <a href="" className="text-decoration-none text-primary">sales@locatetz.com</a></li>
                <li className="list-group-item lead"><i className="bx bxs-inbox"></i> P.O Box 123 Dar es Salaam</li>
                <li className="list-group-item lead"><i className="bx bxs-map"></i> Office: Mbezi Beach, Dar es Salaam, Tanzania</li>
            </ul>
            <a className="btn btn-outline-dark btn-md m-2 col-md-6" href="#" role="button">Book a Consultation</a>
            <a className="btn btn-success btn-md m-2 col-md-6" href="#" role="button"><i className='bx bxl-whatsapp'></i> WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="container py-5">
      <h1 className="text-center mb-4">Relocate to Tanzania with Ease</h1>
      <p className="lead text-center mb-5">Explore everything you need to know about living, working, and thriving in Tanzania.</p>

      {/* Video Section */}
      <div className="row mb-5">
        <div className="col-12 col-lg-8 mx-auto">
          <div className="ratio ratio-16x9 rounded shadow">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Relocate to Tanzania"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Visa & Residency Guide */}
      <section className="mb-5 bg-light p-4 rounded shadow-sm">
        <h2 className="text-center mb-4">Visa & Residency Guide</h2>
        <p className="text-center text-muted mb-4 lead">
          Understand the visa categories, residency options, and legal steps to stay in Tanzania long-term.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">✔️ Tourist, Student, and Business Visa Info</li>
              <li className="list-group-item">✔️ Residence Permit Types & Requirements</li>
              <li className="list-group-item">✔️ Step-by-step Application Process</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work & Business Opportunities */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Work & Business Opportunities</h2>
        <p className="text-center text-muted mb-4 lead">
          Discover Tanzania’s growing sectors and how you can launch or expand your career or business here.
        </p>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5>Startup-Friendly Economy</h5>
              <p>Tap into emerging markets and government-backed initiatives for entrepreneurs.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5>Remote Work Infrastructure</h5>
              <p>Benefit from strong internet, co-working spaces, and affordable living.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5>In-Demand Job Sectors</h5>
              <p>Opportunities in tourism, tech, agriculture, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqOneHeader">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne" aria-expanded="true" aria-controls="faqOne">
                What documents are required to move to Tanzania?
              </button>
            </h2>
            <div id="faqOne" className="accordion-collapse collapse show" aria-labelledby="faqOneHeader" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                You'll typically need a valid passport, visa, and possibly a residence permit depending on your purpose of stay.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqTwoHeader">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo" aria-expanded="false" aria-controls="faqTwo">
                Is Tanzania safe for foreigners?
              </button>
            </h2>
            <div id="faqTwo" className="accordion-collapse collapse" aria-labelledby="faqTwoHeader" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Tanzania is generally safe. As with any destination, stay alert and follow local guidance.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqThreeHeader">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree" aria-expanded="false" aria-controls="faqThree">
                Can I buy land or property in Tanzania?
              </button>
            </h2>
            <div id="faqThree" className="accordion-collapse collapse" aria-labelledby="faqThreeHeader" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Non-citizens can lease land but not own it outright. There are structured legal paths to long-term land use.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="text-center bg-light py-5 rounded shadow-sm mb-5">
        <h2 className="mb-3">Stay Updated with RelocateTz</h2>
        <p className="mb-4 lead">Get free tips, guides, and insider updates straight to your inbox.</p>
        <form className="row justify-content-center">
          <div className="col-md-6 col-sm-8 mb-3">
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="col-12">
            <button className="btn btn-primary px-4" type="submit">Subscribe</button>
          </div>
        </form>
      </section>

      {/* Final CTA 
      <div className="text-center">
        <h3 className="mb-3">Ready to Start Your Tanzanian Journey?</h3>
        <a href="/contact" className="btn btn-success btn-lg px-5">Get Started</a>
      </div>*/}
    </div>

      <footer className="bg-black text-center mt-5">
        <div className="container text-white p-5">
          <p className="">
            &copy; {new Date().getFullYear()} Relocate Tanzania. All rights reserved.
          </p>
          <p className="">
            <a href="#" className="">Privacy Policy</a> | <a href="#" className="">Terms of Service</a>
          </p>
        </div>
      </footer>

    </>
  );
}
