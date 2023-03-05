import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0d3b66' }}>
      <div className="container">
        <div className="row  ">
          <div className="col-12 col-md-6 col-lg-3 bg-info  ">
            <div className="profile text-center mt-5 text-white ">
              <Link to='/' class="navbar-brand fw-bold fs-3" > <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg> Startup</Link> <br /> 
              <p className='text-center mx-3'>Lorem ipsum dolor sit amet consect adipisicing elit. Ducimus saepe corporis quae. Natus, magnam quibusdam! Dolore </p>
              <input type="text" placeholder='Your Email' className='w-50 py-1 mt-1 mb-2' /><span className='btn py-2 px-2 mb-2 text-white rounded-0 ' style={{backgroundColor:'#0d3b66'}}>Sign Up</span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-white text-start">
            <h5 className='text-center'> Get In Touch</h5>
            <hr className=' border border-3 border-info ' style={{ marginLeft: 'auto', marginRight: 'auto', width: 100, }} />
            <p style={{ fontSize: 12 }} className='text-center'>123 Street,NewYork,USA</p>
            <p style={{ fontSize: 12 }} className='text-center'>info@gmail.com</p>
            <p style={{ fontSize: 12 }} className='text-center'>+012 345 67890</p>
          </div>
          <div className="col text-white text-start">
            <h5 className='text-center'>Quick Links</h5>
            <hr className=' border border-3 border-info ' style={{ marginLeft: 'auto', marginRight: 'auto', width: 100, }} />
            <p style={{ fontSize: 12 }} className='text-center'>Home</p>
            <p style={{ fontSize: 12 }} className='text-center'>About Us</p>
            <p style={{ fontSize: 12 }} className='text-center'>Our Services</p>
            <p style={{ fontSize: 12 }} className='text-center'>Meet The Team</p>
            <p style={{ fontSize: 12 }} className='text-center'>Latest Blog</p>
            <p style={{ fontSize: 12 }} className='text-center'>Contact Us</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-white text-start">
            <h5 className='text-center'>Popular  Links</h5>
            <hr className=' border border-3 border-info ' style={{ marginLeft: 'auto', marginRight: 'auto', width: 100, }} />
            <p style={{ fontSize: 12 }} className='text-center'>Home</p>
            <p style={{ fontSize: 12 }} className='text-center'>About Us</p>
            <p style={{ fontSize: 12 }} className='text-center'>Our Services</p>
            <p style={{ fontSize: 12 }} className='text-center'>Meet The Team</p>
            <p style={{ fontSize: 12 }} className='text-center'>Latest Blog</p>
            <p style={{ fontSize: 12 }} className='text-center'>Contact Us</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
