const getState = ({ getStore, getActions, setStore }) => {
	const url = "https://playground.4geeks.com/apis/fake/todos/user/wheacock";
	return {
		store: {
			todos: [],
		},
		actions: {

			
			getTodos: async () => {
				try {
					console.log("Fetching todos...");
					const response = await fetch(url);

					if (!response.ok) {
						throw new Error("Invalid response");
					}

					const todos = await response.json();
					console.log("API response:", todos);
					setStore({ todos });

				} catch (error) {
					console.error("There was an error:", error);
				}
			},
			
			addTodo: (newTodo) => {
				const { todos } = getStore();
				const updatedTodos = [...todos, newTodo];
				console.log("Adding todo:", newTodo);
				setStore({ todos: updatedTodos });
			},

			deleteTodo: (todoIndex) => {
				const { todos } = getStore();
				const updatedTodos = todos.filter((_, index) => index !== todoIndex);
				console.log("Deleting todo at index:", todoIndex);
				setStore({ todos: updatedTodos });
			},

		},
	};
};



// .then((data) => setStore({ starships: data.results }))













//   getVehicles: async () => {
//   try {
// 	let response = await fetch(apiUrl + "/vehicles");
// 	let data = await response.json();
// 	if (data) {
// 	  setStore({ vehicles: data.results });
// 	  return true;
// 	}
//   } catch (error) {
// 	console.log("an error has occured", error);
// 	return false
//   }
// },

export default getState;
