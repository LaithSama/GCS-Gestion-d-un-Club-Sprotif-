import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-coach-page',
  templateUrl: './coach-page.page.html',
  styleUrls: ['./coach-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CoachPagePage implements OnInit {
  // ── Profil coach (mock) ──
  coach = {
    nom: 'Randria',
    prenom: 'Marc',
    specialite: 'Musculation & Fitness',
  };

  // ── Filtres ──
  filters = [
    { id: 'tous',   label: 'Tous' },
    { id: 'actif',  label: 'Actifs' },
    { id: 'expire', label: 'Expirés' },
  ];
  activeFilter = 'tous';

  // ── Abonnés (mock) ──
  abonnes = [
    { nom: 'Rakoto',      prenom: 'Jean',   abonnement: 'Mensuel', depuis: 'Jan 2025',  statut: 'actif'  },
    { nom: 'Razafy',      prenom: 'Lova',   abonnement: 'Annuel',  depuis: 'Mars 2024', statut: 'actif'  },
    { nom: 'Andria',      prenom: 'Tiana',  abonnement: 'Hebdo',   depuis: 'Fév 2025',  statut: 'actif'  },
    { nom: 'Rabe',        prenom: 'Soa',    abonnement: 'Mensuel', depuis: 'Nov 2024',  statut: 'expire' },
    { nom: 'Ratolofo',    prenom: 'Ony',    abonnement: 'Annuel',  depuis: 'Juin 2024', statut: 'actif'  },
    { nom: 'Rasolofo',    prenom: 'Kanto',  abonnement: 'Mensuel', depuis: 'Déc 2024',  statut: 'actif'  },
    { nom: 'Andriana',    prenom: 'Meva',   abonnement: 'Hebdo',   depuis: 'Oct 2024',  statut: 'expire' },
    { nom: 'Ratsimbazafy',prenom: 'Fara',   abonnement: 'Mensuel', depuis: 'Fév 2025',  statut: 'actif'  },
  ];

  get filteredAbonnes() {
    if (this.activeFilter === 'tous') return this.abonnes;
    return this.abonnes.filter(a => a.statut === this.activeFilter);
  }

  // ── Avis reçus (mock) ──
  avisRecus = [
    { auteur: 'Jean R.',  note: 5, date: 'Il y a 2 jours',    texte: "Coach exceptionnel ! Très professionnel et à l'écoute. J'ai vu de vrais progrès en 2 mois." },
    { auteur: 'Lova R.',  note: 5, date: 'Il y a 1 semaine',  texte: 'Programme sur-mesure parfait. Marc sait adapter chaque séance selon mon niveau.' },
    { auteur: 'Tiana A.', note: 4, date: 'Il y a 2 semaines', texte: 'Très bon coach, pédagogue et motivant. Je recommande vivement.' },
    { auteur: 'Soa R.',   note: 4, date: 'Il y a 1 mois',     texte: 'Bonne expérience globale, les séances sont intenses mais efficaces.' },
    { auteur: 'Ony R.',   note: 5, date: 'Il y a 1 mois',     texte: "Le meilleur coach que j'ai eu ! Résultats visibles dès la 3e semaine." },
    { auteur: 'Kanto R.', note: 4, date: 'Il y a 6 semaines', texte: 'Très professionnel, toujours disponible pour répondre à mes questions.' },
    { auteur: 'Fara R.',  note: 5, date: 'Il y a 2 mois',     texte: 'Suivi personnalisé au top. Merci Marc pour ta patience et ton expertise !' },
  ];

  get moyenneNote(): number {
    if (!this.avisRecus.length) return 0;
    return this.avisRecus.reduce((s, a) => s + a.note, 0) / this.avisRecus.length;
  }

  get ratingBars() {
    return [5, 4, 3, 2, 1].map(star => ({
      stars: star,
      count: this.avisRecus.filter(a => a.note === star).length,
    }));
  }

  constructor() { }

  ngOnInit() {
  }

}
