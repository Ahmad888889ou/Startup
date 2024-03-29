import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function TopNavbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: '#1d3557', }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ color: 'white', }} class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg> 123 Street,New York,USA</a>
                    <a class="navbar-brand" href="#">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16" style={{ color: 'white', }} >
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg> +012 345 6789</a>
                    <a class="navbar-brand" href="#">   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-open-fill" viewBox="0 0 16 16" style={{ color: 'white', }}>
                        <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z" />
                    </svg> chahmad99167@gmail.com</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <span className='border border-2 rounded-circle   '>
                                    <TwitterIcon className='text-white mb-1 ' style={{ fontSize: 20, }} />
                                </span>
                            </li>
                            <li class="nav-item">
                                <span className='border border-2  rounded-circle '>
                                    <FacebookOutlinedIcon className='text-white fs-5 mb-1' />
                                </span>
                            </li>

                            <li class="nav-item">
                                <span className='border border-2 rounded-circle '>
                                    <LinkedInIcon className='text-white fs-5 mb-1' />
                                </span>
                            </li>
                            <li class="nav-item">
                                <span className='border border-2 rounded-circle '>
                                    <InstagramIcon className='text-white fs-5 mb-1' />
                                </span>
                            </li>
                            <li class="nav-item">
                                <span className='border border-2 rounded-circle '>
                                    <YouTubeIcon className='text-white fs-5 mb-1' />
                                </span>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
