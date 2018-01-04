import { createStore, combineReducers } from 'redux'

import {main_reducer, macke_reducer} from './Reducers'


const init_state = {
	main_reducer :[
		{
			id : "broj_1",
			naziv: "jedaan",
			opis: "prvi broj u sistemu celih brojeva, drugi u binarnom, veoma bitan broj",
			pozeljna_akcija : " logovati nesto zeleno u konzoli",
			timestamp:"Thu Jan 04 2018 12:47:34 GMT+0100 (CET)"
		},

	],

	macke_reducer : [
		{
			id: "macka_1",
			naziv : "Sarena macka VII",
			opis : "sarena je i sedma od svog roda",
			sita: "",
			zedna : "",
			alergija : "",
			lek : "",
			uzet_lek : "",
			hrana : " jede sve"	,
			timestamp:"Thu Jan 04 2018 12:47:34 GMT+0100 (CET)"
		}
	]

	


}

export const store = createStore(
	combineReducers({ main_reducer, macke_reducer }), 
	init_state
)




console.log( store.getState() );