//importing useRef
import { useRef } from 'react';

const Dropdown = () => {


	const ref = useRef();

	const handleClick = () => {
		ref.current.style.backgroundColor = 'black';
		ref.current.style.padding = '3rem';
		ref.current.style.color = 'white';
		ref.current.style.width = '150px';
		ref.current.style.height = '150px';
		ref.current.style.margin = '50px';
		ref.current.style.borderRadius = '10px';
	};

	return (
		<div>
			<button onClick={handleClick}>
				dark mode
			</button>

			<br />
			<br />


			<div ref={ref}>Article on styling an element
				using useRef hook in React</div>
		</div>
	);
};

export default Dropdown;
