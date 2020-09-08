import React from 'react'
import classes from '../NavigationItems/NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => {
	return (
		<ul className={classes.NavigationItems}>
			<NavigationItem link='/' active>Buger Builder</NavigationItem>
			<NavigationItem link='/'>Checkout</NavigationItem>
		</ul>
	)
}

export default NavigationItems