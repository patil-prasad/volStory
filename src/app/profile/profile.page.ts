import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
phone = true;
website = false;
email = false;
  constructor() { }

  ngOnInit() {
  }
phoneToggle() {
  this.phone = !this.phone;
}

websiteToggle() {
  this.website = !this.website;
}

emailToggle() {
  this.email = !this.email;
}

}
