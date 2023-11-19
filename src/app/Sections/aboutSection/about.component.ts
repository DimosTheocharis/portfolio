import { Component } from '@angular/core';
import { LinkModel } from 'src/app/Models/link/linkModel';
import { BasicInfoModel } from 'src/app/Models/basicInfo/basicInfoModel';
import { LinkService } from 'src/app/Services/link/link.service';
import { BasicInfoService } from 'src/app/Services/basicInfo/basic-info.service';
import { InterestService } from 'src/app/Services/interest/interest.service';
import { InterestModel } from 'src/app/Models/interest/interestModel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public links: LinkModel[] = [];
  public basicInfo: BasicInfoModel[] = [];
  public interests: InterestModel[] = [];
  public selectedTab: string = "About";

  constructor(
    private linkService: LinkService,
    private basicService: BasicInfoService,
    private interestService: InterestService
  ) { }

  ngOnInit() {
    this.links = this.linkService.getLinks();
    this.basicInfo = this.basicService.getBasicInfo();
    this.interests = this.interestService.getInterest();

    this.selectedTab = "About";
  }

  /**
   * Changes the content that is displayed in the 'Home Section'
   * @param tabName 
   */
  public openTab(tabName: string) {
    this.selectedTab = tabName;
    const tabList: HTMLElement | null = document.getElementById("tabList");

    if (tabList) {
      const tabs: HTMLCollection = tabList.children;

      // close the previous opened tab by removing the class 'selected'
      Array.from(tabs).forEach((tab) => {
        tab.classList.remove("selected");
      })

      // open the new tab by adding the class 'selected'
      const tabToOpen = Array.from(tabs).find((tab) => {
        return tab.id === `tab_${tabName}`;
      })

      if (tabToOpen) {
        tabToOpen.classList.add("selected");
      }
    }
  }
}
