import {React} from 'react';
import {Navbar} from 'flowbite-react';


const NavigationBar = ({ children }) => {

    return (
      <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="/home">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          /> */}
          <span class="box-decoration-clone text-white text-2xl bg-gradient-to-r from-indigo-600 to-pink-500 leading-[3.5rem] px-2 mb-2">
              <a href='/home'>Dokusō</a>
            </span>
        </Navbar.Brand>
        <div class="hidden sm:block mt-2 flex"> { children } </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/home"
            active={true}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/manifesto">
            Manifesto
          </Navbar.Link>
          <Navbar.Link href="/partners">
            Partners
          </Navbar.Link>
          <Navbar.Link href="/contact">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
        <div class="sm:hidden mt-2 flex"> { children } </div>
      </Navbar>
    );
};

export default NavigationBar;
