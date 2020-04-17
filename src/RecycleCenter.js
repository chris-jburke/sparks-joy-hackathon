import React, {useState} from 'react'
import {Grid, Button, Box, InputLabel, FormControl, Input} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import AddNewItem from './AddNewItem'
import EcoIcon from '@material-ui/icons/Eco'
import ShirtColorIcon from './ShirtColorIcon'
import PantsColorIcon from './PantsColorIcon'
import JacketColorIcon from './JacketColorIcon'
import ShoeColorIcon from './ShoeColorIcon'
import SweaterColorIcon from './SweaterColorIcon'
import SkirtColorIcon from './SkirtColorIcon'
import DressColorIcon from './DressColorIcon'
import AccessoriesColorIcon from './AccessoriesColorIcon'

const RecycleCenter = (props) => {
	const [item, setItem] = useState({})
	const [price, setPrice] = useState(0)
	const [color, setColor] = useState("")
	const [material, setMaterial] = useState("")
	const [open, setOpen] = React.useState(false);
	const handleOpen = (e) => {
    	e.preventDefault()
    	setOpen(true);
  	};
	// const getRecycle = (type, color, material, size, i) => {
	// 	return (
	// 		<Grid style={{"width":"500px"}} key={i} item xs={12}>
	// 			<span>Type: {type} Color: {color} Material: {material} Size: {size} </span>
	// 		</Grid>
	// 	)
	// }
	const getJSX = (type, color, material, size, i) => {
		 if(type) {
			if(type === "tshirt") {
				return (
					<Grid style={{"color":"green", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<span style={{"width":"75px"}}><ShirtColorIcon color={color} /></span>
						<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button> 
					</Grid>
				)
			} else if(type === "jeans" || type === "pants") {
				return (
					<Grid style={{"color":"green", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<span style={{"width":"75px"}}><PantsColorIcon color={color} /></span>
						<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button> 
					</Grid>
				)
			} else if(type === "jacket") {
				return (
					<Grid style={{"color":"green", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<span style={{"width":"75px"}}><JacketColorIcon color={color} /></span>
						<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
					</Grid>
				)				
			} else if(type === "shoes") {
				return (
					<Grid style={{"color":"green", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<span style={{"width":"75px"}}><ShoeColorIcon color={color} /></span>
						<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
					</Grid>
				)
			} else if(type === "sweater") {
				return (
					<Grid style={{"color":"green", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<span style={{"width":"75px"}}><SweaterColorIcon color={color} /></span>
						<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
					</Grid>
				)				
			} else if(type === "skirt") {
				return (
					<Grid style={{"color":"green", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<span style={{"width":"75px"}}><SkirtColorIcon color={color} /></span>
						<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
					</Grid>
				)				
			} else if(type === "dress"){
				return (
					<Grid style={{"color":"green", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<span style={{"width":"75px"}}><DressColorIcon color={color} /></span>
						<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
					</Grid>
				)					
			} else if(type === "accessories"){
				return (
					<Grid style={{"color":"green", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<span style={{"width":"75px"}}><AccessoriesColorIcon color={color} /></span>
						<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
					</Grid>
				)					
			}
		} else {
			if(type === "tshirt") {
				return (
					<Grid style={{"color":"red", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<span style={{"width":"75px"}}><ShirtColorIcon color={color} /></span>
						<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
					</Grid>
				)
			} else if(type === "jeans" || type === "pants") {
				return (
					<Grid style={{"color":"red", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<span style={{"width":"75px"}}><PantsColorIcon color={color} /></span>
						<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
					</Grid>
				)
			} else if(type === "jacket") {
				return (
					<Grid style={{"color":"red", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<span style={{"width":"75px"}}><JacketColorIcon color={color} /></span>
						<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
					</Grid>
				)				
			} else if(type === "shoes") {
				return (
					<Grid style={{"color":"red", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<span style={{"width":"75px"}}><ShoeColorIcon color={color} /></span>
						<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
					</Grid>
				)
			} else if(type === "sweater") {
				return (
					<Grid style={{"color":"red", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<span style={{"width":"75px"}}><SweaterColorIcon color={color} /></span>
						<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
					</Grid>
				)				
			} else if(type === "skirt") {
				return (
					<Grid style={{"color":"red", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<span style={{"width":"75px"}}><SkirtColorIcon color={color} /></span>
						<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
					</Grid>
				)				
			} else if(type === "dress"){
				return (
					<Grid style={{"color":"red", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<span style={{"width":"75px"}}><DressColorIcon color={color} /></span>
						<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
					</Grid>
				)					
			} else if(type === "accessories"){
				return (
					<Grid style={{"color":"red", "alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
						<span style={{"width":"75px"}}><AccessoriesColorIcon color={color} /></span>
						<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
						<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
					</Grid>
				)					
			}			
		}
	}
	const getRecycle = (type, color, material, size, i) => {
		if(type === "tshirt") {
			return (
				<Grid style={{"alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
					<span style={{"width":"75px"}}><ShirtColorIcon color={color} /></span>
					<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
					<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
				</Grid>
			)
		} else if(type === "jeans" || type === "pants") {
			return (
				<Grid style={{"alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
					<span style={{"width":"75px"}}><PantsColorIcon color={color} /></span>
					<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
					<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
				</Grid>
			)
		} else if(type === "jacket") {
			return (
				<Grid style={{"alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
					<span style={{"width":"75px"}}><JacketColorIcon color={color} /></span>
					<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
					<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
				</Grid>
			)				
		} else if(type === "shoes") {
			return (
				<Grid style={{"alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
					<span style={{"width":"75px"}}><ShoeColorIcon color={color} /></span>
					<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
					<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
				</Grid>
			)
		} else if(type === "sweater") {
			return (
				<Grid style={{"alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
					<span style={{"width":"75px"}}><SweaterColorIcon color={color} /></span>
					<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
					<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
				</Grid>
			)				
		} else if(type === "skirt") {
			return (
				<Grid style={{"alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
					<span style={{"width":"75px"}}><SkirtColorIcon color={color} /></span>
					<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
					<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
				</Grid>
			)				
		} else if(type === "dress"){
			return (
				<Grid style={{"alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
					<span style={{"width":"75px"}}><DressColorIcon color={color} /></span>
					<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
					<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
				</Grid>
			)					
		} else if(type === "accessories"){
			return (
				<Grid style={{"alignSelf":"center", "width":"500px"}}key={i} item xs={12}>
					<span style={{"width":"75px"}}><AccessoriesColorIcon color={color} /></span>
					<span style={{"marginLeft":"10px"}}>Color: {color} Material: {material} Size: {size} </span>
					<Button variant="outlined" startIcon={<EcoIcon />} >Sell</Button>
				</Grid>
			)					
		}
	}
	const getSellForm = () => {
		if(item){
			return (
				<Box>
				<Grid item xs={12}>
					{item.type}
				</Grid>
				<Grid item xs={12}>
					<span>Size: {item.size}</span>
				</Grid>
				<Grid item xs={12}>
					<span>Materail: {item.material}</span>
				</Grid>
				<Grid item xs={12}>
					<span>Color: {item.color}</span>
				</Grid>
				<Grid item xs={12}>
					<FormControl>
						<InputLabel htmlFor="price">Set Price:</InputLabel>
						<Input name="price" aria-describedby="price form" 
						onChange={e => setPrice(e.target.value)} />
					</FormControl>
				</Grid>
				</Box>
			)
		}
	}
	return(
		<>
		<Box>
		<h1>Recycle Center</h1>
		<Grid
			container
			
			justify="center"
			alignContent="center"
			alignItems="center"
			spacing={2}
		>
			<Grid item xs={6}>
				<Grid 
					container
					direction="column"
					justify="center"
					alignContent="center"
					alignItems="center"
					spacing={1}
					style={{"marginTop":"20px","marginBottom":"20px", "minHeight":"50px", "border":"2px black solid","borderRadius":"10px"}}
				>
					{props.recycle.map((item, i) => (
						getRecycle(item.type,item.color,item.material,item.size,i)
            		))}
				</Grid>
			</Grid>
			<Grid item xs={6}>
				<Grid 
					container
					justify="center"
					alignContent="center"
					alignItems="center"
					spacing={1}
				>
					{getSellForm()}
				</Grid>
			</Grid>
		</Grid>
		</Box>
		</>
	)
}
export default RecycleCenter