import React, { useState } from "react";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("")
	const [ todos, setTodos ] = useState([]);
	const [todosListType, setTodosListType ] = useState()
	
	return (
		<div className="container">
			<h1>My Tasks</h1>
			<ul>
				<li>
					<input 
						type="text" 
						value={inputValue}
						onChange={e => setInputValue((e).target.value.trimStart())}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								todos.push(inputValue)
								setInputValue("");
							}
						}}	
						placeholder="What do you need to do">
					</input></li>

					{todos.map((item, index) => (
						<div className="d-block">
							<li className="d-flex align-items-center" key={index}>{item} <i className="fas fa-times ml-auto" ></i></li>
						</div>
					))}

			</ul>
			<div>{todos.length} tasks</div>
		</div>
		
	);
};

export default Home;
