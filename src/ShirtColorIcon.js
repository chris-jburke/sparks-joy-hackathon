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

function ShirtIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" stroke="black" d="M55.7581 0C50.0562 1.51258 26.7793 10.5182 23.0755 13.8142C22.0346 14.7412 6.08783 52.9042 0.0133527 61.3105C-0.700683 62.4557 27.4382 73.0446 32.6649 75.1082V143.275H117.335V75.1082C122.562 73.0446 150.701 62.4557 149.987 61.3105C143.912 52.9042 127.965 14.7412 126.925 13.8142C123.221 10.5182 99.9438 1.51258 94.2419 0C90.062 15.8588 59.9354 15.8493 55.7581 0V0Z" />
    </SvgIcon>
  );
}
export default function ShirtIconColors(props) {
	const classes = useStyles()
	const currColor = props.color
	return(
		<ShirtIcon viewBox="0 0 150 144" htmlColor={props.color}/>
	)
}