import { Component } from '@angular/core';
import { MenuItemModel } from 'src/app/Models/menuItem/menuItemModel';
import { MenuItemsService } from 'src/app/Services/menuItems/menu-items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuItems: MenuItemModel[] = [];

  constructor(
    private menuItemsService: MenuItemsService
  ) {}

  ngOnInit() {
    this.menuItems = this.menuItemsService.getMenuItemsData();
  }
}
