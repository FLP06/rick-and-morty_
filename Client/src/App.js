import './App.css';
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav"
import { useState, useEffect } from 'react';
import {  Routes, Route, useLocation,  useNavigate } from 'react-router-dom';
import Abaut from './components/Abaut';
import Ditail from './components/Detail';
import Favorites from './components/Favorites';
import axios from "axios"
import Form from './components/Form';

const URL_BASE = "https://be-a-rym.up.railway.app/api/character"
const API_KEY = "f71fb6126dfc.6c5e2dd0e20891515c25"
const NEW_URL = "http://localhost:3001/rickandmorty/character/"

function App() {
   
   const [access, setAccess] = useState(false)
   const [characters, setCharacters] = useState([ ]);
   const ubicacion = useLocation() 
   const rutas = useNavigate()
   
   const usuario = "pepe.grillo@hotmail.com"
   
   const password = "Password1"
   
   const login = (userData) =>{
      if(userData.email === usuario && userData.password === password){
         setAccess(true)
         rutas("/home")
      }
   }
   useEffect(()=>{
      !access && rutas('/')

   },[access, rutas])

   function onSearch(id) {
      //axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
         axios(`${NEW_URL}/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) =>{

      const filtrarPersonajes = characters.filter(personaje => personaje.id !== (id))
      setCharacters(filtrarPersonajes)

   }

   
   return (

      
      <div className='App'>

         {ubicacion.pathname === "/" ? <Form login={login}/> : <Nav onSearch={onSearch}/>}
         

         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path='/abaut' element={<Abaut/>}/>
            <Route path='/detail/:id' element={<Ditail/>}></Route>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
         
          
         
         
         
         
         
      </div>
   );
}

export default App;
