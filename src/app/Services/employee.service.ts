import { Injectable } from '@angular/core';

@Injectable({
  // مين رح يستخدم السيرفز هاي
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }

  returnEmployees(){
    return [
      {"name":"Mai","age":23},
      {"name":"ali","age":33},
      {"name":"ahmed","age":44}
    ] 

  }


}
