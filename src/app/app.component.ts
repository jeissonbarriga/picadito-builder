import { Component, Input } from "@angular/core";
import { Player } from "./models/player.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  players: Player[] = [];
  newPlayer: Player = new Player();

  team1: Player[] = [];
  team2: Player[] = [];
  aditionalPlayer: Player;

  addNewPlayer() {
    if (this.newPlayer.name) {
      this.players.push(this.newPlayer);
      this.newPlayer = new Player();
    }
  }

  generateTeams() {
    this.resetTeams();
    let remainingPlayers = [...this.players];
    while (remainingPlayers.length > 0) {
      let playerIndex = Math.floor(Math.random() * remainingPlayers.length);
      let player = remainingPlayers[playerIndex];
      this.assignTeam(player, remainingPlayers.length);
      remainingPlayers.splice(playerIndex, 1);
    }
  }

  resetTeams() {
    this.team1 = [];
    this.team2 = [];
  }

  assignTeam(player: Player, remaining: number) {
    if (remaining % 2 !== 0) {
      this.team1.push(player);
    } else {
      this.team2.push(player);
    }
  }
}
