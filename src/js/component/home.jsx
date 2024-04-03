import React, { useState } from "react";


//include images into your bundle

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("")
	const [ todos, setTodos ] = useState([]);
	return (
		<div className="container">
			<h1>My Tasks</h1>
			<ul>
				<li><input 
				type="text" 
				onChange={e => setInputValue((e).target.value)}
				value={inputValue}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						todos.push(inputValue)
						setInputValue("");

					}
				}}	
				placeholder="What do you need to do"></input></li>

				{todos.map((item, index) => (
				<li key={index}>{item} <i className="fas fa-times"></i>
				</li>
			))}
				
			</ul>
			<div>{todos.length} tasks</div>
		</div>
		
	);
};

export default Home;
