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
					className="border-0 p-1 pb-2"
					{...props}
				/>
			);
		case inputTypes.NUMBER:
		case inputTypes.TEXT:
			return (
				<TextInputField
					name={props.header.value}
					type={props.header.type}
					className="border-0 p-1 pb-2"
				/>
			);
		default:
			return null;
	}
};

const BuildRow = ({ item, headers, columnCount, enableManageColumn, onEditSave, onDelete }) => {
	const [edit, setEdit] = useState(false);

	const editOnClick = () => {
		setEdit(!edit);
	};

	const deleteOnClick = () => {
		onDelete(item._id);
	};

	const saveOnClick = (values) => {
		console.log('saveOnClick', values);
	};

	const onSubmit = (values) => {
		onEditSave({ values, id: item._id });
		setEdit(!edit);
	};

	const buildInitialValues = () => {
		const initialValues = {};
		headers.forEach((header) => {
			initialValues[header.value] =
				typeof item[header.value] === 'object' ? item[header.value]._id : item[header.value];
		});
		console.log('initialValues', initialValues);
		return initialValues;
	};

	return (
		<Formik initialValues={buildInitialValues()} onSubmit={onSubmit}>
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

const BuildData = ({ columnCount, data, headers, enableManageColumn, onEditSave, onDelete }) => {
	return data.map((item) => {
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
	});
};

const BuildHeaders = ({ columnCount, headers }) => {
	return (
		<div
			className={`grid grid-cols-${columnCount} border-b border-b-slate-300 font-semibold gap-2`}
		>
			{headers.map((header, i) => {
				console.log('header', header);
				return (
					<div key={`${header.value} ${i}`} className="p-1">
						{header.label}
					</div>
				);
			})}
		</div>
	);
};

const Table = ({ headers, data, onEditSave, onDelete, enableEdit, enableDelete }) => {
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
				onEditSave={onEditSave}
				onDelete={onDelete}
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
	onEditSave: PropTypes.func,
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
