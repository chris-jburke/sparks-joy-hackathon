import React, {useState} from 'react'
import {Grid, Button, Box, InputLabel, FormControl, Input} from '@material-ui/core'

const RecycleCenter = (props) => {
	const [item, setItem] = useState({})
	const [price, setPrice] = useState(0)
	const getRecycle = (type, color, material, size, i) => {
		return (
			<Grid style={{"width":"500px"}} key={i} item xs={12}>
				<span>Type: {type} Color: {color} Material: {material} Size: {size} </span>
			</Grid>
		)
	}
	const getSellForm = () => {
		if(item){
			return (
				<Box>
				<Grid item xs={12}>
					{item.type}
				</Grid>
				<Grid item xs={12}>
					<span>Size: {item.size}</span>
				</Grid>
				<Grid item xs={12}>
					<span>Materail: {item.material}</span>
				</Grid>
				<Grid item xs={12}>
					<span>Color: {item.color}</span>
				</Grid>
				<Grid item xs={12}>
					<FormControl>
						<InputLabel htmlFor="price">Set Price:</InputLabel>
						<Input name="price" aria-describedby="price form" 
						onChange={e => setPrice(e.target.value)} />
					</FormControl>
				</Grid>
				</Box>
			)
		}
	}
	return(
		<Box>
		<h1>Recycle Center</h1>
		<Grid
			container
			justify="center"
			alignContent="center"
			alignItems="center"
			spacing={2}
		>
			<Grid item xs={6}>
				<Grid 
					container
					justify="center"
					alignContent="center"
					alignItems="center"
					spacing={1}
				>
					{props.recycle.map((item, i) => (
						getRecycle(item.type,item.color,item.material,item.size,i)
            		))}
				</Grid>
			</Grid>
			<Grid item xs={6}>
				<Grid 
					container
					justify="center"
					alignContent="center"
					alignItems="center"
					spacing={1}
				>
					{getSellForm}
				</Grid>
			</Grid>
		</Grid>
		</Box>
	)
}
export default RecycleCenter