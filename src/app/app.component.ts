import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';

  tasks=[
    { id: 1, task: 'Bring bread', status: 'Done', isEditing: false },
    { id: 2, task: 'Go for a walk', status: 'Done', isEditing: false },
    { id: 3, task: 'Complete this', status: 'Pending', isEditing: false },
    { id: 4, task: 'Play football', status: 'Pending', isEditing: false },
    { id: 5, task: 'Call Mom', status: 'Pending', isEditing: false }
  ]


  toggleStatus(task: any) {
    task.status = task.status === 'Done' ? 'Pending' : 'Done';
  }

  deleteTask(task: any) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  
  toggleEdit(task: any) {
    task.isEditing = !task.isEditing;
  }
}
