import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remData, addData, upData } from "./actions";

const TodoList = () => {
	const { todoArr, id } = useSelector((state) => state.reducers);
	const dispatch = useDispatch();
	const [todoActions, setTodoActions] = useState({
		done: false,
		isUpdating: false,
	});

	const [initialId, setId] = useState("");
	const [value, setValue] = useState("");
	useEffect(() => setId(id), [id]);

	return (
		<div className="todo">
			<div className="todocontrolls">
				<input
					type="text"
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
				{todoActions.isUpdating === false ? (
					<button
						onClick={() => {
							dispatch(addData(value, initialId));
							setValue("");
							setTodoActions({
								...todoActions,
								isUpdating: false,
							});
						}}>
						submit
					</button>
				) : (
					<button
						onClick={() => {
							dispatch(upData(value, initialId));
							setValue("");
							setTodoActions({
								...todoActions,
								isUpdating: false,
							});
						}}>
						update
					</button>
				)}
			</div>
			<div className="todoListItem">
				{todoArr.map((e) => {
					return (
						<div
							key={e.id}
							style={{
								display: "flex",
								alignItems: "center",
							}}
							className="todoElement">
							<h4>
								{e.id}. {e.todo}
							</h4>
							<button onClick={() => dispatch(remData(e.id))}>
								X
							</button>

							<button
								onClick={() => {
									setValue(e.todo);
									setId(e.id);
									setTodoActions({
										...todoActions,
										isUpdating: true,
									});
								}}>
								U
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TodoList;
