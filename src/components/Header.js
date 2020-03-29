import React from "react";
class Header extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    if (prevProps.headerSpan !== this.props.headerSpan) {
      document.getElementById("inH1").innerHTML = "clicked";
      document.getElementById("inH1").style.color = bgColor;
    }
  }
  render() {
    const headerStyle = {
      padding: "20px 0",
      lineHeight: "2em"
    };
    return (
      <header style={headerStyle}>
        <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
          Simple Todoey App <span id="inH1"></span>
        </h1>
        <p style={{ fontSize: "19px" }}>
          Please add to-doeys item(s) through the input field
        </p>
      </header>
    );
  }
}
export default Header;
