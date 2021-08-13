import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinGame extends Component {
  render() {
    const { tongSoBanChoi, soBanThang } = this.props;
    return (
      <div className="mt-5">
        <h1 className="text-warning mb-5">I'm iron man, i love you 3000!!</h1>
        <h1 className="text-success mb-5">
          Số bàn thắng: <span className="text-warning">{soBanThang}</span>
        </h1>
        <h1 className="text-success mb-5">
          Số bàn chơi: <span className="text-warning">{tongSoBanChoi}</span>
        </h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tongSoBanChoi: state.gameOanTuXiReducer.tongSoBanChoi,
  soBanThang: state.gameOanTuXiReducer.soBanThang,
});

export default connect(mapStateToProps)(ThongTinGame);
