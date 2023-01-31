import { appState } from "../AppState.js";

export class GamesController{
    drawplayers(){
        let players = appState.players
        console.log('drawing players', players);
    }

}









