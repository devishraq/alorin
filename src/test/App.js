import { alorin, createSignal, createEffect, Display } from "../core";

const Loading = () => {
	const [loading, setLoading] = createSignal(true);
	createEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	});

	return (
		<Display
			// @ts-ignore
			condition={loading}
		>
			<p>Loading...</p>
		</Display>
	);
};

const App = () => (
	<div>
		<h1>Display Component Test</h1>
		<Display delay={500} condition={true}>
			<p>This should be displayed</p>
		</Display>
		<Display condition={false}>
			<p>This should not be displayed</p>
		</Display>
		<Display condition={1 > 2} fallback={<Loading/>}>
			<p>1 is greater than 2 (should not be displayed)</p>
		</Display>
		<Display condition={5 === 5}>
			<p>5 equals 5 (should be displayed)</p>
		</Display>
		<Display condition={null}>
			<p>This should not be displayed</p>
		</Display>
		<Display condition={true}>
			<div>
				<h2>Nested Display Component</h2>
				<Display condition={false}>
					<p>
						This nested content should not
						be displayed
					</p>
				</Display>
				<Display condition={true}>
					<p>
						This nested content should be
						displayed
					</p>
				</Display>
			</div>
		</Display>
		<Display condition={true}>
			<ul>
				{[1, 2, 3, 4, 5].map((num) => (
					<Display condition={num % 2 === 0}>
						<li key={num}>{num} is even</li>
					</Display>
				))}
			</ul>
		</Display>
	</div>
);

export default App;
