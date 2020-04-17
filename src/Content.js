import React,{useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import SignUpCom from './SignUpCom'
import SignInCom from './SignInCom'
import Profile from './Profile'
import HomeCom from './HomeCom'
import usersData from './json/usersData'
import usersClosets from './json/usersClosets'
const Content = (props) =>{
	const [signedIn, setSignedIn] = useState(false)
	const [currUser, setCurrUser] = useState("")
	const [useLocalStorage, setUseLocalStorage] = useState(false)
	useEffect(()=> {
		if(useLocalStorage){
			localStorage.setItem("closets", JSON.stringify(usersClosets))
			localStorage.setItem("users", JSON.stringify(usersData))
		}
	},[useLocalStorage])
	useEffect(() => {		
		if (typeof(Storage) !== "undefined") {
			setUseLocalStorage(true)
		}
	},[])

	return(
		<Switch>
			<Route exact path="/" component={()=> <HomeCom />} />
			<Route path="/signup" component={()=> <SignUpCom />} />
			<Route path="/signin" component={()=> <SignInCom setCurrUser={setCurrUser} signedIn={signedIn} setSignedIn={setSignedIn}/>} />
			<Route path="/profile" component={()=> <Profile currUser={currUser} />} />
		</Switch>
	)
}

export default Content