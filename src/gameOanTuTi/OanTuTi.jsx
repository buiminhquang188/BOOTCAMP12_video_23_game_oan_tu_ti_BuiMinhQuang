import React, { Component } from "react";
import { connect } from "react-redux";

class OanTuTi extends Component {
  render() {
    const { mangOanTuTi, tongSoBanChoi } = this.props;
    return (
      <div>
        {tongSoBanChoi === 0 ? (
          ""
        ) : (
          <div className="container">
            <img
              width="150px"
              className="selected-bubble img-thumbnail"
              src={mangOanTuTi[0].hinhAnh}
              alt=""
            />
            <div className="speech-bubble"></div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mangOanTuTi: state.gameOanTuXiReducer.mangOanTuTi,
  tongSoBanChoi: state.gameOanTuXiReducer.tongSoBanChoi,
});

export default connect(mapStateToProps)(OanTuTi);
