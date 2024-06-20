import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {User} from "./user/user.model"
import { TasksComponent } from "./tasks/tasks.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {
  title = 'EasyTrack';
  users = DUMMY_USERS;
  current_user!:User;

  userSelected(user:User){
    this.current_user = user;
  }

}
