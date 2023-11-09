import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';




function Login() {
    const [email,setEmail]=useState([]);
    const [password,setPassword]=useState([]);
    const[user,setUser]=useState([]);


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        // axios.get('https://api.denzo.io/api/cus/v1/login')
        .then(respose=>{
            setUser(respose.data);

        })
        .catch(error=>{
            console.error(error)
        });
    },[]);
  return (
    <div>
        <h2 className='mt-2' >
            {
                user.map(post=>(
                    <h6 key={post.name}>{post.email}</h6>
                ))
            }
        </h2>
        <h1 className='text-white mt-5'> Welcome</h1>
<Form  className=' text-center container  mt-5 border border-dark w-25 shadow-sm'>
        <Form.Group className="mb-3 " >
          <Form.Label> Email</Form.Label>
          <Form.Control type="email"  onChange={(e)=>{setEmail(e.target.value)}} placeholder=""  />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> Password</Form.Label>
          <Form.Control type="password"  onChange={(e)=>{setPassword(e.target.value)}} placeholder="" />
        </Form.Group>
    <Link to={'product'}>
    <Button className='mt-2' variant="danger"> log in</Button>
    </Link>
        <div>
        </div>
      </Form>
        
    </div>
  )
}

export default Login