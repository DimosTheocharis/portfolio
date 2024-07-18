import { Component, OnInit } from '@angular/core';
import { CertificateModel } from 'src/app/Models/certificate/certificateModel';
import { CertificateService } from 'src/app/Services/certificates/certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  public certificates: CertificateModel[] = [];

  constructor(
    private certificatesService: CertificateService
  ) {}

  ngOnInit() {
    this.certificates = this.certificatesService.getCertificates();
  }
}
