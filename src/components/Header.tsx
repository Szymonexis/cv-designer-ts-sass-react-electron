import React from "react";

import "./Header.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
	return <div className="header">
		<img src="../resources/logo/logo-transparent.png" />
		<span>CV-Designer</span>
	</div>;
};

export default Header;
