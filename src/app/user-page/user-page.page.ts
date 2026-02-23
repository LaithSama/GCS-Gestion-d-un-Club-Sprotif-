import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonInput, IonTextarea} from '@ionic/angular/standalone';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.page.html',
  styleUrls: ['./user-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonItem, IonInput, IonTextarea]
})
export class UserPagePage implements OnInit {
  user = {
    nom: 'Rakoto',
    prenom: 'Jean',
    email: 'jean.rakoto@email.com',
  };

  categories = [
    { id: 'musculation',   label: 'Musculation',   emoji: '🏋️' },
    { id: 'yoga',          label: 'Yoga',           emoji: '🧘' },
    { id: 'cardio',        label: 'Cardio',         emoji: '🏃' },
    { id: 'natation',      label: 'Natation',       emoji: '🏊' },
    { id: 'arts-martiaux', label: 'Arts martiaux',  emoji: '🥋' },
    { id: 'crossfit',      label: 'CrossFit',       emoji: '⚡' },
  ];
  selectedCategory: string = '';

  coaches = [
    { id: 1, nom: 'Randria',     prenom: 'Marc',  specialite: 'Musculation',  categorie: 'musculation',   note: 5, avis: 24 },
    { id: 2, nom: 'Rasolofo',    prenom: 'Hery',  specialite: 'Musculation',  categorie: 'musculation',   note: 4, avis: 17 },
    { id: 3, nom: 'Rabe',        prenom: 'Aina',  specialite: 'Yoga & Zen',   categorie: 'yoga',          note: 5, avis: 31 },
    { id: 4, nom: 'Andria',      prenom: 'Lova',  specialite: 'Hatha Yoga',   categorie: 'yoga',          note: 4, avis: 12 },
    { id: 5, nom: 'Ratsimba',    prenom: 'Fidy',  specialite: 'Cardio HIIT',  categorie: 'cardio',        note: 4, avis: 20 },
    { id: 6, nom: 'Rakotobe',    prenom: 'Solo',  specialite: 'Running',      categorie: 'cardio',        note: 3, avis: 8  },
    { id: 7, nom: 'Andriambelo', prenom: 'Tojo',  specialite: 'Natation',     categorie: 'natation',      note: 5, avis: 15 },
    { id: 8, nom: 'Razafy',      prenom: 'Mika',  specialite: 'Karaté',       categorie: 'arts-martiaux', note: 4, avis: 19 },
    { id: 9, nom: 'Ratolofo',    prenom: 'Ony',   specialite: 'CrossFit',     categorie: 'crossfit',      note: 5, avis: 28 },
  ];
  selectedCoach: any = null;

  get filteredCoaches() {
    return this.coaches.filter(c => c.categorie === this.selectedCategory);
  }

  subscriptions = [
    { id: 'semaine', label: 'Par semaine', prix: '15 000', saving: ''     },
    { id: 'mois',    label: 'Par mois',    prix: '50 000', saving: '-17%' },
    { id: 'annee',   label: 'Par année',   prix: '500 000',saving: '-31%' },
  ];
  selectedSub: string = '';

  paymentTypes = [
    { id: 'liquide', label: 'Liquide',        emoji: '💵' },
    { id: 'mobile',  label: 'Mobile Money',   emoji: '📱' },
    { id: 'carte',   label: 'Carte bancaire', emoji: '💳' },
  ];
  selectedPaymentType: string = '';

  mobileOperators = [
    { id: 'Mvola',        label: 'Mvola',        color: '#e2001a' },
    { id: 'Airtel Money', label: 'Airtel Money', color: '#ff0000' },
    { id: 'Orange Money', label: 'Orange Money', color: '#ff6600' },
  ];
  
  selectedOperator: string = '';
  mobileNumber: string  = '';
  cardNumber:   string  = '';
  cardExpiry:   string  = '';
  cardCvv:      string  = '';
  cardName:     string  = '';

  avisNote:      number  = 0;
  avisTexte:     string  = '';
  avisSubmitted: boolean = false;
  starLabels = ['Mauvais', 'Passable', 'Bien', 'Très bien', 'Excellent'];

  selectCategory(id: string) {
    this.selectedCategory   = id;
    this.selectedCoach      = null;
    this.selectedSub        = '';
    this.selectedPaymentType = '';
    this.resetAvis();
  }

  selectCoach(coach: any) {
    this.selectedCoach       = coach;
    this.selectedSub         = '';
    this.selectedPaymentType = '';
    this.resetAvis();
  }

  selectPaymentType(id: string) {
    this.selectedPaymentType = id;
    this.selectedOperator    = '';
    this.mobileNumber = this.cardNumber = this.cardExpiry = this.cardCvv = this.cardName = '';
  }

  subscribe() {
    alert(`✅ Abonnement "${this.selectedSub}" confirmé avec ${this.selectedCoach.prenom} ${this.selectedCoach.nom} !`);
  }

  submitAvis() {
    this.avisSubmitted = true;
    setTimeout(() => {
      this.avisSubmitted = false;
      this.resetAvis();
    }, 3000);
  }

  private resetAvis() {
    this.avisNote  = 0;
    this.avisTexte = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
