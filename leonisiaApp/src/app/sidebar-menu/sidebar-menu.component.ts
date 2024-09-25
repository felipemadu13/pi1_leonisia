import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faUser, faCog, faBars, faRepeat, faReceipt, faShop, faCut  } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true, 
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
  imports: [FontAwesomeModule, CommonModule] 
})
export class SidebarMenuComponent {
  isCollapsed: boolean = false;

  // Ícones Font Awesome
  faHome = faHome;
  faUser = faUser;
  faCog = faCog;
  faBars = faBars;
  faRepeat = faRepeat;  // Ícone de repetição
  faReceipt = faReceipt;  // Ícone de recibo
  faShop = faShop;  // Ícone de loja
  faCut = faCut;  // Ícone de tesoura (representando cabelo)

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
