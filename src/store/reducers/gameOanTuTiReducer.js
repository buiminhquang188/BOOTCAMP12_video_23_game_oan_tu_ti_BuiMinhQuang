import * as gameOanTuTiConstants from '../constants/gameOanTuTiConstants'

const initialState = {
    mangOanTuTi: [
        { opt: 1, hinhAnh: './images/keo.png' },
        { opt: 2, hinhAnh: './images/bua.png' },
        { opt: 3, hinhAnh: './images/bao.png' },
    ],
    option: 0,
    soBanThang: 0,
    tongSoBanChoi: 0,
}

const gameOanTuXiReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case gameOanTuTiConstants.OAN_TU_TI:
            return { ...state, option: payload }

        case gameOanTuTiConstants.PLAY_GAME:
            state.tongSoBanChoi++;

            // Tạo mảng Random rỗng
            const mangOanTuTiRandom = [];
            // Tạo ra mảng để random một trong 3 cái kéo, búa, bao
            const mangLuaChon = [
                gameOanTuTiConstants.KEO,
                gameOanTuTiConstants.BUA,
                gameOanTuTiConstants.BAO
            ];
            const randomType = mangLuaChon[Math.floor(Math.random() * mangLuaChon.length)];
            const oanTuTiRandom = {
                opt: randomType,
                hinhAnh: `./images/${randomType}.png`
            }
            mangOanTuTiRandom.push(oanTuTiRandom);

            // Tính trường hợp thắng thua
            if ((oanTuTiRandom.opt === 'keo' && state.option === 'bao') || (oanTuTiRandom.opt === 'bua' && state.option === 'keo') || (oanTuTiRandom.opt === 'bao' && state.option === 'bua')) {
                console.log('lose');
            }
            else if (oanTuTiRandom.opt === state.option) {
                console.log('draw');
            }
            else {
                console.log('win');
                state.soBanThang++;
            }
            return { ...state, mangOanTuTi: mangOanTuTiRandom };
        default:
            return state;
    }
}

export default gameOanTuXiReducer;