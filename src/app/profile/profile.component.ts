import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertService } from '../service/alert.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  idUser = environment.id
  picture = environment.picture
  fullName = environment.fullName
  city = environment.city
  temaFormation = environment.temaFormation
  description = environment.descriptionFormation
  github = environment.github
  linkedin = environment.linkedin


  constructor(
    private router: Router,
    public authService: AuthService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.authService.refreshToken()
  }

}
