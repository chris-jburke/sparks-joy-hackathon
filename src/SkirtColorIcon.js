import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));

function SkirtIcon(props) {
  return (
    <SvgIcon {...props}>
      <path stroke="black" d="M85.5638 0.0115302C87.4591 -0.042777 88.9492 -0.0854736 89.337 4.38621L90.0001 10.3846H27.6924L28.3554 4.38621C28.7433 -0.0854736 30.2329 -0.0427898 32.1282 0.0115175C49.912 0.520922 67.7803 0.52075 85.5638 0.0115302Z" />
<path stroke="black" d="M93.3953 32.3343C91.6987 25.4289 90.6622 20.7688 90.1352 12.6924H27.5455C27.0186 20.7688 25.9821 25.3805 24.2854 32.2697L0 133.468C0.208459 142.788 26.4569 150 58.8433 150C91.2644 150 117.548 142.78 117.692 133.443L93.3953 32.3343Z" />
    </SvgIcon>
  );
}
export default function SkirtIconColors(props) {
	const classes = useStyles()
	const currColor = props.color
	return(
		<SkirtIcon viewBox="0 0 118 150" htmlColor={props.color}/>
	)
}