import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TestService} from '../test.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  user='1';
hello:any;

  constructor(private route: ActivatedRoute, private router: Router,private apicall:TestService) {

  	this.hello={
  		username:"",
  		adminpassword:""
  	};
   }

  ngOnInit() {
 localStorage.setItem('SessionUser',this.user)  


  }

  submit(){
  	if(this.hello.adminpassword === "admin"){
  		  	localStorage.setItem("userinput","admin");
  		  	this.router.navigate(['/protected'])
  		  }else{
  		  	alert("Access Denied!!");
  		  }
  }

}
