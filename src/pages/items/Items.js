import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import EditItemField from './components/EditItemField';
import { itemsContext } from '../../context/itemsContext';

const Items = (props) => {
	const items = useContext(itemsContext);

	const save = (values, id) => {
		items.updateItem(values, id);
	};

	return (
		<>
			<div>
				<span className="text-white">Item List</span>
			</div>
			<div className="text-white py-3">
				<div className="grid grid-cols-3 gap-5">
					<div>
						<span>Item Name</span>
					</div>
					<div>
						<span>Item Description</span>
					</div>
				</div>
				<div className="border">
					{items.state.items.map((items) => {
						return (
							<EditItemField
								key={items._id}
								id={items._id}
								name={items.name}
								description={items.description}
								onDelete={() => items.deleteItem(items._id)}
								onSave={save}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<span className="text-white">Create New Item</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					// attributeReliance: null,
					description: '',
				}}
				onSubmit={items.createItem}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Item Name" />
						</div>
						<div>
							<TextInputField type="text" name="description" label="Item Description" />
						</div>
						<div className="flex">
							<Button
								className="bg-white border border-gray-1 mb-3 mt-auto py-2 w-full"
								type="submit"
							>
								Submit
							</Button>
						</div>
					</div>
				</Form>
			</Formik>
		</>
	);
};

export default Items;
