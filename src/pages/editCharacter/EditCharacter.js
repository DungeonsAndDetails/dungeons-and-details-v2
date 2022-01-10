import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Field, Formik, Form } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
	const navigate = useNavigate();
	const params = useParams();
	const [student, setStudent] = useState(null);

	useEffect(() => {
		axios
			.get('http://localhost:4000/students/edit-student/' + params.id)
			.then((res) => {
				setStudent({ ...res.data });
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const submit = async (values) => {
		axios
			.put('http://localhost:4000/students/update-student/' + params.id, values)
			.then((res) => {
				console.log(res.data);
				console.log('Student successfully updated');
			})
			.catch((error) => {
				console.log(error);
			});

		// Redirect to Student List
		navigate('/student-list');
	};

	console.log('student', student);

	if (!student) {
		return null;
	}

	return (
		<Formik
			initialValues={{
				name: student.name,
				email: student.email,
				rollno: student.rollno,
			}}
			onSubmit={submit}
		>
			<Form>
				<div className="columns-3">
					<div>
						<div htmlFor="name">Name</div>
						<Field type="text" name="name" />
					</div>
					<div>
						<div htmlFor="email">Email</div>
						<Field type="email" name="email" />
					</div>
					<div>
						<div htmlFor="rollno">Roll Number</div>
						<Field type="text" name="rollno" />
					</div>
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</Form>
		</Formik>
	);
};

EditStudent.propTypes = {};

EditStudent.defaultProps = {};

export default EditStudent;
