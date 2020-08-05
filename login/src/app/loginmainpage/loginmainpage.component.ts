import { Component, OnInit, Input } from '@angular/core';
import{user} from '../user';
import{Router} from '@angular/router';
import{NgserviceServiceService} from '../ngservice-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-loginmainpage',
  templateUrl: './loginmainpage.component.html',
  styleUrls: ['./loginmainpage.component.css']
})
export class LoginmainpageComponent implements OnInit {

 // @Input() product :product=new product();
@Input()  user : user=new user();

  constructor(private _route:Router , private _service:NgserviceServiceService) { }
// 
  ngOnInit(): void {
  }

  public onSubmitLogin(){
    this._service.addloginProducttoRemote(this.user).subscribe
    (
      data=>
      {
      console.log("data added successfully"),
      this._route.navigate[('welcome')]
      } 
    )
    return this._route.navigate(['welcome']);
  }
    
}
