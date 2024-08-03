import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor() {}

  openWhatsapp(phoneNumber: string) {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  }

  openEmail(emailLink: string): void {
    window.location.href = emailLink;
  }

  openWindow(input: string): void {
    window.open(input, '_blank');
  }

  copyText(textToCopy: string = '') {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {})
        .catch((err) => {
          console.error('Error al copiar el texto: ', err);
        });
    } else {
      console.warn(
        'La API del portapapeles no es soportada en este navegador.'
      );
    }
  }

  downloadPdf(fileUrl: string) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'resume2024-JoseFlores.pdf'; // Nombre del archivo descargado
    document.body.appendChild(link); // Necesario para Firefox
    link.click();
    document.body.removeChild(link); // Eliminar el enlace después de la descarga
  }
}
