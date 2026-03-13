import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
 
interface GameItem {
  id: string;
  label: string;
  selected: boolean;
  correct: boolean;
}
 
interface AnimalInfo {
  name: string;
  description: string;
}
 
interface AnswerMap {
  [topId: string]: {
    bottomId: string;
    info: AnimalInfo;
  };
}
 
@Component({
  selector: 'app-animal-habitat-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animalGameComponent.html',
  styleUrls: ['./animalGameComponent.css']
})
export class AnimalHabitatGameComponent implements OnInit {
 
  heading: string = 'Animal Habitat Matching Game';
  description: string = 'Match the animal to its proper habitat to learn more about them.';
 
  topSelected: GameItem | null = null;
  bottomSelected: GameItem | null = null;
 
  gameTops: GameItem[] = [
    { id: 'topGame1', label: 'Penguin',    selected: false, correct: false },
    { id: 'topGame2', label: 'Ocelot',     selected: false, correct: false },
    { id: 'topGame3', label: 'Rhino',      selected: false, correct: false },
    { id: 'topGame4', label: 'Black Bear', selected: false, correct: false },
    { id: 'topGame5', label: 'Camel',      selected: false, correct: false },
    { id: 'topGame6', label: 'Orca Whale', selected: false, correct: false },
  ];
 
  gameBottoms: GameItem[] = [
    { id: 'bottomGame1', label: 'Tropical Rainforest', selected: false, correct: false },
    { id: 'bottomGame2', label: 'Ocean',               selected: false, correct: false },
    { id: 'bottomGame3', label: 'Forest / Mountains',  selected: false, correct: false },
    { id: 'bottomGame4', label: 'Grassland / Savanna', selected: false, correct: false },
    { id: 'bottomGame5', label: 'Antarctic / Polar',   selected: false, correct: false },
    { id: 'bottomGame6', label: 'Desert',              selected: false, correct: false },
  ];
 
  private readonly answerMap: AnswerMap = {
    topGame1: {
      bottomId: 'bottomGame5',
      info: {
        name: 'Penguin',
        description: 'Of the 18 species of penguins, all but one species (the Galapagos penguin) live in the Southern Hemisphere, and around ten live either in the Antarctic or in the sub-Antarctic.',
      },
    },
    topGame2: {
      bottomId: 'bottomGame1',
      info: {
        name: 'Ocelot',
        description: 'Ocelots live in tropical rainforests, savannas, thorn forests, and mangrove swamps. These cats prefer living in dense vegetation, as it provides them with additional cover to stalk prey.',
      },
    },
    topGame3: {
      bottomId: 'bottomGame4',
      info: {
        name: 'Rhino',
        description: 'Rhinoceroses are native to Sub-Saharan Africa, Southeast Asia, and the Indian subcontinent. They live in tropical and subtropical grasslands, savannas, shrublands, tropical moist forests, and desert environments.',
      },
    },
    topGame4: {
      bottomId: 'bottomGame3',
      info: {
        name: 'Black Bear',
        description: 'Black bears can be found in a variety of habitats across North America from Canada to Mexico. They predominantly live in forests and tend to thrive in rugged, high-elevation terrain like mountain ranges.',
      },
    },
    topGame5: {
      bottomId: 'bottomGame6',
      info: {
        name: 'Camel',
        description: 'Bactrian camels live in Central Asia, while dromedary camels live in North Africa and the Middle East. They are typically found in desert regions, although they may also live in prairies and similar environments.',
      },
    },
    topGame6: {
      bottomId: 'bottomGame2',
      info: {
        name: 'Orca Whale',
        description: 'The killer whale has a patchy distribution in all oceans, from the polar ice caps to the Equator, where large prey such as tuna, salmon, and seals are abundant. They can be found in the North Pacific, North Atlantic, and Southern Hemisphere oceans.',
      },
    },
  };
 
  ngOnInit(): void {}
 
  selectTop(item: GameItem): void {
    if (item.correct) return;
 
    this.gameTops.forEach(g => { if (!g.correct) g.selected = false; });
    item.selected = true;
    this.topSelected = item;
 
    this.resetInfo();
    this.checkAnswer();
  }
 
  selectBottom(item: GameItem): void {
    if (item.correct) return;
 
    this.gameBottoms.forEach(g => { if (!g.correct) g.selected = false; });
    item.selected = true;
    this.bottomSelected = item;
 
    this.resetInfo();
    this.checkAnswer();
  }
 
  private checkAnswer(): void {
    if (!this.topSelected || !this.bottomSelected) return;
 
    const topId   = this.topSelected.id;
    const bottomId = this.bottomSelected.id;
    const match   = this.answerMap[topId];
 
    if (match && match.bottomId === bottomId) {
      this.heading     = match.info.name;
      this.description = match.info.description;
      this.markCorrect(this.topSelected, this.bottomSelected);
    }
  }
 
  private markCorrect(top: GameItem, bottom: GameItem): void {
    top.correct    = true;
    top.selected   = false;
    bottom.correct = true;
    bottom.selected = false;
    this.topSelected    = null;
    this.bottomSelected = null;
  }
 
  private resetInfo(): void {
    this.heading     = 'Animal Habitat Matching Game';
    this.description = 'Match the animal to its proper habitat to learn more about them.';
  }
 
  getTopColor(item: GameItem): string {
    if (item.correct)   return 'green';
    if (item.selected)  return 'lightblue';
    return '#2196F3';
  }
 
  getBottomColor(item: GameItem): string {
    if (item.correct)   return 'green';
    if (item.selected)  return 'lightblue';
    return '#2196F3';
  }
}