import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(public modalController: ModalController, private authService: AuthService) { }

  login(): void
  {
    const isAuthenticated = this.authService.login(this.username, this.password);

    if (isAuthenticated) {
      // Close the modal or perform other actions on successful login
      this.close();
    } else {
      // Handle unsuccessful login (show error message, etc.)
      console.log('Invalid credentials');
    }
  }

  signup(): void {
    //logic signup
  }

  close(): void {
    this.modalController.dismiss();
  }

  
}
