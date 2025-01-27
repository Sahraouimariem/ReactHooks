import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
function Productlist({search}) {
    const [products, setProducts] =useState([])
    const [loading,setloading]=useState(true)
    useEffect(()=>{
        const res=axios.get("https://dummyjson.com/products")
        .then((res)=>{setProducts(res.data.products)
            setloading(false)
        })
        .catch((error)=>console.log(error))
       
        
    },[])
    console.log(products)
  return (

    <div  style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",flexWrap:"wrap",}}>
        {loading ? <Spinner animation="border" variant="info" /> :
products.filter(el=>search!=""?el.title.toLowerCase().includes(search):el).map(el=>
     <Card  key={el.id}style={{ width: '18rem',height:"700px"}}>
     <Card.Img style={{height:"350px"}} variant="top" src={el.images[0]} />
     <Card.Body>
       <Card.Title style={{fontSize:"1rem"}}>{el.title}</Card.Title>
       <Card.Text>
        {el.category}
       </Card.Text>
       <Card.Text>
       price: {el.price}$
       </Card.Text>
       <Card.Text style={{height:"200px",overflowY:"auto"}}>
        {el.description}
       </Card.Text>
      
       
       
     </Card.Body>
   </Card>
)}
    </div>
  )
}

export default Productlist