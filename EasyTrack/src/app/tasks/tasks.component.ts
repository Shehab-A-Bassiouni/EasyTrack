import { Component , computed, input , output} from '@angular/core';
import {dummyTasks} from '../dummy-tasks';
import {type User} from "../user/user.model";
import { TaskComponent } from "../task/task.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent]
})
export class TasksComponent {
  tasks = dummyTasks;
  user = input.required<User>();

  userTasks = computed(()=>{
    return this.tasks.filter((user) => user.userId == this.user().id);
  })

}
