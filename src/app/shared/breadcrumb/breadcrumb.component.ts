import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  pageTitle!: string;
  showBreadcrumb: boolean = false;

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data: any) => {
        if (data && data.title) {
          this.pageTitle = String(data.title);
        } else {
          // Check if it's the search page
          const isSearchPage = this.router.url.includes('search');
          this.pageTitle = isSearchPage ? 'Search Page' : 'Ta-meri';
        }

        // Show breadcrumb for all pages except the home page
        this.showBreadcrumb =
          this.router.url !== '/' && !this.router.url.includes('search');
      });
  }
}
