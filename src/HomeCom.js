import React from 'react'
import {Box, Button} from '@material-ui/core'
import {Redirect, Link as RouterLink } from 'react-router-dom'
import LogoColorIcon from './LogoIcon'


const HomeCom = (props) => {
	const LinkBehavior = React.forwardRef((props, ref) => (
		<RouterLink ref={ref} to="/signin" {...props} />
	))
	return (
		<Box style={{"maxWidth":"100%","height":"80vh","display":"flex","justifyContent":"center","alignItems":"center", "alignContent":"center"}}>
			<Box style={{"textAlign":"center"}}>
				<span><LogoColorIcon /></span>
				<h1>Eco Closet</h1>
				<Button variant="outlined" component={LinkBehavior}>Sign In</Button>
			</Box>
		</Box>
	)
}
export default HomeCom