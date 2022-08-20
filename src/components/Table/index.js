import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import TextInputField from '../TextInputField';
import Button from '../Button';
import Modal from '../Modal';

export const inputTypes = {
	TEXT: 'text',
	NUMBER: 'number',
	SELECT: 'select',
};

const BuildInput = (props) => {
	switch (props.header.type) {
		case inputTypes.SELECT:
			return (
				<TextInputField
					options={props.header.options}
					name={props.header.value}
					type={props.header.type}
					className="border-0"
					{...props}
				/>
			);
		case inputTypes.NUMBER:
		case inputTypes.TEXT:
			return (
				<TextInputField
					name={props.header.value}
					type={props.header.type}
					className="border-0"
					{...props}
				/>
			);
		default:
			return null;
	}
};

const BuildRow = ({ item, headers, columnCount, enableManageColumn, onEditSave, onDelete }) => {
	const [edit, setEdit] = useState(false);
	const [deleteRow, setDeleteRow] = useState(null);

	const editOnClick = () => {
		setEdit(!edit);
	};

	const deleteOnClick = () => {
		setDeleteRow(item);
	};

	const deleteSubmit = () => {
		onDelete(deleteRow._id);
		setDeleteRow(null);
	};

	const deleteCancel = () => {
		setDeleteRow(null);
	};

	const buildInitialValues = () => {
		const initialValues = {};
		headers.forEach((header) => {
			initialValues[header.value] =
				typeof item[header.value] === 'object'
					? header.options.findIndex((option) => {
							return option._id === item[header.value]._id;
					  })
					: item[header.value];
		});
		return initialValues;
	};

	const modalDescription = () => {
		return (
			<div>
				<div>Are you sure you want to delete the following item?</div>
				<div className="font-bold text-black">{deleteRow.name}</div>
			</div>
		);
	};

	return (
		<>
			{deleteRow && (
				<Modal
					title="Confirmation"
					description={modalDescription()}
					submit={deleteSubmit}
					cancel={deleteCancel}
					saveButtonLabel="Delete"
				/>
			)}
			<Formik
				initialValues={buildInitialValues()}
				onSubmit={(values) => {
					const newValues = {};
					headers.forEach((header) => {
						if (header.options) {
							newValues[header.value] = header.options[values[header.value]];
						} else {
							newValues[header.value] = values[header.value];
						}
					});
					onEditSave({ values: newValues, id: item._id });
					setEdit(!edit);
				}}
			>
				<Form>
					<div
						className={`grid grid-cols-${columnCount} border-b border-slate-300 py-1 hover:bg-slate-700 gap-2`}
					>
						{edit &&
							headers.map((header) => {
								return <BuildInput key={`${header.value} input`} header={header} />;
							})}
						{!edit &&
							headers.map((header) => {
								return (
									<div key={`${header.value} text`} className="py-1 px-3 my-auto truncate">
										{typeof item[header.value] === 'object'
											? item[header.value].name
											: item[header.value]}
									</div>
								);
							})}
						{enableManageColumn && !edit && (
							<div className="grid grid-cols-2 gap-1">
								<Button type="button" onClick={editOnClick}>
									Edit
								</Button>
								<Button type="button" onClick={deleteOnClick}>
									Delete
								</Button>
							</div>
						)}
						{enableManageColumn && edit && (
							<div className="grid grid-cols-2 gap-1">
								<Button type="submit">Save</Button>
								<Button type="button" onClick={editOnClick}>
									Cancel
								</Button>
							</div>
						)}
					</div>
				</Form>
			</Formik>
		</>
	);
};

const BuildData = ({ columnCount, data, headers, enableManageColumn, onEditSave, onDelete }) => {
	return (
		<div className="overflow-auto max-h-96">
			{data.map((item) => {
				return (
					<BuildRow
						key={item._id}
						item={item}
						headers={headers}
						columnCount={columnCount}
						enableManageColumn={enableManageColumn}
						onEditSave={onEditSave}
						onDelete={onDelete}
					/>
				);
			})}
		</div>
	);
};

const BuildHeaders = ({ columnCount, headers }) => {
	return (
		<div
			className={`grid grid-cols-${columnCount} border-b border-b-slate-300 font-semibold gap-2`}
		>
			{headers.map((header, i) => {
				return (
					<div key={`${header.value} ${i}`} className="pl-3">
						{header.label}
					</div>
				);
			})}
		</div>
	);
};

