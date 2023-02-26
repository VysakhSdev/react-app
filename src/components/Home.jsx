import React from 'react'
import Products from './Products'

function Home() {
  return (
    <div>
        <div id="carouselExampleIndicators" class="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="assests/img.jpg.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="assests/img1.jpg.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="assests/l2.webp" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div>
<div className="card text-bg-dark text-white border-0">
  <img src="assests/stylish-woman-with-shopping-bags.jpg" class="card-img" alt="Background" height="400px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    <h5 className="card-title display-3 FW-BOLDER Mb-0">NEW SEASONAL ARRIVALS</h5>
    <p className="card-text lead fs-2">
        CHECK OUT ALL THE TREANDS
    </p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
    </div>
   
  </div>
</div>
</div>
<Products/>
    </div>
   





  )
}

export default Home