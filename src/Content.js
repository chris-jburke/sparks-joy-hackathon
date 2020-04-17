import React,{useState, useEffect} from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import SignUpCom from './SignUpCom'
import SignInCom from './SignInCom'
import Profile from './Profile'
import HomeCom from './HomeCom'
import usersData from './json/usersData'
import usersClosets from './json/usersClosets'
const Content = (props) =>{
	const [signedIn, setSignedIn] = useState(false)
	const [currUser, setCurrUser] = useState("bob@test.com")
	const [useLocalStorage, setUseLocalStorage] = useState(false)
	const [allClosets, setAllClosets] = useState(usersClosets)
	return(
		<BrowserRouter>
		<Switch>
			<Route exact path="/" component={()=> <HomeCom />} />
			<Route path="/signup" component={()=> <SignUpCom />} />
			<Route path="/signin" component={()=> <SignInCom setCurrUser={setCurrUser} signedIn={signedIn} setSignedIn={setSignedIn}/>} />
			<Route path="/profile" component={()=> <Profile currUser={currUser} allClosets={allClosets} />} />
		</Switch>
		</BrowserRouter>
	)
}

export default Content