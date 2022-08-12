import { Link } from 'react-router-dom';

const StyledLink = (props) => {
	return (
		<Link
			{...props}
			className={`text-blue-400 hover:text-blue-200 duration-200 ease-in-out ${props.className} `}
		>
			{props.children}
		</Link>
	);
};

export default StyledLink;
