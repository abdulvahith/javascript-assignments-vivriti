import constants from '../constants'

export const addTodoItem = (newItem) => {
		return {
			type: constants.ADD_TODO,
			newItem
		}
}

export const editTodoItem = (editItem) => {
		return {
			type: constants.EDIT_TODO,
			editItem
		}
}

export const deleteTodoItem = (todoId) => {
		return {
			type: constants.DELETE_TODO,
			todoId
		}
}

export const completeTodoItem = (todoId, isCompleted) => {
		return {
			type: constants.COMPLETE_TODO,
			todoId,
			isCompleted
		}
}
