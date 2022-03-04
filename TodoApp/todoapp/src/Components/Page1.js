import { Button, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../index.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Page1() {
	const location = useLocation();
	const navigate = useNavigate();
	const [todos, setTodos] = useState([]);

	function gotoPage2() {
		navigate("/Page2");
	}

	
	useEffect(()=> {
		if (localStorage.getItem("list") == null) {
			localStorage.setItem("list", JSON.stringify([]));			
		}
		const todo = JSON.parse(localStorage.getItem("list"));
		setTodos(todo)
	},[])

	console.log(todos);
	return (
		<>
			<Paper
				style={{ margin: "10px auto", textAlign: "center" }}
				elevation={24}
			>
				<div className="todoApp">
					<h1>Todo Application</h1>
					<table>
						<tbody>
							<tr>
								<th>Title</th>
								<th>Description</th>
								<th>Priority</th>
							</tr>
							{todos.map((value)=> {
								return (
									<tr>
									<td>{value.title}</td>
									<td>{value.description}</td>
									<td>{value.priority}</td>
								</tr>
								)
							})}
						
						</tbody>
					</table>
					<Button
						style={{ marginBottom: "20px" }}
						variant="contained"
						onClick={() => {
							gotoPage2();
						}}
					>
						Add
					</Button>
				</div>
			</Paper>
		</>
	);
}
