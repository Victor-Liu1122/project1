import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HOMEPAGE from "./components/HOMEPAGE";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|home-page)">
            <HOMEPAGE {...hOMEPAGEData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const hOMEPAGEData = {
    logo: "https://anima-uploads.s3.amazonaws.com/projects/622d7d4a0839a399732106ea/releases/622d7d5595eb9f318f89f421/img/png-01-1@2x.png",
    place: "Home",
    category1: "Category",
    visualization: "Visualization",
    spanText1: "Enjoy this amazing template from a ",
    spanText2: "cool guy",
    spanText3: ".",
    inTheseHardTimes: "In these hard times, I think it is important we all contribute to the community. For this reason, I have designed a template for Sketch, so that you can save time in the event that you need to create any design.",
    category2: "Category",
    visualButton: "Visualization",
    spanText4: "Made it by ",
    spanText5: "TA19",
    slice11: "https://anima-uploads.s3.amazonaws.com/projects/622d7d4a0839a399732106ea/releases/622d7d5595eb9f318f89f421/img/slice-1-1@1x.png",
};

