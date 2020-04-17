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

function PantsIcon(props) {
  return (
    <SvgIcon {...props}>
      <path stroke="black" d="M71.429 0.00963069C73.6056 -0.0357298 75.3168 -0.0713924 75.7622 3.66361L76.5237 8.67382H4.96924L5.73068 3.66361C6.17613 -0.0713924 7.8868 -0.0357405 10.0634 0.00962004C30.4863 0.435104 51.0064 0.43496 71.429 0.00963069Z" />
      <path stroke="black" d="M4.75575 10.6592L2.65625 24.4736C11.7495 24.3085 19.7341 18.7823 23.6645 10.6592H4.75575Z" />
      <path stroke="black" fill-rule="evenodd" clip-rule="evenodd" d="M25.7821 10.6592C21.6709 19.8768 12.7363 26.2778 2.36364 26.3295L2.33388 26.5179C-0.105088 41.9639 -0.634916 131.529 0.755925 147.1C14.1489 150.925 22.5026 151.009 36.2218 147.1L40.746 48.2219L45.2702 147.1C58.9894 151.009 67.3431 150.925 80.7361 147.1C82.1269 131.529 81.5971 41.9639 79.1582 26.5179L79.1284 26.3295C68.7557 26.2778 59.8211 19.8768 55.7099 10.6592H25.7821ZM40.746 16.8059C41.6538 16.7929 42.3857 16.0628 42.3857 15.1641C42.3857 14.2654 41.6538 13.5353 40.746 13.5224C39.8381 13.5353 39.1064 14.2654 39.1064 15.1641C39.1064 16.0628 39.8381 16.7929 40.746 16.8059Z" />
      <path stroke="black" d="M57.8276 10.6592C61.758 18.7823 69.7426 24.3085 78.8358 24.4736L76.7363 10.6592H57.8276Z" />
    </SvgIcon>
  );
}
export default function PantsIconColors(props) {
	const classes = useStyles()
	const currColor = props.color
	return(
		<PantsIcon viewBox="0 0 150 144" htmlColor={props.color}/>
	)
}
