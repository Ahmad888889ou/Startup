import React from 'react'
import './_team.scss'
export default function Team() {
    return (
        <section className='mb-5'>
            <div className="container">
                <div className="row text-center mb-4">
                    <div className="col">
                        <h5 className='text-info'>TEAM MEMBERS</h5>
                        <h2 className='fw-bold'>Professional Stuffs Ready to <br />Help Your Business</h2>
                        <hr className=' border border-3 border-info ' style={{ marginLeft: 'auto', marginRight: 'auto', width: 150, }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 mb-5 ">
                        <div class="card rounded-2 border-0" >
                            <img src="https://excellium.online/static/khizra_sohail-991833dc555339c51daf9612bd981829.png" class="card-img-top" alt="..." height='330px' />
                            <div class="card-body" style={{ backgroundColor: '#e0fbfc', }}>
                                <h5 class="card-title text-info fw-bold  text-center">Khizra Sohail</h5>
                                <h5 class="card-title  text-center text-secondary " style={{fontSize:14}}>SQA Engineer</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4  mb-5">
                        <div class="card rounded-2 border-0" >
                            <img src="https://excellium.online/static/muhammad_abdullah-258a0380b61cdda633477ef43aa10952.jpg" class="card-img-top" alt="..." height='330px' />
                            <div class="card-body" style={{ backgroundColor: '#e0fbfc', }}>
                                <h5 class="card-title text-info  fw-bold text-center">Muhammad Abdullah</h5>
                                <h5 class="card-title  text-center  text-secondary " style={{fontSize:14}}>Software Engineer</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-5 ">
                        <div class="card rounded-2 border-0" >
                            <img src="https://excellium.online/static/muhammad_jahanzaib-17d8825fcf4e3a773ce240a665ed7516.jpg" class="card-img-top" alt="..." height='330px' />
                            <div class="card-body" style={{ backgroundColor: '#e0fbfc', }}>
                            <h5 class="card-title text-info  fw-bold text-center">Muhammad Jahanzaib</h5>
                            <h5 class="card-title  text-center  text-secondary " style={{fontSize:14}}>Software Engineer</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
