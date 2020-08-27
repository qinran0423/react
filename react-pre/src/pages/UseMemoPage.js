import React, { useState, useMemo } from 'react';
export function UseMemoPage(props) {
	const [count, setCount] = useState(0)
	const [value, setValue] = useState("")

	const expensive = useMemo(() => {
		console.log('computed')
		let sum = 0;
		for (let i = 0; i < count; i++) {
			sum += i
		}
		return sum
	},[count])

	return (
		<div>
			<h3>UseMemoPage</h3>
			<p>{count}</p>
			<p>{expensive}</p>
			<button onClick={() => setCount(count + 1)}>add</button>
			<input value={value} onChange={event => setValue(event.target.value)} />
		</div>
	);
}
