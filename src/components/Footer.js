import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">Shivay Infotech </h1>
                <p className="footer-text">
                  Take Advantage of Technologies
        
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Services </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>

                <li>
                    <Link to="#" >Nirav Gondaliya</Link>
                  </li>
                  <li>
                    <a href="mailto:niravgondaliya2565@gmail.com">niravgondaliya2565@gmail.com</a>
                  </li>
                  <li>
                    <a href="tel:+91 6354010189"> (+91) 6354010189</a> 
                  </li>
                  <li>
                    <Link to="#" >Vinay Danidhariya</Link>
                  </li>
                  <li>
                  <a href="mailto:vinaydanidhariya@gmail.com">vinaydanidhariya@gmail.com</a>
                  </li>
                  <li>
                  <a href="tel:+91 9265979359"> (+91) 9265979359</a> 
                  </li>
                  <li>
                    <Link to="#">Rahul Gondaliya</Link>
                  </li>
                  <li>
                  <a href="mailto:rahulgonadaliya0182565@gmail.com">rahulgonadaliya0182565@gmail.com</a>
                  </li>
                  <li>
                  <a href="tel:+91 6353831031"> (+91) 6353831031</a> 
                  </li>
                
                
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="" > Github</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="" > Twitter</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href=""> Linkedin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
