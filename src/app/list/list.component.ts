import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	tasks: string[] = [];

	taskInput: string = '';

	constructor() { }

	ngOnInit(): void {
	}

	addTask() {
		this.tasks.push(this.taskInput);
		this.taskInput = '';
	}

	removeTask(name: string) {
		this.tasks = this.tasks.filter(task => task !== name);
	}

}