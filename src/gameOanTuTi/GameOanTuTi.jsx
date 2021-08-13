import React, { Component } from "react";
import ThongTinGame from "./ThongTinGame";
import OanTuTi from "./OanTuTi";
import "./GameOanTuTi.css";
import "./buble.css";
import { connect } from "react-redux";
import { actPlayGame, actSelectOpt } from "../store/actions/gameOanTuTiAction";
import OanTuTiUser from "./OanTuTiUser";

class GameOanTuTi extends Component {
  render() {
    const { playGame, option, selectOpt } = this.props;
    return (
      <div className="game-container text-center">
        <div className="container-fluid">
          <div className="row align-items-center mx-auto">
            <div className="col-4 align-self-center">
              <OanTuTiUser />
              <img width="250px" src="./images/player.png" alt="" />
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <img
                      src="./images/keo.png"
                      alt=""
                      width="100px"
                      className={`img-thumbnail ${
                        option === "keo" && "imgSelected"
                      }`}
                      onClick={() => selectOpt("keo")}
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src="./images/bua.png"
                      alt=""
                      width="100px"
                      className={`img-thumbnail ${
                        option === "bua" && "imgSelected"
                      }`}
                      onClick={() => selectOpt("bua")}
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src="./images/bao.png"
                      alt=""
                      width="100px"
                      className={`img-thumbnail ${
                        option === "bao" && "imgSelected"
                      }`}
                      onClick={() => selectOpt("bao")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <ThongTinGame />
              <button className="btn btn-success" onClick={() => playGame()}>
                Play game
              </button>
            </div>
            <div className="col-4 align-self-center">
              <OanTuTi />
              <img width="250px" src="./images/playerComputer.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  option: state.gameOanTuXiReducer.option,
});

const mapDispatchToProps = (dispatch) => ({
  selectOpt: (selectOpt) => {
    dispatch(actSelectOpt(selectOpt));
  },
  playGame: () => {
    dispatch(actPlayGame());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOanTuTi);
