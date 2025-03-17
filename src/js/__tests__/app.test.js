import Team from "../Team";
import Character from "../Character";

test('add character to team', () => {
  const team = new Team()
  const addy = new Character('Мечник', 'Swordsman', 60, 1, 50, 20)
  expect(team.addCharacter(addy)).toBe(team.addy)
});