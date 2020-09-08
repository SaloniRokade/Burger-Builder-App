import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from '../Layout/Layout.module.css';

const layout = (props) => {
	return (
		<div>
			<Toolbar/>
			<div>toolbar, sidedrawer, backdrop</div>
			<main className={classes.Content}>
				{props.children}
			</main>
		</div>
	)
}

export default layout