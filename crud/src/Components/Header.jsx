const Header = () => {
    return (
      <>
      <div className="container">
        <div className="row">
          <div className="col">

          <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../src/assets/hamb.jpg " className="d-block w-100" alt="Burger" />
    </div>
    <div className="carousel-item">
      <img src="../src/assets/bobburg.jpg" className="d-block w-100" alt="burger2" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
  
</div>

          </div>
             
          </div>


       

      </div>
      </>
    )
  }
  
  export default Header