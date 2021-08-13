import * as gameOanTuTiConstants from '../constants/gameOanTuTiConstants'

export const actPlayGame = () => ({
    type: gameOanTuTiConstants.PLAY_GAME,
})

export const actSelectOpt = selectOption => ({
    type: gameOanTuTiConstants.OAN_TU_TI,
    payload: selectOption,
})