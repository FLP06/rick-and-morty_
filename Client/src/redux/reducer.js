import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"
const inicialState ={

    myFavorites: [],
    allCharacters: []
}


const reducer = (state = inicialState, action)=>{

    switch(action.type){
        case ADD_FAV: 
        return{
            ...state,
            myFavorites: [...state.allCharacters, action.payload],
            allCharacters: [...state.allCharacters,action.payload]
        }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload)
            }

            case FILTER:
                const personajesFiltrado = state.allCharacters.filter(personaje => personaje.gender === action.payload)
                return{
                    ...state,
                    myFavorites: 
                    action.payload === "AllCharacters"
                    ? [...state.allCharacters] 
                    : personajesFiltrado
                }

                
        case ORDER:

        const allCharactersCopy = [...state.allCharacters]
            return{
                ...state,
                myFavorites: action.payload === "A"
                ? allCharactersCopy.sort((a,b)=> a.id - b.id) 
                : allCharactersCopy.sort((a,b)=> b.id - a.id)
            }
        default:
            return{
                ...state
            }
    }
}

export default reducer