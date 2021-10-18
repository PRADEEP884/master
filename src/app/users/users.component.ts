import { Component, OnInit } from '@angular/core';
import { TestService} from '../test.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
data:any;
  constructor(private apicall:TestService) { }


userInfo(){
	this.apicall.showdata().subscribe(data=>{
		this.data=data;
		console.log(data);
	})
}
  ngOnInit(){

this.userInfo();

  }

}
