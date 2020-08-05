import { Component, OnInit, Input } from '@angular/core';
import {user} from '../user'
import{Router} from '@angular/router';
import{NgserviceServiceService} from '../ngservice-service.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})
export class RegistrationpageComponent implements OnInit {

  @Input()  user : user=new user();

  constructor(private _route:Router , private _service:NgserviceServiceService) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    this._service.addProducttoRemote(this.user).subscribe
    (
      data=>
      {
      console.log("data added successfully"),
      this._route.navigate[('/login')]
      } 
    )
    return this._route.navigate(['/login']);
  }

   display_login(){
     this._route.navigate(['/login']);
  }
}
