import React, { Fragment, useEffect, useState } from 'react'
import "./index.scss"
import axios from 'axios'
import { Link } from 'react-router-dom'
function OurTeachers() {
  const [data, setData] = useState([])
  const [Search, setSearch] = useState("")
  useEffect(() => {
    axios.get(`http://localhost:9090/jobs`).then((response) => {
      setData(response.data)
    })
  })


  return (
    <>
      <div id='Teachers' className='ourteachers_main'>
        <div className='middle'>
          <h2>Our Teachers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
          <input
            style={{ width: "30%", height: "26px", border: "1px solid gray" }}
            type="text"
            placeholder="search from here..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to="/addpage"><button className='addnew'>Add new person</button></Link>
        </div>
        <div className='map'>
          {
             data.filter((value) => {
              if (Search === "") {
                  return value;
              } else if (value.name.toLowerCase().includes(Search.toLowerCase())) {
                  return value;
              }
          })
          .map((element, index) => {
              return (
                <Fragment key={index}>
                  <div className='cards'>
                    <img className='yumru' src={element.imgUrl} />
                    <h5>{element.name}</h5>
                    <p className='pese'>{element.profession}</p>
                    <p className='uzun'>{element.title}</p>
                    <Link to={`/jobs/${element._id}`}><button className='details'>Details</button></Link>
                  </div>
                </Fragment>
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default OurTeachers