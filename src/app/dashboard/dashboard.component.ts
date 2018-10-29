import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.less' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnChange () {
    console.log('on changes:')
  }
  ngOnInit() {
    console.log('on init')
    this.getHeroes();
  }
  ngDoCheck () {
    console.log('do check')
  }
  ngAfterContentInit () {
    console.log('after content init')
  }

  ngAfterContentChecked () {
    console.log('after content chekced')
  }
  ngAfterViewInit () {
    console.log('after view init')
  }
  ngAfterViewChecked () {
    console.log('after view checked')
  }
  ngOnDestroy () {
    console.log('on destroy')
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}