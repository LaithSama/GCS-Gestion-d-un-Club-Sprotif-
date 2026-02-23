import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon,IonHeader, IonButton, IonTitle, IonToolbar, IonItem, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
  standalone: true,
  imports: [RouterLink, IonContent, IonIcon,IonHeader, IonButton,IonTitle, IonToolbar, IonItem, IonInput, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardContent, IonCardTitle]
})
export class InscriptionPage implements OnInit {

  role: string = '';

  setRole(selected: string) {
    this.role = selected;
  }

  constructor() { }

  ngOnInit() {
  }

}
