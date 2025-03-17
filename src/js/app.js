// TODO: write your code here
import Team from "./Team";
import Character from "./Character";


const team = new Team();
const archer = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const swordsman = new Character('Мечник', 'Swordsman', 60, 1, 50, 20);

team.addCharacter(archer);
team.addCharacter(swordsman);

for (const character of team) {
  console.log(character);
}
