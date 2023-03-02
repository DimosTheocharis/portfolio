import { Component } from '@angular/core';
import { LinkModel } from 'src/app/Models/link/linkModel';
import { LinkService } from 'src/app/Services/link/link.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public links: LinkModel[] = [];

  constructor(
    private linkService: LinkService
  ) {}

  ngOnInit() {
    this.links = this.linkService.getLinks();
  }
}
