import { Component } from '@angular/core';

@Component({
  selector: 'app-christmas-donations',
  standalone: true,
  imports: [],
  templateUrl: './christmas-donations.html',
  styleUrl: './christmas-donations.scss'
})
export class ChristmasDonations {

  // Reemplazar por el número oficial de WhatsApp
  whatsappNumber = '573204493467';

  get whatsappLink(): string {
    const message = encodeURIComponent(
      'Hola, estoy interesado(a) en apoyar la campaña navideña de ASOAGROPESCAM. ¿Podrían brindarme información sobre cómo realizar mi aporte?'
    );

    return `https://wa.me/${this.whatsappNumber}?text=${message}`;
  }
}