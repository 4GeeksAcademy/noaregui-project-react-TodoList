import React, {useState} from "react";

const Home = () => {
	/*El input estará con un string vacío (""), necesitamos que al escribir se actualice,
	para eso setNewTask*/
	const [newTask, setNewTask] = useState("");
	const[ tasks, setTasks ] = useState(["Eat breakfast", "Take a shower", "Walk the dog"]);

	/*Función para que al escribir en el input se actualiza el valor inicial. Es decir,
	de ("") a lo que escribamos*/
	/*event hace referencia a lo que se introduce en el input*/
	function handleInputChange(event) {
		setNewTask(event.target.value);
	}

	function addTask() {
		if(newTask.trim() !=="") {
		setTasks([...tasks, newTask]);
		setNewTask("");
		}
	}

	function deleteTask(index){
		const updatedTasks = tasks.filter((_, i) => i !== index);
		setTasks(updatedTasks);

	}

	function moveTaskUp(index) {
		if(index > 0) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index - 1]] = 
			[updatedTasks[index - 1], updatedTasks[index]]
			setTasks(updatedTasks);
		}
	}

	function moveTaskDown(index){
		if(index < tasks.length - 1) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index + 1]] = 
			[updatedTasks[index + 1], updatedTasks[index]]
			setTasks(updatedTasks);
		}
	}

	return (
	<>
	<div className="to-do-list">
		<h1>To Do List</h1>
		<div>
			<input
				type="text"
				placeholder="Enter a task..."
				value={newTask}
				onChange={handleInputChange}>
			</input>
			<button
				className="add-button"
				onClick={addTask}>
					Add
			</button>
		</div>
		<ol>
			{tasks.map((task, index) => 
				<li key={index}>
					<span className="text">{task}</span>
					<button
						className="up-button"
						onClick={() => moveTaskUp(index)}>
							<i class="fas fa-long-arrow-alt-up"></i>
					</button>
					<button
						className="down-button"
						onClick={() => moveTaskDown(index)}>
							<i class="fas fa-long-arrow-alt-down"></i>
					</button>
					<button
						className="delete-button"
						onClick={() => deleteTask(index)}>
							<i class="fas fa-times"></i>
					</button>
				</li>
			)}
		</ol>

	</div>
	
	
	</>
	);
}

export default Home;