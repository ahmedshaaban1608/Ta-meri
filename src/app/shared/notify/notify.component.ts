import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent {
notify: string ='';
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe((params) => {
     
      this.notify = params['notify'];
      

    });
  }
}
