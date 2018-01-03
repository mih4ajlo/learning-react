import {MainMenu} from './menus';
import React from 'react';
import Footer from './Footer'

export const PageTemplate = ({children}) =>
	//moze da postoji samo jedan root element
	//ne moze footer da bude van glavnog div-a
	<div>
		<div className="page">
			<MainMenu />
			{children}		
			
		</div>
		<Footer></Footer>
	</div>


