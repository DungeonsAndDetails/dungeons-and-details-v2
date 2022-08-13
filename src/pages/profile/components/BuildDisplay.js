import { Form, Formik } from 'formik';
import TextInputField from '../../../components/TextInputField';

const BuildDisplay = ({ view, displayName, img, imgName, imgWidth, confirmPassword, password }) => {
	const onSubmit = () => {};
	switch (view) {
		case 'Profile':
			return (
				<div className="gird grid-flow-row">
					<div className="flex justify-evenly row-start-1">
						<div className="">
							<img className="mb-2" src={img} width={imgWidth} alt={imgName} />
							<div className="flex justify-center">
								<p className="mx-auto">{displayName}</p>
							</div>
						</div>
					</div>
					<div>
						<div>insert campaign info here</div>
					</div>
				</div>
			);
		case 'Players':
			return <div>TWO</div>;
		case 'Edit Profile':
			return (
				<div className="h-full">
					<div>
						<Formik
							initialValues={{
								displayName,
								password,
								confirmPassword,
							}}
							onSubmit={onSubmit}
						>
							<Form>
								<div className="flex justify-evenly">
									<div className="flex my-auto">
										<div className="">
											<p className="">Change Profile Picture</p>
											<img className="mx-auto" src={img} width={imgWidth} alt={imgName} />
										</div>
									</div>
									<div className="p-5">
										{/* // Change TextInputField type to the matching value? */}
										<div>
											<p className="mb-1">Change Display Name</p>
											<div className="mb-5">
												<TextInputField type="text" name="displayName" placeholder="" />
											</div>
										</div>
										<div>
											<p className="mb-1">Change Email</p>
											<div className="mb-5">
												<TextInputField type="text" name="email" placeholder="email" />
											</div>
										</div>
										<div>
											<p className="mb-1">Change Password</p>
											<div className="mb-1">
												<TextInputField type="text" name="password" placeholder="password" />
											</div>
											<div>
												<TextInputField
													type="text"
													name="confirmPassword"
													placeholder="confirmPassword"
												/>
											</div>
										</div>
									</div>
								</div>
							</Form>
						</Formik>
					</div>
				</div>
			);

		default:
			return null;
	}
};

export default BuildDisplay;
