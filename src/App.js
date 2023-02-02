import logo from "./assets/meddtoday.png";
import hearticon from "./assets/heart-icon.svg";
import carticon from "./assets/cart-icon.svg";
import usericon from "./assets/user-icon.svg";
import location from "./assets/location-icon.svg";
import search from "./assets/search-icon.svg";
// import img1 from "./assets/img1.png";
// import img2 from "./assets/img2.png";
// import img3 from "./assets/img3.png";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import FooterNew from "./footerComponent";

import {
  FaMobileAlt,
  FaShoppingCart,
  FaRegQuestionCircle,
  FaFileInvoice,
  FaArrowLeft,
  FaArrowRight,
  FaAngleRight,
} from "react-icons/fa";
import {
  myFooterData,
  headerTexts,
  dropdownValues,
  titleText,
  descText,
  placeHolderText,
  myPopularImages,
  myNewArrivals,
  myFooterImages,
} from "./constants";

import "./App.css";
import Footer from "./footer";
import { useContext, useRef, useState } from "react";

function App() {
  const inputReference = useRef(null);
  const [fileUploadState, setFileUploadState] = useState(null);
  const [selected, setSelected] = useState([]);
  // const [position, setPosition] = useState(0);
  const isItemSelected = id => !!selected.find(el => el === id);

  // const getItems = () =>
  //   Array(20)
  //     .fill(0)
  //     .map((_, ind) => ({ id: `element-${ind}` }));

  const handleClick =
    id =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected(currentSelected =>
        itemSelected
          ? currentSelected.filter(el => el !== id)
          : currentSelected.concat(id)
      );
    };

  function fileUploadInputChange(e) {
    setFileUploadState(e.target.value);
  }

  function fileUploadAction(e) {
    inputReference.current.click();
  }

  function LeftArrow() {
    const {  scrollPrev } = useContext(VisibilityContext);

    return (
      <div>
        <FaArrowLeft onClick={() => scrollPrev()} className="arrow_bg" />
      </div>
      // <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      //   Left
      // </button>
    );
  }

  function RightArrow() {
    const {  scrollNext } = useContext(VisibilityContext);
    return (
      // <img
      //   src={search}
      //   style={{ width: "20px", height: "20px" }}
      //   alt=""
      //   onClick={() => scrollNext()}
      // />
      <div>
        <FaArrowRight onClick={() => scrollNext()} className="arrow_bg" />
      </div>
    );
  }

  function Card({ onClick, selected, title, unitPrice, actualPrice, discountedPrice , image }) {
    return (
      <div className="new_arrivals_image">
        <img
          src={image}
          alt=""
        />
        <h3>{title}</h3>
        <p>{unitPrice}</p>
        <span>
          {discountedPrice} <strike>{actualPrice}</strike>
        </span>
        <div className="new_arrival_image_heart">
          <img src={hearticon} alt="logo" className="" />
          <span></span>
        </div>
        <div className="add_to_cart_but">
          <div className="cart_icon">
            <FaShoppingCart />
            ADD TO CART
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home_page">
      <header className="header">
        <img src={logo} alt="logo" />
        <div className="header_right">
          <p className="question_icon">
            Need Help
            <FaRegQuestionCircle />
          </p>
          <div className="need_button">
            <p className="mobile_icon">
              <FaMobileAlt />
              Download App
            </p>
          </div>
          <div
            style={{
              position: "relative",
            }}
          >
            <img src={hearticon} alt="logo" className="image_circle" />
            <div className="notify_count">2</div>
          </div>
          <div
            style={{
              position: "relative",
            }}
          >
            <img src={carticon} alt="logo" className="image_circle" />
            <div className="notify_count">5</div>
          </div>
          <div
            style={{
              position: "relative",
            }}
          >
            <img src={usericon} alt="logo" className="image_circle" />
            <div className="notify_count">7</div>
          </div>
        </div>
      </header>
      {/*-------------------------------- Navbar bar container--------------------*/}
      <nav>
        {headerTexts.map(item => {
          return <p>{item}</p>;
        })}
      </nav>
      {/*-------------------------------- middle content container--------------------*/}
      <div className="middle_content">
        <h1 className="middle_content_heading">{titleText}</h1>
        <h3 className="middle_content_para">{descText}</h3>
        <div className="search_bar">
          <img src={location} alt="" style={{ height: "30px" }} />
          <select name="cars" id="location">
            {dropdownValues.map(city => {
              return <option value={city}>{city}</option>;
            })}
          </select>
          <input type="text" placeholder={placeHolderText} />
          <img
            src={search}
            alt=""
            style={{ height: "30px", marginLeft: "170px" }}
          />
        </div>
        <div>
          <div>
            <input
              type="file"
              hidden
              ref={inputReference}
              onChange={fileUploadInputChange}
            />
          </div>
          <button className="order_button">ORDER WITH PRESCRIPTION</button>
          <button className="upload_button" onClick={fileUploadAction}>
            <FaFileInvoice style={{ fontSize: "18px" }} />
            UPLOAD NOW
          </button>
        </div>
        {fileUploadState}
      </div>
      {/*-------------------------------- footer container--------------------*/}
      <footer>
        {myFooterData.map(data => {
          return (
            <Footer
              title={data.title}
              desc={data.desc}
              bgColor={data.bgColor}
              image={data.image}
            />
          );
        })}
      </footer>
      {/*-------------------------------- slider images container--------------------*/}
      <div className="slider_images">
        <div className="slider_image1">
          <p>UP TO 25% OFF</p>
          <h3>GET ALL YOUR</h3>
          <h1>
            Medication at
            <br /> One Place
          </h1>
          <div className="shop_now_but">
            <button className="footer_email_btn_btn">
              <FaAngleRight className="fa-arrow-right" />
            </button>
            <h4>SHOP NOW</h4>
          </div>
        </div>
        <div className="slider_image2">
          <p>UP TO 25% OFF</p>
          <h3>GET ALL YOUR</h3>
          <h1>
            Medication at
            <br /> One Place
          </h1>
          <div className="shop_now_but">
            <button className="footer_email_btn_btn">
              <FaAngleRight className="fa-arrow-right" />
            </button>
            <h4>SHOP NOW</h4>
          </div>
        </div>
        <div className="slider_image3">
          <p>UP TO 25% OFF</p>
          <h3>GET ALL YOUR</h3>
          <h1>
            Medication at
            <br /> One Place
          </h1>
          <div className="shop_now_but">
            <button className="footer_email_btn_btn">
              <FaAngleRight className="fa-arrow-right" />
            </button>
            <h4>SHOP NOW</h4>
          </div>
        </div>
      </div>
      {/*-------------------------------- popular Categories container--------------------*/}
      <div className="popular_categories">
        <h1>Popular Categories</h1>
        <div className="popular_categories_images">
          <FaArrowLeft className="arrow_bg" />
          {myPopularImages.map(value => {
            return (
              <div>
                <div>
                  <img src={value.image} alt="" className="heart_image" />
                  <p className="popular_categories_images_content">
                    {value.title}
                  </p>
                </div>
              </div>
            );
          })}
          <FaArrowRight className="arrow_bg" />
        </div>
      </div>
      {/*-------------------------------- New arrivals container ----------------*/}
      <div className="new_arrivals">
        <h1>New arrivals</h1>
        <div className="new_arrivals_images">
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {myNewArrivals.map((item, index) => (
              <Card
                itemId={index + 1} // NOTE: itemId is required for track items
                title={item.title}
                key={index}
                unitPrice={item.unitPrice}
                actualPrice={item.actualPrice}
                discountedPrice={item.discountedPrice}
                image={item.image}
                onClick={handleClick(index + 1)}
                selected={isItemSelected(index + 1)}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
      {/*-------------------------------- footer container ----------------*/}
      <div>
        <div style={{ display: "flex" }}>
          <FooterNew />
          <div className="footer_right">
            <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
            <p>
              Get a free subscription to our health and fitness tip
              <br /> and stay tuned to our latest offers
            </p>
            <div className="footer_email_wrap">
              <input
                className="footer_email_button"
                placeholder="Enter your email address "
              />
              <button className="footer_email_btn">
                <FaAngleRight className="fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_container">
            <div className="footer_bottom_images">
              Our Payment Partners
              {myFooterImages.map(data => {
                return (
                  <img src={data.image} alt="" style={{ height: "45px" }} />
                );
              })}
            </div>
            <div className="social_contents">
              <p>SOCIAL CONNECT -</p>
              <p>Facebook |</p>
              <p>Twitter |</p>
              <p>LinkedIn | </p>
              <p>YouTube |</p>
              <p>Refer & Earn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
