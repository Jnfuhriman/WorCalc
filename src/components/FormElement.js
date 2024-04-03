import React from "react";

function FormElement({label, onUpdate}) {
	return (
		<>
			<div className="block">
				<label htmlFor="label">{label}</label>
				<input onChange={onUpdate} id={ label } type='text' />
			</div>
		</>
	);
}

export default FormElement;
