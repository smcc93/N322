import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class CraftingService {
  private user:any;
  public gears: any = [];
  public show:boolean = false;
  public loginSignup:boolean = true;
  public logout:boolean = false;

  constructor(private firestore:AngularFirestore, private auth:AngularFireAuth) {
    this.auth.onAuthStateChanged((user)=>{
      if(user){
        console.log(user);
        this.user = user;
      }else{
        console.log('No User');
        this.user = '';
      }
    })
   }

  //  signup(email, password):void{
  //    this.auth.createUserWithEmailAndPassword(email, password)
  //    .then((user)=>{

  //    })
  //    .catch((error)=>{
  //      var errorCOde = error.code;
  //      var errorMessage = error.message;
  //    })
  //  }

   signInAnonymously(): void{
    this.auth.signInAnonymously();
  }

  logoutUser():void{
    this.auth.signOut();
  }


  getGear(): void{
    if(this.user){
    console.log("get firestore");
    this.firestore.collection("gear")
    .get()
    .subscribe((querySnapshot) =>{
      querySnapshot.forEach((doc)=>{
        console.log(doc.data());
        console.log(doc.id);
        this.gears.push(doc.data());
      })
    })
  }
}
}
