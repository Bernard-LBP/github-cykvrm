import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallQniService {

  constructor(private http: HttpClient,) { }
  
  documentbase64 : Object;
  contenu :  string;
  type : string;
  byteArray : string;
  typedocument : string;

  getDoc(iddocument : string){
    this.http.get('http://localhost:3000/'+iddocument).subscribe(data64 =>{
      this.afficheDocument(data64['contenu'],data64['type']);
      this.typedocument = data64['type'];
      window.location.href="http://localhost:3000/tpAngular.pdf";
    });
  }

  afficheDocument(contenu:string,type:string) {
   // var datauri = 'data:application/pdf;base64,' + Base64.encode(contenu);
   // var win = window.open("", "Your PDF", "width=1024,height=768,resizable=yes,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no");
   // win.document.location.href = datauri;
    //const byteArray = new Uint8Array(atob(contenu).split('').map(char => char.charCodeAt(0)));
    //var datauri = 'data:'+ type +''+ byteArray;
    //var win = window.open("", "Your PDF", "width=1024,height=768,resizable=yes,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no");
    //win.document.location.href = datauri;
  }

  afficheDocumentTest(contenu:string,type:string) {
    const byteArray = new Uint8Array(atob(contenu).split('').map(char => char.charCodeAt(0)));
    let file = new Blob([byteArray], { type: type });            
    var fileUrl = URL.createObjectURL(file);
    document.querySelector("iframe").src = fileUrl;
  }
}