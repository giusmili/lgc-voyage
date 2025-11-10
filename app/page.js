"use client";
import Swal from 'sweetalert2';

export default function HomePage() {
  const handleDatesSubmit = (e) => {
    e.preventDefault();
    const from = e.currentTarget.from?.value;
    const to = e.currentTarget.to?.value;
    if (from && to && to >= from) {
      Swal.fire('Good choice!', 'You good check!', 'success');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check your dates',
        footer: '<a href="">Why do I have this issue?</a>'
      });
    }
  };

  return (
    <>
      <header>
        <h1>
          <span className="material-icons" aria-hidden="true">
            location_on
          </span>
          Travel the world
        </h1>
      </header>
      <main>
        <div className="main-section" role="region">
          <nav>
            <ul>
              <li>
                <a href="#" className="active">
                  <span className="material-icons" aria-hidden="true">
                    flight
                  </span>
                  Flight</a>
              </li>
              <li>
                <a href="#">
                  <span className="material-icons" aria-hidden="true">
                    hotel
                  </span>
                  Hotel</a>
              </li>
              <li>
                <a href="#">
                  <span className="material-icons" aria-hidden="true">
                    car_rental
                  </span>
                  Rental</a>
              </li>
            </ul>
            <fieldset>
              <legend>Travel the world with us</legend>
              <form onSubmit={handleDatesSubmit}>
                <div className="form" role="region">
                  <label htmlFor="from">
                    from
                  </label>
                  <input type="date" id="from" name="from" aria-hidden="true" />
                </div>
                <div className="form" role="region">
                  <label htmlFor="to">
                    to
                  </label>
                  <input type="date" id="to" name="to" aria-hidden="true" />
                </div>
                <input type="submit" value="Search and find dates" />
              </form>
            </fieldset>
          </nav>
        </div>

        <section className="grid-country-offer">
          <h2>Good Offers Right Now</h2>
          <p>Up to <strong>50%</strong> discount.</p>
          <ul>
            <li>
              <figure>
                <img src="/asset/cinqueterre.jpg" alt="Cinque Terre" />
                <figcaption>
                  <h4>Cinque Terre</h4>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="/asset/newyork2.jpg" alt="New York" />
                <figcaption>
                  <h4>New York</h4>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="/asset/sanfran.jpg" alt="San Francisco" />
                <figcaption>
                  <h4>San Francisco</h4>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="/asset/pisa.jpg" alt="Pisa" />
                <figcaption>
                  <h4>Pisa</h4>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="/asset/paris.jpg" alt="Paris" />
                <figcaption>
                  <h4>Paris</h4>
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>

        <section className="grid-explore-offer">
          <h2>Explore Nature</h2>
          <p>Travel with us and see nature at its finest.</p>
          <ul>
            <li>
              <figure>
                <img src="/asset/mountains2.jpg" alt="Mountains, Austria" />
                <figcaption>
                  <h4>Mountains, Austria</h4>
                  <p>One-way from $39</p>
                  <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                  <button aria-label="Buy">Buy tickets</button>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="/asset/ocean2.jpg" alt="West Coast, Norway" />
                <figcaption>
                  <h4>West Coast, Norway</h4>
                  <p>Roundtrip from $79</p>
                  <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                  <button aria-label="Buy">Buy tickets</button>
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>

        <section className="grid-best-offer">
          <h2>Get the best offers first!</h2>
          <p>Join our newsletter</p>
          <fieldset>
            <legend>Join our newsletter</legend>
            <form action="https://www.google.com/search" method="get">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="query" id="email" placeholder="Your Email address" />
              <input type="submit" value="Subscribe" />
            </form>
          </fieldset>
        </section>

        <section className="grid-contact-offer">
          <h2>Contact</h2>
          <p>Let us book your next trip!</p>
          <ul>
            <li>
              <span className="material-icons" aria-hidden="true">
                location_on
              </span>
              Chicago, US
            </li>
            <li>
              <span className="material-icons" aria-hidden="true">
                local_phone
              </span>
              Phone: +00 151515
            </li>
            <li>
              <span className="material-icons" aria-hidden="true">
                email
              </span>
              <a href="mailto:contact@gmail.com">
                Email: contact@gmail.com
              </a>
            </li>
          </ul>
          <form action="#" method="get">
            <input type="text" name="firstname" placeholder="First name" aria-hidden="true" />
            <input type="email" name="email" placeholder="E-mail" aria-hidden="true" />
            <textarea name="message" aria-hidden="true" placeholder="Your message..." />
            <input type="submit" value="send message" />
          </form>
        </section>
      </main>
      <footer>
        <p>Find Us On</p>
        <ul>
          <li><a href="#"><img src="/asset/facebook.svg" alt="facebook" /></a></li>
          <li><a href="#"><img src="/asset/instagram.svg" alt="instagram" /></a></li>
          <li><a href="#"><img src="/asset/linkedin.svg" alt="linkedin" /></a></li>
          <li><a href="#"><img src="/asset/twitter.svg" alt="twitter" /></a></li>
        </ul>
        <p>&copy; Powered by GiusMili - 2021 </p>
      </footer>
    </>
  );
}
