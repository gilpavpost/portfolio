/*eslint  jsx-a11y/control-has-associated-label: "off"*/
import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

import '../../styles/sections/contact.scss'

const Contact: React.FC = () => (
	<div className="contact-section">
		<div className="content-cont">
			<h1 className="section-title">Feel free to reach out.</h1>
			<p>Direct Email</p>
			<a href="mailto:gilpavpost@gmail.com" target="_blank" rel="noreferrer">
				<button><HiOutlineMail /></button>
			</a>
		</div>
		<div className="content-cont">
			<p>Other Platforms</p>
			<div className="button-cont">
				<a href="https://github.com/capriok" target="_blank" rel="noreferrer">
					<button><SiGithub /></button>
				</a>

			</div>
		</div>
	</div>
)

export default Contact
