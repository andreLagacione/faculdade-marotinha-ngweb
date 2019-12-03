import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// models
import { MenuModel } from './models/sidebar-model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() toggleMenuEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  public menuFixed = true;
  public isShort = false;
  public menuList: MenuModel[] = [{
    name: 'home',
    icon: 'home',
    uri: '/home'
  }];

  constructor() { }

  /**
  * Programar para o iten do menu ficar destacado quando estiver na pagina diferente da home,
  * se estou na tela de consulta de cte o item de menu que da acesso a essa tela fica azul.
  */

  ngOnInit() {
  }

  public controlFixMenu() {
    this.menuFixed = !this.menuFixed;
    this.toggleMenuEvent.emit(this.menuFixed);
  }

  public mouseEnterEvent() {
    if (!this.menuFixed) {
      this.isShort = false;
    }
  }

  public mouseLeaveEvent() {
    if (!this.menuFixed) {
      this.isShort = true;
    }
  }

}
