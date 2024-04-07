import React, {useState} from "react";
import Calendar from "./Calendar";


const Home = () => {
	/*El input estará con un string vacío (""), necesitamos que al escribir se actualice,
	para eso setNewTask*/

	/*Hace referencia a lo que escribimos en el input. newTask: representa el estado actual del valor del input,inicialmente será un string vacío (""). setNewTask permite actualizar el estado.*/
	const [newTask, setNewTask] = useState(""); //Lo que escribimos en el input
	/*Hace referencia a la lista de tareas, por eso es un array. tasks hace referencia al estado actual de la lista, al principio estará vacía []. setTask permite actualizar la lista
	a medida que añadamos tareas*/
	const[ tasks, setTasks ] = useState([]); //La lista que se guarda cuando añadimos la tarea
	

	/*Función para que al escribir en el input se actualice el valor inicial. Es decir, el valor incicial del cuadrado input es "". Sin esta función
	no podré escribir. Esta función lo que hace es actualizar el valor inicial "" por lo que yo escriba.*/
	/*event hace referencia a lo que se introduce en el input*/
	/*Siempre que llamemos a una función para actualizar los cambios que se han hecho en el input la estructura es:
	function nombreFuncion(event) {
		nombreFuncion(event.target.value)
	}
	*/
	function handleInputChange(event) {
		setNewTask(event.target.value);
	}


	function addTask() {
		/*Si introduzco un espacio en blanco y pulso Add se guarda como tarea. Para evitar eso lo primero será poner una condición.
		Si lo que escribimos (newTask), empieza por un espacio, no se podrá añadir.*/
		if(newTask.trim() !=="") {
			/*La lista de tareas (setTask) tiene que contener todas las task añadidas (...tasks) + la nueva tarea que hayamos añadido (newTask)*/
			setTasks([...tasks, newTask]);
			//Si no "limpiamos" el input, cuando añadamos una tarea se añadirá pero seguirá estando reflejada en el input
			setNewTask("");
		}
	}

	const handleKeyPress = (e) => {
		if (newTask.trim() !=="" && e.key === 'Enter') {
			setTasks([...tasks, newTask]); 
			setNewTask(""); // Limpiar el campo de entrada después de agregar la tarea
		}
	  };

	function deleteTask(index){
		/*Utilizando filter lo que haremos es filtar la lista de elementos (tasks) y el index que eliminemos no nos lo devolverá*/
		const updatedTasks = tasks.filter(function(elemento, i){
			return i !== index;
		});
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
		<div className="divInput">
			{/* INPUT */}
			<div className="input">
				<input
					type="text"
					placeholder="Enter a task..."
					value={newTask}
					onChange={handleInputChange}
					onKeyDown={handleKeyPress}>
				</input>
			</div>
			{/* CALENDARIO */}
			<div className="calendar">
				<Calendar />
			</div>
			{/* BOTÓN ADD */}
			<div className="container-add">
				<button
					className="add-button"
					onClick={addTask}>
						Add
				</button>
			</div>
		</div>
		{/* LISTA TAREAS AÑADIDAS */}
		<ol>
			{tasks.map((task, index) => 
				<li key={index}>
					{/* NOMBRE TAREA */}
					<span className="text">{task}</span>
					{/* BOTON FLECHA HACIA ARRIBA */}
					<button
						className="up-button"
						onClick={() => moveTaskUp(index)}>
							<i class="fas fa-long-arrow-alt-up"></i>
					</button>
					{/* BOTON FLECHA HAHCIA ABAJO */}
					<button
						className="down-button"
						onClick={() => moveTaskDown(index)}>
							<i class="fas fa-long-arrow-alt-down"></i>
					</button>
					{/* BOTON ELIMINAR */}
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