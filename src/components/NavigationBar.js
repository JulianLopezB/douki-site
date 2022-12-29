import {React} from 'react';
import {Navbar, Dropdown, Avatar, Button} from 'flowbite-react';

import {useState, useEffect } from "react";
import { signInWithGoogle } from '../services/firebase';


import firebase from '../services/firebase';

const NavigationBar = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
  firebase.auth().onAuthStateChanged(user => {
    setUser(user);
  })
  }, [])
  console.log(user)

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
          {/* <div class="hidden sm:block mt-2 flex"> 
            { children } 
          </div> */}
        <div className="flex md:order-2">
          {user ? 
          <>
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
          >
            <Dropdown.Header>
              <span className="block text-sm">
                Bonnie Green
              </span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item>
              Settings
            </Dropdown.Item>
            <Dropdown.Item>
              Earnings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              Sign out
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
          </> : 
          <Button type="button"
          className="bg-black flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none text-white" 
          onClick={signInWithGoogle}>
            <i className="fab fa-google">
            </i>
            Sign in
          </Button>}
        </div>
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
          <div class="sm:hidden mt-2 flex"> 
            { children } 
          </div>
      </Navbar>
    );
};

export default NavigationBar;
