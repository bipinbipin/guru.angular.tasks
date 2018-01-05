import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Task} from "../Task";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {

      // INITIALIZE THE TASK LIST
      this.taskService.getTasks()
        .subscribe(
            (tasks: any[]) => {
                this.tasks = tasks
            },
            (error) => console.log(error)
        );

      // SUBSCRIBE TO THE NEW TASK EMITTER STREAM
      this.taskService.onTaskAdded.subscribe(
          (task: Task) => this.tasks.push(task)
      );



  }

  getDueDateLabel(task: Task) {
      return task.completed ? 'label-success' : 'label-primary';
  }

  onTaskChange(event, task) {
      this.taskService.saveTask(task, event.target.checked).subscribe();
      // console.log('task has changed');
  }

}
