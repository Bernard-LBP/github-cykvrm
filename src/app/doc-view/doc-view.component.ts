import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallQniService } from './../services/call-qni.service';

@Component({
  selector: 'app-doc-view',
  templateUrl: './doc-view.component.html',
  styleUrls: ['./doc-view.component.scss']
})
export class DocViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,private documentfinal: CallQniService ) { }

  idurl : any;

  ngOnInit() {
    this.getId();
    this.callService(this.idurl);
  }

  callService(iddocument : string){
    console.log(iddocument);
    this.documentfinal.getDoc(iddocument);
  }

  getId(){
    this.route.paramMap.subscribe(params => {
      this.idurl = params.get('id');
    });
  }
  
}
