import { useState } from 'react';
import './App.css';

function App() {
	let [player1Counter, setPlayer1Counter] = useState(0);
	let [player2Counter, setPlayer2Counter] = useState(0);
	return (
		<div>
			<div>
				<div>Иван Иванович</div>
				<div>{player1Counter}</div>
				<button
					onClick={() => {
						setPlayer1Counter((actual) => actual + 1); //зависимость от предыдущего значения, чтобы избежать ошибок в более сложных конструкциях
					}}>
					+
				</button>
			</div>
			<hr />
			<div>
				<div>Пётр Петрович</div>
				<div>{player2Counter}</div>
				<button
					onClick={() => {
						setPlayer2Counter((actual) => actual + 1);
					}}>
					+
				</button>
			</div>
			<hr />
			<button
				onClick={() => {
					setPlayer1Counter((actual) => actual - 1);
					setPlayer2Counter((actual) => actual - 1);
				}}>
				-
			</button>
			<button
				onClick={() => {
					setPlayer1Counter(10);
					setPlayer2Counter(10);
				}}>
				reset
			</button>
		</div>
	);
}

export default App;
//Хуки вызываются только в компоненте. Их нельзя вызывать в циклах, услових, функциях
