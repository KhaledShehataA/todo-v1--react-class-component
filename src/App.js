import { Component } from 'react';
import { TodoList } from './components/TodoList/index';
import { AddTodo } from './components/AddTodo/index';

class App extends Component {
	state = {
		items: [
			{
				id: 1,
				todo: 'Go to course',
				time: '2',
			},
			{
				id: 2,
				todo: 'Go to club',
				time: '2',
			},
			{
				id: 3,
				todo: 'Go to course',
				time: '3',
			},
		],
	};
	render() {
		return (
			<div className='App'>
				TodoList App
				<TodoList items={this.state.items} />
				<AddTodo />
			</div>
		);
	}
}

export default App;
