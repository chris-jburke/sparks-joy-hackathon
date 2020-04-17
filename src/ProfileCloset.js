import React, {useState} from 'react'
import {Box, Grid} from '@material-ui/core' 
const ProfileCloset = (props) => {
	const [myCloset, setMyCloset] = useState(props.closet)

	const getJSX = (type, color, material, size, i) => {

		return (
			<Grid key={i} item xs={12}>
				<span>Type: {type}</span>
				<span>Color: {color}</span>
				<span>Material: {material}</span>
				<span>Size: {size} </span>
			</Grid>
		)
	}
	return (
		<Grid
			container
			justify="center"
			alignContent="center"
			alignItems="center"
		>
			{myCloset.map((item, i) => (
				getJSX(item.type,item.color,item.material,item.size,i)
            ))}
		</Grid>
	)
}
export default ProfileCloset