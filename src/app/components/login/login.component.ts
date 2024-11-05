import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 's2m-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();

    // Simule la connexion en fonction du rôle sélectionné
    this.authService.login(this.username, this.password);
    console.log("ttte")
    if (this.authService.isAuthenticated()) {
      console.log("test")
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid login credentials!');
    }
  }
}
