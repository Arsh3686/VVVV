let id = 3;
let todoArr = [
	{ id: 1, todo: "Do solid " },
	{ id: 2, todo: "Command on Python" },
];

const initialState = {
	todoArr,
	id,
};
const reducers = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_DATA": {
			console.log(action.payload);
			// todoArr = todoArr.concat(action.payload);
			console.log("todo after adding", state);
			return {
				...state,
				todoArr: [...state.todoArr, action.payload],
				id: ++id,
			};
		}
		case "REM_DATA": {
			console.log("REM_DATA in action.payload", action.payload);
			// todoArr = todoArr.filter((e) => e.id !== +action.payload);
			console.log("todo after removing", todoArr);
			return {
				...state,
				todoArr: [
					...state.todoArr.filter((e) => e.id !== +action.payload),
				],
			};
		}
		case "UPD_DATA": {
			console.log("UP_DATA in action.payload", action.payload);

			todoArr = state.todoArr.map((e) =>
				e.id === action.payload.id
					? { ...e, todo: action.payload.todo }
					: e
			);
			console.log("todo after updating", todoArr);
			return {
				todoArr: [
					...state.todoArr.map((e) =>
						e.id === action.payload.id
							? { ...e, todo: action.payload.todo }
							: e
					),
				],
				id: action.payload.id,
			};
		}
		default: {
			console.log(state);

			return state;
		}
	}
};

export default reducers;
