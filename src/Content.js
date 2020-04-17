import React,{useState, useEffect} from 'react'
import {Switch, Route, BrowserRouter, Link as RouterLink} from 'react-router-dom'
import SignUpCom from './SignUpCom'
import SignInCom from './SignInCom'
import Profile from './Profile'
import HomeCom from './HomeCom'
import usersData from './json/usersData'
import usersClosets from './json/usersClosets'
import RecycleCenter from './RecycleCenter'
import {Button} from '@material-ui/core'
import Link from '@material-ui/core/Link'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
const LogoutBehavior = React.forwardRef((props, ref) => (
	<RouterLink ref={ref} to="/" {...props} />
))
const ProfileBehavior = React.forwardRef((props, ref) => (
	<RouterLink ref={ref} to="/profile" {...props} />
))
const Content = (props) =>{
	const [signedIn, setSignedIn] = useState(false)
	const [currUser, setCurrUser] = useState("bob@test.com")
	const [useLocalStorage, setUseLocalStorage] = useState(false)
	const [recycle, setRecycle] = useState([])
	const [allClosets, setAllClosets] = useState(usersClosets)
	return(
		<div>
		
		<BrowserRouter>
		<span className="navbar">
			<ul>
				<li className="li">
					<Button variant="outlined" startIcon={<AccountCircleIcon />} component={ProfileBehavior}>Profile</Button>
				</li>
				<li className="li"><Button variant="outlined" startIcon={<ExitToAppIcon />} component={LogoutBehavior}>Logout</Button></li>
			</ul>
		</span>
		<Switch>
			<Route exact path="/" component={()=> <HomeCom />} />
			<Route path="/signup" component={()=> <SignUpCom />} />
			<Route path="/signin" component={()=> <SignInCom setCurrUser={setCurrUser} signedIn={signedIn} setSignedIn={setSignedIn}/>} />
			<Route path="/profile" component={()=> <Profile recycle={recycle} setRecycle={setRecycle} currUser={currUser} allClosets={allClosets} />} />
			<Route path="/recycle" component={()=> <RecycleCenter recycle={recycle}/>} />
		</Switch>
		</BrowserRouter>
		</div>
	)
}

export default Content