import { WINNER_COMBOS } from '../constants';
export const checkWinnerFrom = (boardToCheck) => {
    //comprobamos si hay ganador
    //revisamos las combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo; //a, b, c son numeros que representan las posiciones del tablero
        if (
            boardToCheck[a] && //si hay algo en la posición 0
            boardToCheck[a] === boardToCheck[b] && //si la posición 0 es igual a la posición 1
            boardToCheck[a] === boardToCheck[c] //si la posición 0 es igual a la posición 2
        ) {
            //devolvemos el ganador
            return boardToCheck[a];
        }
    }
    //si no hay ganador
    return null
}

export const checkEndGame = (boardToCheck) => {
    //revisamos si hay un empate, si no hay mas espacios vacios en el tablero
    return boardToCheck.every((square) => square !== null);
}