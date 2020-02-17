import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from './nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eastmarches';
  viewName = ' /';
  showNavbar = false;
  showSidebar = false;
  showSidebarControls = false;

  constructor(private router: Router, private navService: NavService) {};

  changeOfRoutes()  {
    if  (this.router.url === "/" || this.router.url === "/hero")  {
      this.viewName = "/"
      this.showNavbar = true;
      this.showSidebarControls = false;
    } else  {
      this.viewName = "/notfound"
      this.showNavbar = true;
      this.showSidebarControls = false;
    }
  }

  toggleSidebar()  {
    this.showSidebar = !this.showSidebar;
    this.navService.setToggle(this.showSidebar);
  }
}
