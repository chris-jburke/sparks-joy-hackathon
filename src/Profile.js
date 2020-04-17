import React, {useState, useEffect} from 'react'
import {Grid, Box} from '@material-ui/core'

const Profile = (props) => {
	const [currClosetAll, setCurrClosetAll] = useState([])
	const [localCloset, setLocalCloset] = useState({})
	useEffect(() => {
		let closets = localStorage.getItem("closets")
		let closetsObj = JSON.parse(closets)
		setCurrClosetAll(closetsObj.closets)
	},[])
	const getCloset = () => {
		currClosetAll.forEach(curr => {
			if(curr.owner === props.currUser){
				console.log(curr.closet)
			}
		})
	}
	const getJSX = (type, color, material, size) => {

		return (
			<Grid item xs={12}>
				<span>"Type: " {type}</span>
				<span>"Color: "{color}</span>
				<span>"Material: "{material}</span>
				<span>"Size: " {size} </span>
			</Grid>
		)
	}
	return(
		<Grid
			container
			direction="column"
			justify="center"
			alignContent="center"
		>	
			{getCloset()}
			<Grid item xs={12}>TEST</Grid>
		</Grid>
	)
}
export default Profile