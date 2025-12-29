import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
 langs:Array<string> = ["JavaScript", "Python", "Java", "C#", "C++", "TypeScript", "Go", "Rust", "Swift", "PHP", "Kotlin"];




items:Array<string> = ["Milk", "Eggs", "Bread", "Butter", "Coffee", "Rice", "Sugar", "Salt", "Biscuits", "Maggi", "Tea"];


 hobbies:Array<string> = ["Reading", "Gaming", "Drawing", "Singing", "Dancing", "Swimming", "Cooking", "Cycling", "Photography", "Writing"];



languages:Array<string> = ["Hindi", "English", "Marathi", "Gujarati", "Punjabi", "Bengali", "Tamil", "Telugu", "Kannada", "Malayalam"];




fruits:Array<string> = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Pineapple", "Watermelon", "Strawberry", "Kiwi", "Papaya"];
 tasks :Array<string>= ["Learn JS", "Build Project", "Practice Daily", "Read Docs", "Watch Tutorials", "Try Challenges", "Learn Node", "Understand APIs", "Test Code", "Write Clean Code"];
colors:Array<string> = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "cyan", "magenta"];
}
