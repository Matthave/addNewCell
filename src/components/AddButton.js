import React from 'react'

function AddButton(props) {
	return (
		<button onClick={() => props.showPopup('show')} className="addBtn">+</button>
	)
}

export default AddButton
