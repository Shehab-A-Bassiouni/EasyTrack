import { Component , computed, input , output } from '@angular/core';
import {User} from "./user.model"
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<User>();

  avatarPath = computed(()=>{
    return "../../assets/users/"+this.user().avatar;
  })

  selectedUser = output<User>();

  selectUser(){
    this.selectedUser.emit(this.user());
  }

}
