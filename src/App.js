import './App.css'
import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { MdLocationPin } from 'react-icons/md'
import { IoIosNotifications } from 'react-icons/io'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CiCirclePlus } from 'react-icons/ci'

import Support from './Navtopage/support'
import Notification from './Navtopage/Notification'
import Language from './Navtopage/Language'
function App() {
	const [activeSegment, setActiveSegment] = useState(null)

	const handleSegmentChange = (segment) => {
		if (activeSegment === segment) {
			setActiveSegment(null) 
		} else {
			setActiveSegment(segment) 
		}
	}

	return (
		<div className="header-navbar">
			<div className="header-navbar-left">
				<h1 className="header-logo">Ask IT</h1>
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
				<div
					className={`header-nav-item ${
						activeSegment === 'support' ? 'active' : ''
					}`}>
					<a onClick={() => handleSegmentChange('support')} href="#support">
						Support
					</a>
					{activeSegment === 'support' && (
						<div className="header-popup-box">
							<Support />
						</div>
					)}
				</div>

				<div
					className={`header-nav-item ${
						activeSegment === 'notifications' ? 'active' : ''
					}`}>
					<a
						onClick={() => handleSegmentChange('notifications')}
						href="#notifications">
						<IoIosNotifications />
						Notification
					</a>
					{activeSegment === 'notifications' && (
						<div className="header-popup-box">
							<Notification />
						</div>
					)}
				</div>

				<div
					className={`header-nav-item ${
						activeSegment === 'language' ? 'active' : ''
					}`}>
					<a onClick={() => handleSegmentChange('language')} href="#language">
						<AiOutlineGlobal />
						English
					</a>{' '}
					{activeSegment === 'language' && (
						<div className="header-popup-box">
							<Language />
						</div>
					)}
				</div>

				<div
					className={`header-nav-item ${
						activeSegment === 'signin' ? 'active' : ''
					}`}>
					<a onClick={() => handleSegmentChange('signin')} href="#signin">
						<CiCirclePlus />
						Sign in
					</a>
					{activeSegment === 'signin' && (
						<div className="header-popup-box">Sign in Info Here</div>
					)}
				</div>

				<button className="header-sign-up">Sign up</button>
			</div>
		</div>
	)
}

export default App
