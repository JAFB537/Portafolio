import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DocumentService } from '../../services/document/document.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  providers: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input() isCollapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  emailLink: string = 'jafb537@gmail.com';
  linkedinLik: string = 'https://www.linkedin.com/in/jose-flores-barco/';
  phoneNumber: string = '+50238248705';
  githubLink: string = 'https://github.com/JAFB537';
  resumeEsPath: string = '/assets/documents/Resume-ES.pdf';

  constructor(private documentService: DocumentService) {}

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

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
