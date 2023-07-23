import {Component, OnInit} from '@angular/core';
import { IntroService } from '../core/services/intro.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit{
  introText: string;

  constructor(private readonly introService: IntroService) {
  }

  ngOnInit() {
    this.introService.getIntroText().subscribe((text) => this.introText = text);
  }
}
