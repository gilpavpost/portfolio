import React from 'react'

import '../../styles/sections/intro.scss'

const Introduction: React.FC = () => (
	<div className="introduction-section">
		<div className="intro-cont">
			<h1 className="title">Pavel Gilmutdinov.</h1>
			<h1 className="subTitle">Frontend Developer.</h1>
			<p className="snippet">Premature optimization is the root of all evil.</p>
			<p className="snippet">Based in <b>Russia.Kirov</b></p>
		</div>
	</div>
)

export default Introduction
