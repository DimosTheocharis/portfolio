import { Injectable } from '@angular/core';
import { MenuItemModel } from 'src/app/Models/menuItem/menuItemModel';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  private menuItemsData: MenuItemModel[] = [
    {
      title: "Home",
      href: "#HomeSection"
    },
    {
      title: "Skills",
      href: "#SkillsSection"
    },
    {
      title: "Education",
      href: "#EducationSection"
    },
    {
      title: "Experience",
      href: "#ExperienceSection"
    },
    {
      title: "Projects",
      href: "#ProjectsSection"
    }
  ]

  constructor() { }

  public getMenuItemsData(): MenuItemModel[] {
    return this.menuItemsData;
  }
}
