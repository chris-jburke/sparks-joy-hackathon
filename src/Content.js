import React,{useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import SignUpCom from './SignUpCom'
import SignInCom from './SignInCom'
import HomeCom from './HomeCom'
import usersData from './json/usersData'
const Content = (props) =>{
	const [signedIn, setSignedIn] = useState(false)
	const [currUser, setCurrUser] = useState("")
	const [useLocalStorage, setUseLocalStorage] = useState(false)
	useEffect(()=> {
		if(useLocalStorage){
			localStorage.setItem("", JSON.stringify(buildings) )
			let storedBuildings = localStorage.getItem("buildings")
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
			<Route path="/signin" component={()=> <SignInCom />} />
		</Switch>
	)
}

export default Content