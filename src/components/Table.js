import React from 'react';
import PropTypes from 'prop-types';

// https://tailwindcss.com/docs/table-layout
// https://tailwind-elements.com/docs/standard/components/tables/
// Goal, expandable dataset wise.
// prop toggle edit & delete buttons.

const Table = (props) => {
	console.log('props', props);
	return (
		<table class="table-auto text-white">
			<thead>
				<tr>
					<th>Song</th>
					<th>Artist</th>
					<th>Year</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
					<td>Malcolm Lockyer</td>
					<td>1961</td>
				</tr>
				<tr>
					<td>Witchy Woman</td>
					<td>The Eagles</td>
					<td>1972</td>
				</tr>
				<tr>
					<td>Shining Star</td>
					<td>Earth, Wind, and Fire</td>
					<td>1975</td>
				</tr>
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
			value: 'attributeName',
		},
		{
			label: 'Attribute Description',
			value: 'attributeDescription',
		},
	],
	enableEdit: false,
	enableDelete: false,
};

export default Table;
