import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
	const [itemName, setItemName] = useState("");
	const inputRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!itemName) {
			alert("Please enter an item name");
			inputRef.current.focus();
			return;
		}

		onAddItem(itemName);
		console.log("Adding item:", itemName);
		setItemName("");
		inputRef.current.focus();
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Add an Item</h2>
			<input
				ref={inputRef}
				value={itemName}
				onChange={(e) => {
					setItemName(e.target.value);
				}}
				autoFocus
			/>
			<Button>Add to list</Button>
		</form>
	);
}
