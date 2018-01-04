import {actions as A, operacije_sa_mackama as M} from './Actions'


console.log('test reducers.js  - hot reload ne radi sa svim fajlovima');
export const main_reducer = (state=[], action) =>{
	switch(action.type) {
		case A.UVECAJ_BROJ:
			return state;
			break;
		case A.UMANJI_BROJ:
			return state;
			break;

		default:
			return state;
			break;
	}

	return state;
}

export const macke_reducer = (state=[], action)=>{
	switch(action.type) {
	
	case M.NAHRANI_SVE :
		/*prodji kroz sve i setuj da nisu gladne*/
		//let newState = state.filter((el, ind)=>ind/2==0)
		return state;
		break;
	case M.NAPOJ_SVE:
		/*prodji kroz sve i setuj da nisu zedne*/
		return state;
		break;
	case M.NAHRANI_PARNE:
		/*nahrani samo one kojima je index deljiv sa dva*/
		return state;
		break;
	case M.NAHRANI_NEPARNE:
		/*nahrani samo one kojima je index deljiv sa dva +1*/
		return state;
		break;
	case M.NAHRANI_ALERGICNE:
		/*nahrani samo one koji imaju alergiju*/
		return state;
		break;
	case M.DAJ_LEKOVE:
		/*pripremi lekove*/
		return state;
		break;
	default:	
		return state;

	}
}


export const uvecaj_broj = (state = 0, action)=>{
	return 0;
}

export const umanji_broj = (state = 0, action)=>{
	return 0;
}

export const izbrisi_broj = (state = 0, action)=>{
	return 0;
}

export const zameni_broj = (state = 0, action)=>{
	return 0;
}

export const logovanje = (state = "dafault_log_state", action)=>{
	return "";
}