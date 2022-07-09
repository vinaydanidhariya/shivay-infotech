function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="../img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
           In Shivay Infotech We build web Applications , E-commerce Website, Mobile Applications and many more technical services.
            </p>
<p className="main-p"> We use technologies like Node.js ,React ,Angular.js ,javascript and databses like Mongodb and SQL.
</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
