export const PlanSubcription = (props) => {
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				<div className='free'>
					<h1>Free</h1>
					<h3>₹1000</h3>
					<table>
						<tr>
							<td>ample text here</td>
						</tr>
						<tr>
							<td>ample text here</td>
						</tr>
					</table>
					<button>Select</button>
				</div>

				<div className='standard'>
					<h1>Standard</h1>
					<h3>₹1500</h3>
					<table>
						<tr>
							<td>ample text here</td>
						</tr>
						<tr>
							<td>ample text here</td>
						</tr>
					</table>

					<button>Select</button>
				</div>
				<div className='primium'>
					<h1>Primium</h1>
					<h3>₹2000</h3>
					<table>
						<tr>
							<td>ample text here</td>
						</tr>
						<tr>
							<td>ample text here</td>
						</tr>
					</table>
					<button>Select</button>
				</div>
			</div>
		</div>
	);
};
