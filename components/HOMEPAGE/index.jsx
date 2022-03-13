import React from "react";
import "./HOMEPAGE.css";

class HOMEPAGE extends React.Component {
  render() {
    const {
      logo,
      place,
      category1,
      visualization,
      spanText1,
      spanText2,
      spanText3,
      inTheseHardTimes,
      category2,
      visualButton,
      spanText4,
      spanText5,
      slice11,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="home-page screen">
          <div className="main-part">
            <div className="nav-bar">
              <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
              <div className="change-bar">
                <div className="nav-home">
                  <div className="place inter-bold-black-20px">{place}</div>
                </div>
                <div className="nav-cat">
                  <div className="category inter-bold-black-20px">{category1}</div>
                </div>
                <div className="nav-vis">
                  <div className="visualization inter-bold-black-20px">{visualization}</div>
                </div>
              </div>
            </div>
            <div className="main-part-1">
              <div className="left-part">
                <div className="text-button">
                  <div className="text">
                    <h1 className="enjoy-this-amazing-t valign-text-middle">
                      <span>
                        <span className="roboto-bold-black-60px">{spanText1}</span>
                        <span className="span1">{spanText2}</span>
                        <span className="roboto-bold-black-60px">{spanText3}</span>
                      </span>
                    </h1>
                    <div className="in-these-hard-times valign-text-middle">{inTheseHardTimes}</div>
                  </div>
                  <div className="button">
                    <div className="cat-button">
                      <div className="category-1 roboto-bold-white-25px">{category2}</div>
                    </div>
                    <div className="visual-button">
                      <div className="visual-button-1 roboto-bold-white-25px">{visualButton}</div>
                    </div>
                  </div>
                </div>
                <div className="made-it-by-ta19 valign-text-middle">
                  <span>
                    <span className="span0">{spanText4}</span>
                    <span className="span1-1">{spanText5}</span>
                  </span>
                </div>
              </div>
              <div className="right-part">
                <img className="slice-1-1" src={slice11} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HOMEPAGE;
