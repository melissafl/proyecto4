import React, { useEffect, useState } from 'react'
import { db } from './Firebase/firebase'
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore'
import AppRouter from './Router/appRouter'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'



const App = () => {
  
  const [users,setUser] = useState([])
  const userCollectionRef = collection(db,'reservas')
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [phone, setPhone] = useState(0)

  const [formUpdate, setFormUpdate] = useState (false)
  const [item, setItem] = useState(null)

  const autor = import.meta.env.VITE_NAME;
  console.log(autor);

  const createUser = async() =>{
    await addDoc(userCollectionRef, {nombre:name, correo:mail, telefono:phone})
    getUsers()  
  }

  const getUsers = async() =>{
    const data = await getDocs(userCollectionRef)
    setUser(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
  }

  const borrarUsuario = async(id) =>{
    const userDoc = doc(db,'reservas', id)
    await deleteDoc(userDoc)
    getUsers()
  }

  const formUpdateOpen = (data) => {
    setFormUpdate(true)
    setItem(data)
  }

  const handleChange = (e) =>{
    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
  }

const onUpdate = async(id) =>{
  await updateDoc(doc(db, 'reservas', id), item);
}

  useEffect(() =>{
    getUsers();
  },[]);
  
  return (
    <div>
      <AppRouter />
      <div className='container' >
        <div className='row'>
          <div className='col' >
          <h1>Reserva con nosotros</h1>
          </div>
        </div>

        <input type="text" placeholder='Nombre' onChange={(e) => {setName(e.target.value)}} />
        <input type="text" placeholder='Correo' onChange={(e) => {setMail(e.target.value)}} />
        <input type="number" placeholder='Telefono' onChange={(e) => {setPhone(e.target.value)}} />
        <button className='btn btn-info' onClick={createUser}>Eviar</button>
         
        {users.map((item)=>{
      return(
        <>
              <div key={item.id}>
                <h1>Nombre: {item.nombre}</h1>
                <h1>Correo: {item.correo}</h1>
                <h1>Telefono: {item.telefono}</h1>
                <button className='btn btn-warning' onClick={()=> borrarUsuario(item.id)}>Borrar</button>
                <button className='btn btn-primary' onClick={()=> formUpdateOpen(item)}>Editar</button>
              </div>
        </>
       
      )
    })}

      </div>
          

      


    {
      formUpdate &&
      <div>
        <input type="text" placeholder='Nombre' value={item.nombre} name="nombre" onChange={handleChange} />
        <input type="text" placeholder='Correo' value={item.correo} name="correo" onChange={handleChange} />
        <input type="text" placeholder='Telefono' value={item.telefono} name="telefono" onChange={handleChange} />
        <button className='btn btn-success' onClick={()=> onUpdate(item.id)}>Guardar</button>
        
        
     </div>
    }
    <Footer />
  
    </div>
    
  )
}

export default App


