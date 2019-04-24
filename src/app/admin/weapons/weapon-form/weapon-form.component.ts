import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weapon-form',
  templateUrl: './weapon-form.component.html',
  styleUrls: ['./weapon-form.component.scss']
})
export class WeaponFormComponent implements OnInit {
  searchForm = new FormGroup({});
  constructor() {}

  ngOnInit() {}
}
