import React from 'react'
import { Nav } from 'react-bootstrap'

function Tophead() {
  return (
    <>
    <section>
    <div className=' bg-success d-flex text-white justify-content-between px-5'>
    <p className='pt-2 mx-5'>
        Welcome Guest
        <a href="javascript:void()" className='text-info'>Login</a>
        <a href="javascript:void()" className='text-info'>Sing up</a>
    </p>
    <p className='pt-2'>
        Stay Updated:
        <a href="javascript:void()" className='text-info'>Suscribe Vie Rss </a>
        <a href="javascript:void()" className='text-info'>Email Update</a>
    </p>
    </div>
      <header className='bg-success bg-opacity-75 text-white px-5 py-2'>
        <h1 className='mx-5'>My Blog <span className="h6">Discription of my blog</span></h1>
      </header>
    </section>
    <Nav defaultActiveKey="/home" as="ul" className='bg-success bg-opacity-25 px-5'>
      <Nav.Item as="li">
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">About Earth</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Blog</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-3">Contact Us</Nav.Link>
      </Nav.Item>
    </Nav>
    </>
  )
}

export default Tophead