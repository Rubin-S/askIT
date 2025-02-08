import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './styles/NavBar.css';
import { IoSearch } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';
import { IoIosNotifications } from 'react-icons/io';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CiCirclePlus } from 'react-icons/ci';

import Support from '../components/Navtopage/support';
import Notification from '../components/Navtopage/Notification';
import Language from '../components/Navtopage/Language';

function NavBar() {
  const [activeSegment, setActiveSegment] = useState(null);
  const navigate = useNavigate();

  const handleSegmentChange = (segment) => {
    setActiveSegment(activeSegment === segment ? null : segment);
  };

  return (
    <div className="header-navbar">
      <div className="header-navbar-left">
        <h1 className="header-logo"><Link to="/">AskIT</Link></h1>
      </div>

      <div className="header-navbar-center">
        <div className="header-search-wrapper">
          <div className="header-locat">
            <div className="header-location">
              <MdLocationPin />
              <span>Puducherry</span>
            </div>
          </div>
          <div className="header-search-box">
            <input type="text" placeholder="Search" />
            <div className="header-search-but">
              <button className="header-search-button">
                <IoSearch />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="header-navbar-right">
        {[
          { id: 'support', label: 'Support', component: <Support /> },
          {
            id: 'notifications',
            label: (
              <>
                <IoIosNotifications /> Notification
              </>
            ),
            component: <Notification />,
          },
          {
            id: 'language',
            label: (
              <>
                <AiOutlineGlobal /> English
              </>
            ),
            component: <Language />,
          },
          {
            id: 'signin',
            label: (
              <>
                <CiCirclePlus /> Sign in
              </>
            ),
            component: <div className="header-popup-box">Sign in Info Here</div>,
          },
        ].map(({ id, label, component }) => (
          <div key={id} className={`header-nav-item ${activeSegment === id ? 'active' : ''}`}>
            <a onClick={() => handleSegmentChange(id)} href={`#${id}`}>
              {label}
            </a>
            {activeSegment === id && <div className="header-popup-box">{component}</div>}
          </div>
        ))}

        <button className="header-sign-up" onClick={() => navigate("/Consumer-Signup")}>Sign up</button>
      </div>
    </div>
  );
}

export default NavBar;
