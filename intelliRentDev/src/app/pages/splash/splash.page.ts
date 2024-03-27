import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit, AfterViewInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private timeoutRef: any;

  ngAfterViewInit() {
    this.timeoutRef = setTimeout(() => {
      this.router.navigateByUrl('/login')
    }, 2000);
  }

  ngOnDestroy()
  {
    clearTimeout(this.timeoutRef);
  }

}
