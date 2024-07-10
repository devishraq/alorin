import { olka, createSignal, createEffect } from "../core";
const nestedData = [
	{
		level: 5,
		items: ["Item 1 at level 5", "Item 2 at level 5", "Item 3 at level 5"],
		img: "https://via.placeholder.com/150?text=Level+5",
		nested: [
			{
				level: 4,
				items: ["Item 1 at level 4", "Item 2 at level 4", "Item 3 at level 4"],
				img: "https://via.placeholder.com/150?text=Level+4",
				nested: [
					{
						level: 3,
						items: ["Item 1 at level 3", "Item 2 at level 3", "Item 3 at level 3"],
						img: "https://via.placeholder.com/150?text=Level+3",
						nested: [
							{
								level: 2,
								items: ["Item 1 at level 2", "Item 2 at level 2", "Item 3 at level 2"],
								img: "https://via.placeholder.com/150?text=Level+2",
								nested: [
									{
										level: 1,
										items: ["Item 1 at level 1", "Item 2 at level 1", "Item 3 at level 1"],
										img: "https://via.placeholder.com/150?text=Level+1",
									}
								]
							}
						]
					}
				]
			}
		]
	}
];

const getStyle = (level) => ({
	border: level % 2 === 0 ? '1px dashed rgb(204, 204, 204)' : '2px solid rgb(204, 204, 204)',
	padding: level % 2 === 0 ? '12px' : '15px',
	margin: '5px',
	borderRadius: level % 2 === 0 ? '8px' : '10px',
	backgroundColor: level % 2 === 0 ? 'rgb(240, 240, 240)' : 'rgb(224, 224, 224)',
	boxShadow: level % 2 === 0 ? 'rgba(0, 0, 0, 0.1) 0px 0px 5px' : 'none',
});

const headerStyle = {
	fontWeight: 'bold',
	marginBottom: '5px',
	fontSize: '1.2em'
};

const listStyle = {
	listStyleType: 'circle',
	fontSize: '1.1em'
};

const imageStyle = {
	border: '2px solid rgb(204, 204, 204)',
	borderRadius: '10px',
	marginBottom: '10px'
};

const buttonStyle = {
	padding: '8px',
	backgroundColor: 'rgb(0, 140, 186)',
	color: 'white',
	border: 'none',
	borderRadius: '5px',
	cursor: 'pointer',
	margin: '5px'
};

const inputStyle = {
	padding: '8px',
	border: '1px solid rgb(204, 204, 204)',
	borderRadius: '5px',
	margin: '5px'
};

const renderNestedLevels = (data) => {
	return data.map((levelData) => (
		<div key={levelData.level} className={`level-${levelData.level}`} style={getStyle(levelData.level)}>
			<p style={headerStyle}>{`This is level ${levelData.level}`}</p>
			<ul>
				{levelData.items.map((item, index) => (
					<li key={index} style={listStyle}>{item}</li>
				))}
			</ul>
			<img src={levelData.img} alt={`Level ${levelData.level}`} style={imageStyle} />
			<button style={buttonStyle}>Click me</button>
			<input type="text" placeholder={`Input at level ${levelData.level}`} style={inputStyle} />
			{levelData.nested && renderNestedLevels(levelData.nested)}
		</div>
	));
};

const NestedLevels = () => {
	return (
		<div id="root">
			{renderNestedLevels(nestedData)}
		</div>
	);
};

const App = () => {

	return (
		<NestedLevels />
	);
};

export default App;
