import React, {useState, useEffect} from 'react'
import {Grid, Box} from '@material-ui/core'
import ProfileCloset from './ProfileCloset'
import usersClosets from './json/usersClosets'
const Profile = (props) => {
	const [closet, setCloset] = useState(usersClosets.closets[0].closet)
	return(
		<Grid
			container
			direction="column"
			justify="center"
			alignContent="center"
		>
			<Grid item xs={12}>
				<ProfileCloset recycle={props.recycle} setRecycle={props.setRecycle} closet={closet} setCloset={setCloset} />
			</Grid>
		</Grid>
	)
}
export default Profile