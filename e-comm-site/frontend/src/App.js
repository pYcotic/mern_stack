import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'


function App() {
  return (
    <div className="App">

      <div className="page">
        <img src="#" alt="logo"/>
        <div className="title">
          <h1>Chic Cache</h1>
          <h3>The New Affordable</h3>
          <div className="shop-button"><a href="#">SHOP NOW</a></div>
        </div>
      </div>

      <div className="page">
        <div className="aim">
          <h2>Our Aim</h2>
          <p>"find fashionable clothingin a range of sizes and styles at affordable prices.<a>shop our collection now!</a>"</p>
        </div>
        <div className="images">
          <img src="#" alt="clothing in a pile"/>
          <img src="#" alt="clothes hanging on a rail"/>
        </div>
      </div>

      <div className="page page-white">
        <h1 className="title">What we offer</h1>
        <div className="offer">
          <div className="offer-item">
            <img src="#" alt="Clothing on a rail"/>
            <h3>Variety of sizes</h3>
            <p>we offer a wide range of sizes to accommodate diverse body types in our clothing store</p>
          </div>
          <div className="offer-item">
            <img src="#" alt="Clothing on a rail with a shelf above it"/>
            <h3>All seasons</h3>
            <p>Our clothing shop provides stylish options for every season from cozy winter wear to breezy summer outfits</p>
          </div>
          <div className="offer-item">
            <img src="#" alt="Clothing on a rail with a maniquine"/>
            <h3>Weekly Updates</h3>
            <p>We give you regular updates about our new items</p>
          </div>
        </div>
      </div>

      <div className="page page-white">
        <h2>Client Reviews</h2>
        <div className="column">
          <div>
            <img src="#" alt="Mishie"/>
            <h4>Mishie Elvina</h4>
            <p>Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.</p>
          </div>
          <div>
            <img src="#" alt="Nicolas"/>
            <h4>Nicholas Bentley</h4>
            <p>Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.</p>
          </div>
          <div>
            <img src="#" alt="Alyanna"/>
            <h4>Alyanna Silvestre</h4>
            <p>Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.</p>
          </div>
        </div>
      </div>

      <div className="page">
        <div>
          <h1>Shop with Us</h1>
          <div>
            <FontAwesomeIcon icon={faInstagram} />
            <h3>Instagram</h3>
            <h4><a href="#">@chiccache</a></h4>
          </div>
          <div>
            <FontAwesomeIcon icon={faFacebook} />
            <h3>Facebook</h3>
            <h4><a href="#">Chic Cache</a></h4>
          </div>
          <div>
            <h3><a href="#">Yaga Online</a></h3>
          </div>
        </div>
        <div>
          <img src="#" alt="Clothing on a rail"/>
        </div>
      </div>


    </div>
  );
}

export default App;
