import React, { Component } from "react";
import { connect } from "react-redux";

class OanTuTiUser extends Component {
  render() {
    const { option, tongSoBanChoi } = this.props;
    return (
      <div>
        {tongSoBanChoi === 0 ? (
          ""
        ) : (
          <div className="container pt-3">
            <img
              width="150px"
              className="selected-bubble img-thumbnail"
              src={`./images/${option}.png`}
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
  option: state.gameOanTuXiReducer.option,
  tongSoBanChoi: state.gameOanTuXiReducer.tongSoBanChoi,
});

export default connect(mapStateToProps)(OanTuTiUser);
