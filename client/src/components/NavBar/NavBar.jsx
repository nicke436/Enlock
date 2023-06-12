import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillChatLeftFill, BsPeopleFill, BsGearFill } from "react-icons/bs";
import "./NavBar.css";

const NavBar = () => {
	return (
		<nav className="NavBar">
			<NavLink to="/">
				<BsFillChatLeftFill />
			</NavLink>
			<NavLink to="/friends">
				<BsPeopleFill />
			</NavLink>
			<NavLink to="/settings">
				<BsGearFill />
			</NavLink>
		</nav>
	);
};

export { NavBar };
