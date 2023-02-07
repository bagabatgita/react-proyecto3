import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './assets/components/LocationInfo'
import Pagination from './assets/components/Pagination'
import ResidentForm from './assets/components/ResidentForm'
import ResidentList from './assets/components/ResidentList'
import { numbersPage } from './assets/utils/handlePagination'
import { getRandomNumber } from './assets/utils/handleRandom'

const RESIDENTS_PERPAGE =12;

function App() {
  //Estado que almacena la informacion de la locacion
  const [location, setLocation] = useState()
  //Estado qye almacena el valor del input no controlado
  const [nameLocation, setNameLocation] = useState("")
   
  const [page, setPage] = useState(1)

  //Funcion que se ejecura en el primer submit del formulario
  const handleSubmit= (e) =>{
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }
  
  const pagination= () => {
   
    const maxLimit = page * RESIDENTS_PERPAGE;
    const minLimit = maxLimit - RESIDENTS_PERPAGE;
  
    const newResident= location?.residents.slice(minLimit,maxLimit);
    return newResident

  }

  

    //Efecto que se ejecuta en el primer render y cuando cambia nameLocation
   useEffect (()=>{
    setPage(1)
    const dimension = nameLocation == "" ? getRandomNumber(126):nameLocation
    const URL =`https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
    .then((res)=> setLocation(res.data))
    .catch((err)=>console.log(err))

   },[nameLocation])

  return (
    <div className='App'>
   
   
    <div className='banner'>
      <ResidentForm handleSubmit={handleSubmit}/>
    </div>
    
    <LocationInfo location={location}/>

    <Pagination numbersPage={numbersPage} setPage={setPage} location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} page={page}/>

    <ResidentList pagination={pagination}/>
 
    <Pagination numbersPage={numbersPage} setPage={setPage} location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} page={page}/>
  
    </div>
  )
}

export default App
