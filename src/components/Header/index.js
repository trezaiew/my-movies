import './style.css';

function Header() {
 
    return (
    // <div className='bg-warning'>
      <nav className="navbar navbar-expand-lg bg-warning navbar-dark mt-0">
        <a className="navbar-brand" href="#">MyMovies</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Movies & TV</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item sign-in">
              <a className="nav-link" href="#">Sign in</a>
  
            </li>

          </ul>
        
    {/* <form className="form-inline my-2 my-lg-0">
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          <button onClick={() => {
        setCurrentPage(search);
       
        setMovieId(search);
      }}>Search</button>
    </form> */}
        </div>
        {/* <form>
      <input 
             type="search" placeholder='Search for a movie, tv show, person......' className="search" >
      </input>
      <button type="submit" value="search" className='search-button'>
        <i class="fa fa-search" aria-hidden="true"></i> 
      </button>
        </form> */}
      </nav>
    // </div>
    
    )
  }
  
  export default Header