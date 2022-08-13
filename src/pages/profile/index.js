import React, { useContext, useState } from 'react';
import { userContext } from '../../context/userContext';
import './styles.css';
import Button from '../../components/Button';
import BuildDisplay from './components/BuildDisplay';
// Image
import Heritage from '../../img/campaigns/Heritage.png';
import img1 from '../../img/profile/1.png';

// change/show email, change password, change/show username,
// CREATE placeholder to display current email
// look into adding 360 shadow on sections*

const Profile = () => {
	const user = useContext(userContext);
	const [view, setView] = useState('Profile');
	const { displayName, password, confirmPassword } = user.state;

	const submit = () => {};
	const onClick = (e) => {
		setView(e.target.value);
	};
	console.log(user);
	return (
		<div className="profile flex">
			{/* Side Bar */}
			<div className="profile-sidebar w-1/5 ">
				{/* DND campaigns list */}
				<div className=" h-36 overflow-y-auto">
					<div className="flex mx-2 my-2 ">
						<img className=" rounded-xl" src={Heritage} width="75" alt="Tapestry" />
						<p className="mx-2 my-auto">Heritage</p>
					</div>
					<div className="flex mx-2 my-2 ">
						<img className=" rounded-xl" src={Heritage} width="75" alt="Tapestry" />
						<p className="mx-2 my-auto">Tapestry</p>
					</div>
					<div className="flex mx-2 my-2 ">
						<img className=" rounded-xl" src={Heritage} width="75" alt="Tapestry" />
						<p className="mx-2 my-auto">Heritage</p>
					</div>
				</div>
				{/* Profile scroll menu */}
				<div className="overflow-y-auto border-t px-2 py-2">
					{/* Section */}
					{/* for DND campaigns options you select a campaign above  */}
					<div className="border-b mb-2 shadow-2xl">
						<div className="flex justify-center">
							<div>
								<p className="">DND</p>
							</div>
						</div>
						{/* This will be .map filler data */}
						<div className="">
							<div>
								<Button
									type="button"
									onClick={onClick}
									value="Players"
									className="bg-transparent border-none hover:delay-0 delay-100 hover:ease-in-out hover:duration-200 hover:bg-blue-500 hover:bg-opacity-10 "
								>
									Players
								</Button>
							</div>
						</div>
					</div>
					{/* Section */}
					{/* This is for Profile related things */}
					<div className="mb-2 shadow-2xl">
						<div className="">
							<div className="flex justify-center">
								<div>
									<p className="">PROFILE</p>
								</div>
							</div>
							<div>
								<Button
									type="button"
									onClick={onClick}
									value="Edit Profile"
									className="bg-transparent border-none hover:delay-0 delay-100 hover:ease-in-out hover:duration-200 hover:bg-blue-500 hover:bg-opacity-10 "
								>
									Edit Profile
								</Button>
							</div>
							<div>
								<Button
									type="button"
									onClick={onClick}
									value="Profile"
									className="bg-transparent border-none hover:delay-0 delay-100 hover:ease-in-out hover:duration-200 hover:bg-blue-500 hover:bg-opacity-10 "
								>
									Profile
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Main Body */}
			<div className="profile-body w-full">
				<BuildDisplay
					displayName={displayName}
					password={password}
					view={view}
					img={img1}
					imgWidth="125"
					imgName="1"
				/>
			</div>
		</div>
	);
};

export default Profile;
