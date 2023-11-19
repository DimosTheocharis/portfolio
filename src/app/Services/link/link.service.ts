import { Injectable } from '@angular/core';
import { LinkModel } from '../../Models/link/linkModel';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private linkData: LinkModel[] = [
    {
      icon: "fa fa-facebook",
      href: "https://www.facebook.com/profile.php?id=100006877263001",
      message: "Follow me on Facebook"
    },
    {
      icon: "fa fa-instagram",
      href: "https://www.instagram.com/dimos_theocharis/",
      message: "Follow me on Instagram"
    },
    {
      icon: "fa fa-linkedin",
      href: "https://www.linkedin.com/in/dimosthenis-theocharis-197a991b3/",
      message: "Let's connect on Linkedin"
    },
    {
      icon: "fa fa-github",
      href: "https://github.com/DimosTheocharis",
      message: "View my projects on Github"
    },
    {
      icon: "fa fa-code",
      href: "https://github.com/DimosTheocharis/portfolio",
      message: "View the code of this website"
    }
  ]

  constructor() { }

  public getLinks(): LinkModel[] {
    return this.linkData;
  }
}
