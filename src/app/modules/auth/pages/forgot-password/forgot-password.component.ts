import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/button/button.component';


@Component({
  selector: 's2m-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink, ButtonComponent],
})
export class ForgotPasswordComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}