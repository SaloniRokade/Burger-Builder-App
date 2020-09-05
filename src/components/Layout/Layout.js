import React from 'react';

import classes from '../Layout/Layout.module.css';

const layout = (props) => {
	return (
		<div>
			<div>toolbar, sidedrawer, backdrop</div>
			<main className={classes.content}>
				{props.children}
			</main>
		</div>
	)
}

export default layout