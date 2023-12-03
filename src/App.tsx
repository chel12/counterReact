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
						setPlayer1Counter(player1Counter + 1);
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
						setPlayer2Counter(player2Counter + 1);
					}}>
					+
				</button>
			</div>
			<hr />
			<button
				onClick={() => {
					setPlayer1Counter(player1Counter - 1);
					setPlayer2Counter(player2Counter - 1);
				}}>
				-
			</button>
		</div>
	);
}

export default App;
