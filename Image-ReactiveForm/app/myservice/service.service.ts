import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
users:any=[];
u:any=[];
  constructor() { }
  addUser(user: any) {
    this.users.push(user);
  }
  loginUser(username: string, password: string): boolean {
    const user = this.users.find((u: { username: string, password: string }) => u.username === username && u.password === password);
    return !!user; // Return true if user is found, false otherwise
  }
  
}
