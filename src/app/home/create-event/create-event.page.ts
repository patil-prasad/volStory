import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {
  progress = 0.666;
  snack = false;
  certificate = false;
  meal = false;
  money = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.progress = 0.666;
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


  // for min max of no of volunteers
  min = 0;
  plusMin() {
    this.min = this.min + 1;
  }

  // page 3



  changeSnack() {
      this.snack = !this.snack;
    }
    changeMeal() {
      this.meal = !this.meal;
    }
    changeMoney() {
      this.money = !this.money;
    }
    changeC() {
      this.certificate = !this.certificate;
    }
}