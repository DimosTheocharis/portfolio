import { Component } from '@angular/core';
import { LinkModel } from 'src/app/Models/link/linkModel';
import { BasicInfoModel } from 'src/app/Models/basicInfo/basicInfoModel';
import { LinkService } from 'src/app/Services/link/link.service';
import { BasicInfoService } from 'src/app/Services/basicInfo/basic-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public links: LinkModel[] = [];
  public basicInfo: BasicInfoModel[] = [];

  constructor(
    private linkService: LinkService,
    private basicService: BasicInfoService
  ) {}

  ngOnInit() {
    this.links = this.linkService.getLinks();
    this.basicInfo = this.basicService.getBasicInfo();
  }
}
