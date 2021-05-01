export const TodoList = ({ items }) => {
	return items.map((item) => (
		<div key={item.id}>
			<span>{item.todo}</span>
			<span>{item.time}</span>
			<span>&times;</span>
		</div>
	));
};
