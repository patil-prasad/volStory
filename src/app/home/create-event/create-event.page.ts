import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {
progress = 0.333;
  constructor(private router: Router) { }

  ngOnInit() {
    this.progress = 0.333;
  }

  next() {
    this.progress = this.progress * 2;
    // console.log(f);
    if (this.progress >= 2) {
      this.router.navigateByUrl('events/500');
      this.progress = 0;
    }
  }
  onSubmit(f: NgForm) {
    console.log(f);
  }

}
