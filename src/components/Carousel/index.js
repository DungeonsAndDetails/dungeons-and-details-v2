import { useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import PropTypes from 'prop-types';
const Carousel = ({ imgArr }) => {
	const [image, setImage] = useState(0);
	const [prevImage, setPrevImage] = useState(5);
	const [nextImage, setNextImage] = useState(1);

	const length = imgArr.length;

	const nextImg = () => {
		setImage(image === length - 1 ? 0 : image + 1);
		setNextImage(nextImage === length - 1 ? 0 : nextImage + 1);
		setPrevImage(prevImage === length - 1 ? 0 : prevImage + 1);
	};
	const prevImg = () => {
		setImage(image === 0 ? length - 1 : image - 1);
		setPrevImage(prevImage === 0 ? length - 1 : prevImage - 1);
		setNextImage(nextImage === 0 ? length - 1 : nextImage - 1);
	};

	return (
		<>
			<div className="relative flex justify-center">
				<button className="flex justify-center my-auto top-10" onClick={prevImg}>
					<GoChevronLeft className="text-7xl text-black" />
				</button>
				<div className="flex transition">
					<img
						className="h-72 w-96 opacity-10"
						key={imgArr._id}
						src={imgArr[prevImage].image}
						alt="Test Images"
					/>
					<img
						className="h-72 w-96 opacity-100 scale-95"
						key={imgArr._id}
						src={imgArr[image].image}
						alt="Test Images"
					/>
					<img
						className="h-72 w-96 opacity-10"
						key={imgArr._id}
						src={imgArr[nextImage].image}
						alt="Test Images"
					/>
				</div>

				<button className="flex justify-center my-auto right-10" onClick={nextImg}>
					<GoChevronRight className="text-7xl text-black" />
				</button>
			</div>
		</>
	);
};
Carousel.defaultProps = {
	imgArr: [],
};
Carousel.propType = {
	imgArr: PropTypes.array.isRequired,
};

export default Carousel;
