import React from 'react';
import PropTypes from 'prop-types';

// https://tailwindcss.com/docs/table-layout
// https://tailwind-elements.com/docs/standard/components/tables/
// Goal, expandable dataset wise.
// prop toggle edit & delete buttons.

const Table = (props) => {
	console.log('props', props);
	return (
		<table className="table-fixed text-white">
			<thead>
				<tr>
					{props.headers.map((header) => {
						return <th key={header.value}>{header.label}</th>;
					})}
					{props.enableEdit && <th>Edit</th>}
					{props.enableDelete && <th>Delete</th>}
				</tr>
			</thead>
			<tbody>
				{props.data.map((item) => {
					return (
						<tr key={item._id}>
							{props.headers.map((header, i) => {
								return <td key={`${header.value} ${i}`}>{item[header.value]}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

Table.propTypes = {
	headers: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		}),
	),
	data: PropTypes.array,
	edit: PropTypes.func,
	delete: PropTypes.func,
	enableEdit: PropTypes.bool,
	enableDelete: PropTypes.bool,
};

Table.defaultProps = {
	data: [
		{ _id: '61ee0b194591d5201e169b6d', name: 'Strength', description: 'placeholder' },
		{ _id: '61ee0b2b4591d5201e169b75', name: 'Dexterity', description: 'placeholder' },
		{ _id: '61ee11a89e7b58db562ff63c', name: 'Charisma', description: 'placeholder' },
		{ _id: '61ee11ac9e7b58db562ff63f', name: 'Intelligence', description: 'placeholder' },
		{ _id: '61ee11b89e7b58db562ff642', name: 'Constitution', description: 'placeholder' },
		{ _id: '61ee11c69e7b58db562ff645', name: 'Wisdom', description: 'placeholder' },
	],
	headers: [
		{
			label: 'Attribute Name',
			value: 'name',
		},
		{
			label: 'Attribute Description',
			value: 'description',
		},
	],
	enableEdit: true,
	enableDelete: true,
};

export default Table;
