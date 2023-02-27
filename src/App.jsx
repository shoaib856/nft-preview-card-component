import "./App.scss";
import nftImg from "./assets/images/image-equilibrium.jpg";
import eth from "./assets/images/icon-ethereum.svg";
import clock from "./assets/images/icon-clock.svg";
import pic from "./assets/images/image-avatar.png";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-image">
            <img src={nftImg} alt="nft-img" />
          </div>
          <div className="card-desc">
            <h1 className="card-title">Equilibrium #3429</h1>
            <p className="card-paragraph">
              Our Equilibrium collection promotes balance and calm
            </p>
            <div className="price-details">
              <span className="price">
                <img src={eth} alt="eth-img" /> 0.041 ETH
              </span>
              <span className="time">
                <img src={clock} alt="clock-img" />3 days left
              </span>
            </div>
            <hr />
            <div className="designer">
              <img src={pic} alt="avatar" />
              <p>
                Creation of <span>Jules Wyvern</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
