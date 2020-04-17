import React, {useState, useEffect} from 'react'
import {Grid, Box} from '@material-ui/core'
import ProfileCloset from './ProfileCloset'
import usersClosets from './json/usersClosets'
const Profile = (props) => {

	return(
		<Grid
			container
			direction="column"
			justify="center"
			alignContent="center"
		>
			<Grid item xs={12}>
				<ProfileCloset closet={usersClosets.closets[0].closet} />
			</Grid>
		</Grid>
	)
}
export default Profile