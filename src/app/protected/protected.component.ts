import { Component, OnInit } from '@angular/core';
import { TestService} from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit {

  constructor(private apicall:TestService, private router: Router) { }


canActivate(): boolean {  
    if (!this.apicall.gettoken()) {  
        this.router.navigateByUrl("/welcome");  
    }  
    return this.apicall.gettoken();  
} 
  ngOnInit(){
  }

}
