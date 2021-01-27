import React from "react";

import "../Assets/Styling/ProfilePage.css";

class ProfilePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Hello: "World",
		};
	}

	render() {
		return (
			<div className="page-container">
				<div className="info-header">
					<div className="blood-group-section">
						<div>
							<span className="blood-group-text">O</span>{" "}
							<span className="blood-group-suffix">+ve</span>
						</div>
					</div>
					<div className="info-header-name-section">
						<div>Name: Prashanth S</div>
						<div>Email: prashanth5454@gmail.com</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfilePage;
