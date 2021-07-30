import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginButtonComponent } from './login-button.component';

@NgModule({
  declarations: [LoginButtonComponent],
  imports: [CommonModule, IonicModule],
  exports: [LoginButtonComponent],
})
export class LoginButtonModule {}
