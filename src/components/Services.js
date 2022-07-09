import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Web Development" img="card1.png" text=" Website is one of the most important element for surviving in today’s competitive online market. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="E-Commerce Services" img="card2.png" text="E-Commerce is a platform which helps in expanding horizons of your business online. We offer budget friendly creative E-commerce Solutions for all your needs. We help you to sell your products in a simple, powerful and cost effective way" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Mobile Applications" img="card3.png" text="A Website is one of the most important element for surviving in today’s competitive online market." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
