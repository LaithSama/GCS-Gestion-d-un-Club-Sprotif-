import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonInput, IonItem, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonButton, IonIcon} from '@ionic/angular/standalone';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
  standalone: true,
  imports: [RouterLink, IonContent, IonInput, IonItem, IonCard, CommonModule, FormsModule, IonCardHeader, IonCardContent, IonCardTitle, IonButton, IonIcon]
})
export class ConnexionPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
