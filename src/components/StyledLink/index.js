import { Link } from 'react-router-dom';

const StyledLink = (props) => {
	return (
		<Link
			end={props.end}
			to={props.to}
			style={props.style}
			className={`hover:text-blue-300 duration-200 ease-in-out ${props.className} `}
		>
			{props.children}
		</Link>
	);
};

export default StyledLink;
