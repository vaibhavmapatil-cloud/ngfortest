import { Component, OnInit } from '@angular/core';
import { ancientStructures, boardGames, cards, famousAuthors, famousInventions, famousRivers, festivalsWorld, mountainRanges, movieGenres, musicalGenres, musicalInstrumentsWorld, prehistoricAnimals, spaceMissions, techInnovations, wondersOfNature, worldCuisines } from '../shared/const/data';
import { Ias, Ibg, Ifa, Ifr, Ifw, Img, Imgp, Imiw, Imr, Ipa, Ism, Iti, Iwc, Iwork } from '../shared/models/int';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
works:Array<Iwork>=cards;
 space:Array<Ism>=spaceMissions;
 world:Array<Iwc>=worldCuisines;
 mount:Array<Imr>=mountainRanges;
 famous:Array<Ifa>=famousAuthors;
pre:Array<Ipa>=prehistoricAnimals;
famo:Array<Ifa>=famousInventions;
mov:Array<Img>=movieGenres;
a:Array<Imgp>=musicalGenres;
 b:Array<Iti>=techInnovations;
 c:Array<Ifr>=famousRivers;
 d:Array<Ias>=ancientStructures;
e:Array<Ibg>=boardGames;
f:Array<Imiw>=musicalInstrumentsWorld;
g:Array<Ifw>=festivalsWorld;
h:Array<Imiw>=wondersOfNature;
}
