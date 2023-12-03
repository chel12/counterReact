import { useState } from 'react';
import './App.css';

function App() {
	let [counters, setCounters] = useState({
		c1: 10,
		c2: 20,
	});
	return (
		<div>
			<div>
				<div>Иван Иванович</div>
				<div>{counters.c1}</div>
				<button
					onClick={() => {
						setCounters((actual) => {
							return { ...actual, c1: actual.c1 + 1 };
						}); //избегать мутабельности, 1. распаковать, 2. взять значение:  задать ему новое
					}}>
					+
				</button>
			</div>
			<hr />
			<div>
				<div>Пётр Петрович</div>
				<div>{counters.c2}</div>
				<button
					onClick={() => {
						setCounters((actual) => {
							return { ...actual, c2: actual.c2 + 1 };
						}); //избегать мутабельности, 1. распаковать, 2. взять значение:  задать ему новое
					}}>
					+
				</button>
			</div>
			<hr />
			<button
				onClick={() => {
					setCounters((actual) => {
						return {
							...actual,
							c1: actual.c1 - 1,
							c2: actual.c2 - 1,
						};
					});
				}}>
				-
			</button>
			<button
				onClick={() => {
					setCounters((actual) => {
						return {
							...actual,
							c1: 0,
							c2: 0,
						};
					});
				}}>
				reset
			</button>
		</div>
	);
}

export default App;
//Хуки вызываются только в компоненте. Их нельзя вызывать в циклах, услових, функциях
