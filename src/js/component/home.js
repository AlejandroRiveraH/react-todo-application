import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	let [toDo, setToDo] = useState([
		"Wash the dishes",
		"Clean my room",
		"Cook"
	]);
	let [tarea, setTarea] = useState([""]);

	const updatedtoDo = toDo.map(listItems => {
		return (
			<li
				id={listItems}
				value={listItems}
				className="li"
				key={listItems.toString()}>
				<span>
					<i className="fa fa-trash"></i>
				</span>{" "}
				{listItems}
			</li>
		);
	});

	function add(e) {
		if (e.keyCode === 13) {
			setToDo([...toDo, e.target.value]);
			e.target.placeholder = "Do enter";

			console.log({ toDo });
		}
	}

	function eliminar(e) {
		toDo.splice(e, 1);
		setToDo([...toDo]);
	}

	return (
		<div>
			<h1>Lista de elementos</h1>
			<div className="cuadro">
				<input
					type="text"
					placeholder="Enter Do"
					onKeyUp={e => add(e)}
					onChange={k => setTarea(k.target.value)}
					value={tarea}
				/>
				<div onClick={e => eliminar(e)}>{updatedtoDo}</div>
			</div>
		</div>
	);
}
