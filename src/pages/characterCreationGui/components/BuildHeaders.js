import React from 'react';

const BuildHeaders = ({ headers, step, setStep }) => {
	return (
		<div>
			<div className={`grid grid-cols-${headers.length} text-center`}>
				{headers.map((header, i) => {
					return (
						<div className={`${step === i ? 'font-bold ' : ''} border-b-2`} key={header.name}>
							<button
								className={`${step === i ? 'font-bold border-2 ' : ''} capitalize my-2 p-1 `}
								type="button"
								onClick={() => setStep(i)}
							>
								{header.name}
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BuildHeaders;
