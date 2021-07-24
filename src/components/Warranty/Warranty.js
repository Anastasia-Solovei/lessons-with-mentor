import img1 from "../../images/warranty/warranty1.svg";
import img2 from "../../images/warranty/warranty2.svg";
import img3 from "../../images/warranty/warranty3.svg";

const Warranty = () => {
  return (
    <div>
      <div>
        <h2>100 day risk-free trial</h2>
        <ul>
          <li>
            <img src={img1} alt="FREE SHIPPING" />
            <p>FREE SHIPPING</p>
          </li>
          <li>
            <img src={img2} alt="PLUG & PLAY" />
            <p>PLUG & PLAY</p>
          </li>
          <li>
            <img src={img3} alt="FREE RETURNS" />
            <p>FREE RETURNS</p>
          </li>
        </ul>
        <button>Get a room</button>
        <p>
          Terms & Conditions <span> apply</span>
        </p>
      </div>
    </div>
  );
};
export default Warranty;
