import React, {useState, useEffect} from 'react'
import {Box, Grid, Modal, ButtonBase, Button, FormControl, MenuItem, InputLabel, Select} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import AddNewItem from './AddNewItem'
import EcoIcon from '@material-ui/icons/Eco'
import ShirtColorIcon from './ShirtColorIcon'
import PantsColorIcon from './PantsColorIcon'
function getModalStyle(){
  	const top = 50
  	const left = 50

  	return {
    	top: `${top}%`,
    	left: `${left}%`,
    	transform: `translate(-${top}%, -${left}%)`,
	};
}
const LinkBehavior = React.forwardRef((props, ref) => (
	<RouterLink ref={ref} to="/recycle" {...props} />
))
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '50vw',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const ProfileCloset = (props) => {
	const classes = useStyles()
	const [myCloset, setMyCloset] = useState([])
	const [myRecycle, setMyRecycle] = useState([])
	const [modalStyle]= useState(getModalStyle)
	const [size, setSize] = useState("")
	const [type, setType] = useState("")
	const [goal, setGoal] = useState(1)
	const [color, setColor] = useState("")
	const [material, setMaterial] = useState("")
  	const [open, setOpen] = React.useState(false);
  	useEffect(()=> {
  		setMyCloset(props.closet)
  	},[props.closet])
	const handleOpen = (e) => {
    	e.preventDefault()
    	setOpen(true);
  	};

  	const handleClose = () => {
    	setOpen(false);
  	};
	const getJSX = (type, color, material, size, i) => {
		if(i < (7*goal)) {
			if(type === "tshirt") {
				return (
					<Grid style={{"color":"green", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<ShirtColorIcon color={color} />
						<span style={{"marginLeft":"10px", "width":"400px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} onClick={(e)=> handleMoveToRecycle(e,i)}>Recycle</Button> 
					</Grid>
				)
			} else if(type === "jeans" || type === "pants") {
				return (
					<Grid style={{"color":"green", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<PantsColorIcon color={color} />
						<span style={{"marginLeft":"10px", "width":"400px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} onClick={(e)=> handleMoveToRecycle(e,i)}>Recycle</Button> 
					</Grid>
				)
			}
		} else {
			return(
				<Grid style={{"color":"red", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
					<span>Type: {type} Color: {color} Material: {material} Size: {size} </span>
					<Button variant="outlined" startIcon={<EcoIcon />} onClick={(e, i)=> handleMoveToRecycle(e,i)}>Recycle</Button>  
				</Grid>
			)			
		}
	}
	const getRecycle = (type, color, material, size, i) => {
		return (
			<Grid style={{"width":"500px"}} key={i} item xs={12}>
				<span>Type: {type} Color: {color} Material: {material} Size: {size} </span>
			</Grid>
		)
	}
	const handleTypeChange = (e) => {
		e.preventDefault()
		setType(e.target.value)
	}
	const handleGoalChange = (e) => {
		e.preventDefault()
		setGoal(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		let newItem = {
			type: type,
			color: color,
			material: material,
			size: size
		}
		let currCloset = myCloset
		currCloset.push(newItem)
		setMyCloset(currCloset)
		handleClose()
	}
	const handleMaterialChange = (e) => {
		e.preventDefault()
		setMaterial(e.target.value)
	}
	const handleSizeChange = (e) => {
		e.preventDefault()
		setSize(e.target.value)
	}
	const handleColorChange = (e) => {
		e.preventDefault()
		setColor(e.target.value)
	}
	async function handleMoveToRecycle(e, index) {
		e.preventDefault()
		let currCloset = myCloset
		let removedItem = currCloset.splice(index, 1)
		console.log(currCloset)
		let newCloset = currCloset
		props.setCloset(newCloset)
		let recycledCloset = [...myRecycle, ...removedItem]
		setMyRecycle(recycledCloset)
		props.setRecycle(recycledCloset)
	}
  const body = (
    <div style={modalStyle} className={classes.paper} >
      <Grid
        container
        display="column"
        spacing={1}
        justify="center"
        alignItems="center"
      >
        <Grid style={{"textAlign":"center"}} item xs={12}>
          <h2>Add a clothing item:</h2>
        </Grid>
        <Grid style={{"textAlign":"center"}} item xs={12}>
	    	<FormControl >
        		<InputLabel id="demo-simple-select-label">Type</InputLabel>
        		<Select
          		labelId="demo-simple-select-label"
          		id="demo-simple-select"
          		value={type}
          		onChange={handleTypeChange}
          		style={{"width":"150px"}}
        		>
          			<MenuItem value={"tshirt"}>tshirt</MenuItem>
          			<MenuItem value={"jacket"}>jacket</MenuItem>
          			<MenuItem value={"sweater"}>sweater</MenuItem>
          			<MenuItem value={"dress"}>dress</MenuItem>
          			<MenuItem value={"jeans"}>jeans</MenuItem>
          			<MenuItem value={"shoes"}>shoes</MenuItem>
          			<MenuItem value={"accessories"}>accessories</MenuItem>
        		</Select>
      		</FormControl>        	
        </Grid>
        <Grid style={{"textAlign":"center"}} item xs={12}>
	    	<FormControl >
        		<InputLabel id="demo-simple-select-label">Size</InputLabel>
        		<Select
          		labelId="demo-simple-select-label"
          		id="demo-simple-select"
          		value={size}
          		onChange={handleSizeChange}
          		style={{"width":"150px"}}
        		>
          			<MenuItem value={"XS"}>XS</MenuItem>
          			<MenuItem value={"S"}>S</MenuItem>
          			<MenuItem value={"M"}>M</MenuItem>
          			<MenuItem value={"L"}>L</MenuItem>
          			<MenuItem value={"XL"}>XL</MenuItem>
          			<MenuItem value={"XXL"}>XXL</MenuItem>
          			<MenuItem value={"XXXL"}>XXXL</MenuItem>
        		</Select>
      		</FormControl>        	
        </Grid>
        <Grid style={{"textAlign":"center"}} item xs={12}>
	    	<FormControl >
        		<InputLabel id="demo-simple-select-label">Material</InputLabel>
        		<Select
          		labelId="demo-simple-select-label"
          		id="demo-simple-select"
          		value={material}
          		onChange={handleMaterialChange}
          		style={{"width":"150px"}}
        		>
          			<MenuItem value={"cotton"}>cotton</MenuItem>
          			<MenuItem value={"silk"}>silk</MenuItem>
          			<MenuItem value={"spandex"}>spandex</MenuItem>
          			<MenuItem value={"denim"}>denim</MenuItem>
          			<MenuItem value={"wool"}>wool</MenuItem>
        		</Select>
      		</FormControl>        	
        </Grid>
        <Grid style={{"textAlign":"center"}} item xs={12}>
	    	<FormControl >
        		<InputLabel id="demo-simple-select-label">Color</InputLabel>
        		<Select
          		labelId="demo-simple-select-label"
          		id="demo-simple-select"
          		value={color}
          		onChange={handleColorChange}
          		style={{"width":"150px"}}
        		>
          			<MenuItem value={"white"}>white</MenuItem>
          			<MenuItem style={{"backgroundColor":"red"}}value={"red"}>red</MenuItem>
          			<MenuItem style={{"backgroundColor":"blue"}} value={"blue"}>blue</MenuItem>
          			<MenuItem style={{"backgroundColor":"green"}} value={"green"}>green</MenuItem>
          			<MenuItem style={{"backgroundColor":"pink"}} value={"pink"}>pink</MenuItem>
          			<MenuItem style={{"backgroundColor":"purple"}} value={"purple"}>purple</MenuItem>
          			<MenuItem style={{"backgroundColor":"grey"}} value={"grey"}>grey</MenuItem>
          			<MenuItem style={{"color":"white", "backgroundColor":"black"}} value={"black"}>black</MenuItem>
        		</Select>
      		</FormControl>        	
        </Grid>
        <Grid style={{"textAlign":"center"}} item xs={12}>
        	<Button variant="outlined" onClick={(e)=> handleSubmit(e)}>
        		Submit
        	</Button>
        </Grid>
        <Grid style={{"textAlign":"center"}} item xs={12}>
        </Grid>
        <Grid style={{"textAlign":"center"}} item xs={12}>
        </Grid>
      </Grid>
    </div>
  );
	return (
		<>
		<h1>My Closet</h1>
		<Box style={{"textAlign":"center"}}>
			<h2>How many weeks worth of clothes do you need?</h2>
	    	<FormControl >
        		<InputLabel id="demo-simple-select-label">Goal</InputLabel>
        		<Select
          		labelId="demo-simple-select-label"
          		id="demo-simple-select"
          		value={goal}
          		onChange={handleGoalChange}
          		style={{"width":"150px"}}
        		>
          			<MenuItem value={1}>1</MenuItem>
          			<MenuItem value={2}>2</MenuItem>
          			<MenuItem value={3}>3</MenuItem>
          			<MenuItem value={4}>4</MenuItem>
          			<MenuItem value={5}>5</MenuItem>
        		</Select>
      		</FormControl>     			
		</Box>
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			spacing={2}
			style={{"marginTop":"20px","marginBottom":"20px", "minHeight":"50px", "border":"2px black solid","borderRadius":"10px"}}
		>
			{myCloset.map((item, i) => (
				getJSX(item.type,item.color,item.material,item.size,i)
            ))}
		</Grid>
          <Box style={{"textAlign":"center", "border": "2px dashed grey", "margin": "5px 0", "padding":"0", "borderRadius": "10px", "width":"600px"}}>
            <ButtonBase  style={{"display":"flex", "justify":"center", "width":"600px", "height":"100%", "textAlign":"center"}} focusRipple onClick={(e)=>handleOpen(e)}> 
            	<AddNewItem />
            </ButtonBase>
		  </Box>
        <h1>Clothes To Recycle</h1>
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			spacing={2}
			style={{"marginTop":"20px","marginBottom":"20px", "minHeight":"50px", "border":"2px black solid","borderRadius":"10px"}}
		>
			{props.recycle.map((item, i) => (
				getRecycle(item.type,item.color,item.material,item.size,i)
            ))}
		</Grid>
		<Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
        <Box style={{"textAlign":"center"}}>
        	<Link variant="outlined" to="/recycle" component={LinkBehavior}>
        		Recycling Center
        	</Link>
        </Box>
		</>
	)
}
export default ProfileCloset