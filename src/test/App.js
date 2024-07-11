import { alorin, createSignal, createEffect, Show } from "../core";

const App = () => (
	<div>
		<h1>Show Component Test</h1>
		<Show condition={true}>
			<p>This should be displayed</p>
		</Show>
		<Show condition={false}>
			<p>This should not be displayed</p>
		</Show>
		<Show condition={1 > 2}>
			<p>1 is greater than 2 (should not be displayed)</p>
		</Show>
		<Show condition={5 === 5}>
			<p>5 equals 5 (should be displayed)</p>
		</Show>
		<Show condition={null}>
			<p>This should not be displayed</p>
		</Show>
		<Show condition={true}>
			<div>
				<h2>Nested Show Component</h2>
				<Show condition={false}>
					<p>
						This nested content should not
						be displayed
					</p>
				</Show>
				<Show condition={true}>
					<p>
						This nested content should be
						displayed
					</p>
				</Show>
			</div>
		</Show>
		<Show condition={true}>
			<ul>
				{[1, 2, 3, 4, 5].map((num) => (
					<Show condition={num % 2 === 0}>
						<li key={num}>{num} is even</li>
					</Show>
				))}
			</ul>
		</Show>
	</div>
);

export default App;
