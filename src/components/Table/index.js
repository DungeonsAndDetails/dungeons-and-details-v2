import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, Form, Formik } from 'formik';
import TextInputField from '../TextInputField';
import Button from '../Button';
// https://tailwindcss.com/docs/table-layout
// https://tailwind-elements.com/docs/standard/components/tables/
// Goal, expandable dataset wise.
// prop toggle edit & delete buttons.

// Create component for each specific row

const inputTypes = {
	TEXT: 'text',
	NUMBER: 'number',
	SELECT: 'select',
};

const BuildInput = ({ header }) => {
	switch (header.type) {
		case inputTypes.NUMBER:
			return (
				<TextInputField name={header.value} type={header.type} className="border-0 p-1 pb-2" />
			);
		case inputTypes.SELECT:
			return (
				<TextInputField
					options={header.options}
					name={header.value}
					type={header.type}
					className="border-0 p-1 pb-2"
				/>
			);
		case inputTypes.TEXT:
			return (
				<TextInputField name={header.value} type={header.type} className="border-0 p-1 pb-2" />
			);
		default:
			return null;
	}
};

const BuildRow = ({ item, headers, columnCount, enableManageColumn }) => {
	const [edit, setEdit] = useState(false);

	const editOnClick = () => {
		setEdit(!edit);
	};

	const deleteOnClick = () => {
		console.log('delete');
	};

	const saveOnClick = (values) => {
		console.log('saveOnClick', values);
	};

	const onSubmit = (values) => {
		console.log('onSubmit', values);
	};

	return (
		<Formik initialValues={item} onSubmit={onSubmit}>
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
								<div key={`${header.value} text`} className="p-1">
									{item[header.value]}
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
							<Button type="submit" onClick={saveOnClick}>
								Save
							</Button>
							<Button type="button" onClick={editOnClick}>
								Cancel
							</Button>
						</div>
					)}
				</div>
			</Form>
		</Formik>
	);
};

const BuildData = ({ columnCount, data, headers, enableManageColumn }) => {
	return data.map((item) => {
		return (
			<BuildRow
				key={item._id}
				item={item}
				headers={headers}
				columnCount={columnCount}
				enableManageColumn={enableManageColumn}
			/>
		);
	});
};

const BuildHeaders = ({ columnCount, headers }) => {
	return (
		<div
			className={`grid grid-cols-${columnCount} border-b border-b-slate-300 font-semibold gap-2`}
		>
			{headers.map((header) => {
				console.log('header', header);
				return (
					<div key={header.value} className="p-1">
						{header.label}
					</div>
				);
			})}
		</div>
	);
};

const Table = ({ headers, data, onEdit, onDelete, enableEdit, enableDelete }) => {
	const onSave = (_id, values) => {
		console.log('save', _id, values);
	};

	const submit = (values, _id) => {
		console.log('values', values);
		console.log('_id', _id);
		onSave(values, _id);
	};

	const enableManageColumn = enableEdit || enableDelete;
	const columnCount = enableManageColumn ? headers.length + 1 : headers.length;

	return (
		<div>
			<BuildHeaders columnCount={columnCount} headers={headers} />
			<BuildData
				columnCount={columnCount}
				data={data}
				headers={headers}
				enableManageColumn={enableManageColumn}
			/>
		</div>
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
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
	enableEdit: PropTypes.bool,
	enableDelete: PropTypes.bool,
};

Table.defaultProps = {
	data: [
		{
			_id: '61ee0b194591d5201e169b6d',
			name: 'Acid Splash',
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
					label: 'Transmutation',
					value: 'transmutation',
				},
				{
					label: 'Necromancy',
					value: 'necromancy',
				},
				{
					label: 'Illusion',
					value: 'illusion',
				},
				{
					label: 'Evocation',
					value: 'evocation',
				},
				{
					label: 'Enchanting',
					value: 'enchanting',
				},
				{
					label: 'Divination',
					value: 'divination',
				},
				{
					label: 'Conjuration',
					value: 'conjuration',
				},
				{
					label: 'Abjuration',
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
