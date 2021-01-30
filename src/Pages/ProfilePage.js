import React from "react";

import "../Assets/Styling/ProfilePage.css"; // # CSS of the Profile Page

class ProfilePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// ? All User details are stored in this state variable
			userProfileDetails: {
				name: "Entity",
				bloodGroup: "O +ve",
				bloodType: "O",
				bloodPolarity: "+ve",
				email: "Entity@gmail.com",
				phoneNumber: "1234567890",
				altPhoneNumber: "1234567899",
				address: "123, XYZ road, ABC area, YOLO town - 12345",
				diseaseHistory: null,
				diabetes: false,
				lastDonated: "01/01/2021",
			},
		};
	}

	// -- Method to toggle Edit Profile details modal
	toggleEditModal = () => {
		window.alert("Edit functionality Yet to be added :)");
	};
	// | End of toggleEditModal()

	// -- Component Life-cycle methods
	// ? TO BE ADDED
	// | End of Component Life-cycle methods

	render() {
		return (
			// Page Container
			<div className="page-container">
				{/* Top Blood Group, user name and email info section */}
				<div className="info-header-container">
					<div className="info-header">
						{/* Circular area */}
						<div className="blood-group-section">
							{" "}
							<div>
								<span className="blood-group-text">
									{this.state.userProfileDetails.bloodType}
								</span>{" "}
								<span className="blood-group-suffix">
									{
										this.state.userProfileDetails
											.bloodPolarity
									}
								</span>
							</div>
						</div>
						<div className="info-header-name-section">
							<div className="info-header-user-data info-header-name">
								<span className="info-header-field-text">
									Name:{" "}
								</span>
								{this.state.userProfileDetails.name}
							</div>
							<div className="info-header-user-data info-header-email">
								<span className="info-header-field-text">
									Email:
								</span>{" "}
								{this.state.userProfileDetails.email}
							</div>
						</div>
					</div>
				</div>

				{/* Rest of the Used Profile details */}
				<div className="profile-details-container">
					{/* Holds the Edit button */}
					<div className="profile-details-header-section">
						<div
							className="edit-btn-section"
							onClick={() => this.toggleEditModal()}
						>
							✏️
						</div>
					</div>

					{/* Table that displays the User Profile Details */}
					<table className="profile-details-table">
						<tbody>
							{/* <tr>
							<th>Profile Info</th>
						</tr> */}

							<tr className="table-row">
								<td className="table-field-name">Name</td>
								<td className="table-field-data">
									{this.state.userProfileDetails.name}
								</td>
							</tr>

							<tr className="table-row">
								<td className="table-field-name">
									Blood group
								</td>
								<td className="table-field-data">
									{this.state.userProfileDetails.bloodGroup}
								</td>
							</tr>

							<tr className="table-row">
								<td className="table-field-name">Email</td>
								<td className="table-field-data">
									{this.state.userProfileDetails.email}
								</td>
							</tr>

							<tr className="table-row">
								<td className="table-field-name">
									Phone Number
								</td>
								<td className="table-field-data">
									{this.state.userProfileDetails.phoneNumber}
								</td>
							</tr>

							<tr className="table-row">
								<td className="table-field-name">
									Alternate PhoneNumber
								</td>
								<td className="table-field-data">
									{
										this.state.userProfileDetails
											.altPhoneNumber
									}
								</td>
							</tr>

							<tr className="table-row">
								<td className="table-field-name">Address</td>
								<td className="table-field-data">
									{this.state.userProfileDetails.address}
								</td>
							</tr>

							<tr className="table-row">
								<td className="table-field-name">
									Disease History
								</td>
								<td className="table-field-data">
									{/* Displayed none if disease history is NULL */}
									{this.state.userProfileDetails
										.diseaseHistory === null
										? "none"
										: "this.state.userProfileDetails.diseaseHistory"}
								</td>
							</tr>

							<tr className="table-row">
								<td className="table-field-name">Diabetes</td>
								<td className="table-field-data">
									{/* Displays Yes and No according to the value */}
									{this.state.userProfileDetails.diabetes
										? "Yes"
										: "No"}
								</td>
							</tr>

							<tr className="table-row">
								<td className="table-field-name">
									Last Donated
								</td>
								<td className="table-field-data">
									{this.state.userProfileDetails.lastDonated}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default ProfilePage;