const BuildNewEntry = ({ headers, onCreate }) => {
	const buildInitialValues = () => {
		const initialValues = {};
		headers.forEach((header) => {
			switch (header.type) {
				case inputTypes.NUMBER:
					initialValues[header.value] = 0;
					break;
				case inputTypes.SELECT:
				case inputTypes.TEXT:
					initialValues[header.value] = '';
					break;
				default:
					initialValues[header.value] = '';
					break;
			}
		});
		return initialValues;
	};

	return (
		<Formik
			initialValues={buildInitialValues()}
			onSubmit={(values, { resetForm }) => {
				const newValues = {};
				headers.forEach((header) => {
					if (header.options) {
						newValues[header.value] = header.options[values[header.value]];
					} else {
						newValues[header.value] = values[header.value];
					}
				});
				onCreate(newValues);
				resetForm();
			}}
		>
			<Form>
				<div>
					<span>Create New</span>
				</div>
				<div className={`grid grid-cols-3 border-slate-300 py-1 gap-2`}>
					{headers.map((header) => {
						return (
							<BuildInput key={`${header.value} input`} header={header} label={header.label} />
						);
					})}
					<div className="mt-auto">
						<Button type="submit" className="w-full">
							Create
						</Button>
					</div>
				</div>
			</Form>
		</Formik>
	);
};

const Table = ({ headers, data, onEditSave, onDelete, enableEdit, enableDelete, onCreate }) => {
	const enableManageColumn = enableEdit || enableDelete;
	const columnCount = enableManageColumn ? headers.length + 1 : headers.length;
	const sortedData = [...data].sort((a, b) => (a.name > b.name ? 1 : -1));

	return (
		<>
			<div className="container grid grid-cols-1 gap-5">
				<div>
					<BuildHeaders columnCount={columnCount} headers={headers} />
					<BuildData
						columnCount={columnCount}
						data={sortedData}
						headers={headers}
						enableManageColumn={enableManageColumn}
						onEditSave={onEditSave}
						onDelete={onDelete}
					/>
				</div>
				<BuildNewEntry onCreate={onCreate} headers={headers} />
			</div>
		</>
	);
};

Table.propTypes = {
	headers: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
			type: PropTypes.oneOf([inputTypes.TEXT, inputTypes.NUMBER, inputTypes.SELECT]).isRequired,
		}),
	).isRequired,
	data: PropTypes.array,
	onEditSave: PropTypes.func,
	onDelete: PropTypes.func,
	enableEdit: PropTypes.bool,
	enableDelete: PropTypes.bool,
};

Table.defaultProps = {
	data: [
		{
			_id: '61ee0b194591d5201e169b6d',
			name: 'Acid Splash TEST',
			description: 'placeholder',
			level: 'Cantrip',
			time: 'Action',
			school: 'necromancy',
			range: '60 feet',
		},
		{
			_id: '61ee0b194591d5201e169b6ds',
			name: 'Acid Splash',
			description: 'placeholder',
			level: 'Cantrip',
			time: 'Action',
			school: 'Conj.',
			range: '60 feet',
		},
		{
			_id: '61ee0b194591d5201e169b6dd',
			name: 'Acid Splash',
			description: 'placeholder',
			level: 'Cantrip',
			time: 'Action',
			school: 'Conj.',
			range: '60 feet',
		},
		{
			_id: '61ee0b194591d5201e169b6da',
			name: 'Acid Splash',
			description: 'placeholder',
			level: 'Cantrip',
			time: 'Action',
			school: 'Conj.',
			range: '60 feet',
		},
		{
			_id: '61ee0b194591d5201e169b6dq',
			name: 'Acid Splash',
			description: 'placeholder',
			level: 'Cantrip',
			time: 'Action',
			school: 'Conj.',
			range: '60 feet',
		},
		// { _id: '61ee0b194591d5201e169b6d', name: 'Strength', description: 'placeholder', a: 'a' },
		// { _id: '61ee0b2b4591d5201e169b75', name: 'Dexterity', description: 'placeholder' },
		// { _id: '61ee11a89e7b58db562ff63c', name: 'Charisma', description: 'placeholder' },
		// { _id: '61ee11ac9e7b58db562ff63f', name: 'Intelligence', description: 'placeholder' },
		// { _id: '61ee11b89e7b58db562ff642', name: 'Constitution', description: 'placeholder' },
		// { _id: '61ee11c69e7b58db562ff645', name: 'Wisdom', description: 'placeholder' },
	],
	headers: [
		{
			label: 'Name',
			value: 'name',
			type: inputTypes.TEXT,
		},
		{
			label: 'Level',
			value: 'level',
			type: inputTypes.NUMBER,
			minimum: 0,
			maximum: 20,
		},
		{
			label: 'Time',
			value: 'time',
			type: inputTypes.TEXT,
		},
		{
			label: 'School',
			value: 'school',
			type: inputTypes.SELECT,
			options: [
				{
					name: 'Transmutation',
					value: 'transmutation',
				},
				{
					name: 'Necromancy',
					value: 'necromancy',
				},
				{
					name: 'Illusion',
					value: 'illusion',
				},
				{
					name: 'Evocation',
					value: 'evocation',
				},
				{
					name: 'Enchanting',
					value: 'enchanting',
				},
				{
					name: 'Divination',
					value: 'divination',
				},
				{
					name: 'Conjuration',
					value: 'conjuration',
				},
				{
					name: 'Abjuration',
					value: 'abjuration',
				},
			],
		},
		{
			label: 'Range',
			value: 'range',
			type: inputTypes.TEXT,
		},
	],
	enableEdit: true,
	enableDelete: true,
};

export default Table;
