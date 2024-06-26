import React, {useState} from "react";

const Home = () => {
	/*El input estará con un string vacío (""), necesitamos que al escribir se actualice,
	para eso setinputTask*/
	
	/*Hace referencia a lo que escribimos en el input. inputTask: representa el estado actual del valor del input,inicialmente será un string vacío (""). setinputTask permite actualizar el estado.*/
	const [inputTask, setinputTask] = useState(""); //Lo que escribimos en el input
	/*Hace referencia a la lista de tareas, por eso es un array. tasksList hace referencia al estado actual de la lista, al principio estará vacía []. setTask permite actualizar la lista
	a medida que añadamos tareas*/
	const[ tasksList, setTasksList ] = useState([]); //La lista que se guarda cuando añadimos la tarea
	
	const [date, setdate] = useState("");

	const [categoria, setCategoria] = useState("trabajo");
	/*Función para que al escribir en el input se actualice el valor inicial. Es decir, el valor incicial del cuadrado input es "". Sin esta función
	no podré escribir. Esta función lo que hace es actualizar el valor inicial "" por lo que yo escriba.*/
	/*event hace referencia a lo que se introduce en el input*/
	/*Siempre que llamemos a una función para actualizar los cambios que se han hecho en el input la estructura es:
	function nombreFuncion(event) {
		nombreFuncion(event.target.value)
	}
	*/
	const handleCategoriaChange = (e) => {
        setCategoria(e.target.value);
    };

	function escribirInput(event) {
		setinputTask(event.target.value);
	}

	const handledateChange = (e) => {
        setdate(e.target.value);
    };


	function addTask() {
		/*Si introduzco un espacio en blanco y pulso Add se guarda como tarea. Para evitar eso lo primero será poner una condición.
		Si lo que escribimos (inputTask), empieza por un espacio, no se podrá añadir.*/
		if(inputTask.trim() !=="") {
			/*La lista de tareas (setTask) tiene que contener todas las task añadidas (...tasksList) + la nueva tarea que hayamos añadido (inputTask)*/
			setTasksList([...tasksList, {tarea: inputTask, categoria, date}]);
			//Si no "limpiamos" el input, cuando añadamos una tarea se añadirá pero seguirá estando reflejada en el input
			setinputTask("");
			setdate("");
		}
	}

	const handleKeyPress = (e) => {
        if (e.key === "Enter" && inputTask.trim() !== "") {
            addTask();
        }
    };

	function deleteTask(index){
		/*Utilizando filter lo que haremos es filtar la lista de elementos (tasksList) y el index que eliminemos no nos lo devolverá*/
		const updatedtasksList = tasksList.filter(function(elemento, i){
			return i !== index;
		});
		setTasksList(updatedtasksList);
	}

	function moveTaskUp(index) {
		if(index > 0) {
			const updatedtasksList = [...tasksList];
			[updatedtasksList[index], updatedtasksList[index - 1]] = 
			[updatedtasksList[index - 1], updatedtasksList[index]]
			setTasksList(updatedtasksList);
		}
	}

	function moveTaskDown(index){
		if(index < tasksList.length - 1) {
			const updatedtasksList = [...tasksList];
			[updatedtasksList[index], updatedtasksList[index + 1]] = 
			[updatedtasksList[index + 1], updatedtasksList[index]]
			setTasksList(updatedtasksList);
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
					value={inputTask}
					onChange={escribirInput}
					onKeyDown={handleKeyPress}>
				</input>
			</div>
			<select value={categoria} onChange={handleCategoriaChange}>
						<span>Cathegory</span>
						<option value="Office">Office</option>
						<option value="Home">Home</option>
						<option value="Finance">Finance</option>
						<option value="Bootcamp">Bootcamp</option>
						<option value="Leisure">Leisure</option>
			</select>
			<div className="calendar">
                <input
                    type="date"
                    value={date}
                    onChange={handledateChange}
                ></input>
			</div>
			{/* CALENDARIO */}
			{/* <div className="calendar">
				<Calendar />
			</div> */}
			{/* BOTÓN ADD */}
			<div className="container-add">
				<button
					className="add-button"
					onClick={addTask}>
					<span>Add</span>
				</button>
			</div>
		</div>
		{/* LISTA TAREAS AÑADIDAS */}
			<table class="table">
				<thead>
					<tr className="table-titles">
						<td>Tasks</td>
						<td>Cathegory</td>
						<td>Date</td>
						<td>Others</td>
					</tr>
				</thead>
				<tbody className="table-body">
				{tasksList.map((elemento, index) =>					
					<tr key={index}>					
						<td className="elementoLista">
							{elemento.tarea}
						</td>
						<td className="elementoCategoria">
							<span>{elemento.categoria}</span>
						</td>
						<td className="elementoFecha">
							<span>{elemento.date}</span>
						</td>
						<td>
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
						</td>
						
					</tr>	
					)}			
				</tbody>
			
			</table>
	</div>
	
	
	</>
	);
}

export default Home;