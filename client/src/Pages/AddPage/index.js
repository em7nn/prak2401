import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import "./index.scss"
import Navbar from '../../Layouts/Navbar';
import { Link } from 'react-router-dom';

function AddPage() {
  return (
    <>
    <Navbar/>
    <div className='lvlc'>
     <Formik
       initialValues={{ imgUrl: '', name: '', profession: '',title: '' }}
       validationSchema={Yup.object({
         imgUrl: Yup.string().required('Required'),
         name: Yup.string().required('Required'),
         profession: Yup.string().required('Required'),
         title: Yup.string().required('Required')
       })}
       onSubmit={(values) => {
        axios.post("http://localhost:9090/jobs", values)
       }}
     >
       <Form className='form'>
         <label htmlFor="imgUrl">imgUrl</label>
         <Field className="ino" placeholder="Image Url.." name="imgUrl" type="text" />
         <ErrorMessage name="imgUrl" />
 
         <label htmlFor="name">name</label>
         <Field className="ino" placeholder="Name" name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="profession">profession</label>
         <Field className="ino"  placeholder="Profession" name="profession" type="text" />
         <ErrorMessage name="profession" />

         <label htmlFor="title">title</label>
         <Field className="ino"  placeholder="Title" name="title" type="text" />
         <ErrorMessage name="title" />
 
         <Link to={"/"}><button className='submit' type="submit">Submit</button></Link>
       </Form>
     </Formik>
     </div>
    </>
  )
}

export default AddPage