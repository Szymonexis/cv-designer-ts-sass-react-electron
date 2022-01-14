import React from "react";

import "./Header.scss";

interface HeaderProps {
	platform: string;
}

// windows - win32, macOS - darwin
const Header: React.FC<HeaderProps> = (props) => {
	return (
		<div className={"header" + (props.platform === "darwin" ? "-darwin" : "")}>
			<img src="../resources/logo/logo-transparent.png" />
			<span>CV-Designer</span>
		</div>
	);
};

export default Header;
