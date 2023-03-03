import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  constructor(private myClient: HttpClient) { }
  
  private BaseUrl='https://jsonplaceholder.typicode.com/users';

 //1) Get all users

 getAllUsers() {
   return this.myClient.get('https://jsonplaceholder.typicode.com/users');   
 }
 
 //2) Get user By ID

 getUserById(id:any) {
  return this.myClient.get(this.BaseUrl+'/'+id);
}

  //3) Update user By ID
                         // body that will be updated 
  UpdateUserById(id:any,  newUser:any) {
    return this.myClient.put(this.BaseUrl+'/'+id , newUser);
  }

}
