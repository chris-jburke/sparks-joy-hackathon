import React,{useState, useEffect} from 'react'
import {Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import SignUpCom from './SignUpCom'
import SignInCom from './SignInCom'
import Profile from './Profile'
import HomeCom from './HomeCom'
import usersData from './json/usersData'
import usersClosets from './json/usersClosets'
import RecycleCenter from './RecycleCenter'
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
				<li className="li"><Link to="/profile">Profile</Link></li>
				<li className="li"><Link to="/">LogOut</Link></li>
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