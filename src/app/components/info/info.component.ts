import { Component } from '@angular/core';

import { DocumentService } from '../../services/document/document.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {
  emailLink: string = 'jafb537@gmail.com';
  linkedinLik: string = 'https://www.linkedin.com/in/jose-flores-barco/';
  phoneNumber: string = '+50238248705';
  githubLink: string = 'https://github.com/JAFB537';
  resumeEsPath: string = '/assets/documents/Resume-ES.pdf';

  constructor(private documentService: DocumentService) {}

  openWhatsapp(phoneNumber: string) {
    this.documentService.openWhatsapp(phoneNumber)
  }

  openEmail(emailLink: string): void {
    this.documentService.openEmail(emailLink)
  }

  openWindow(input: string): void {
    this.documentService.openWindow(input)
  }

  copyText(textToCopy: string = '') {
    this.documentService.copyText(textToCopy)
  }

  downloadPdf(fileUrl: string) {
    this.documentService.downloadPdf(fileUrl)
  }
}
