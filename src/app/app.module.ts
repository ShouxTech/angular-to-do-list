import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TopBarComponent } from './top-bar/top-bar.component';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
	declarations: [
		AppComponent,
		TopBarComponent,
		ListComponent,
  		ListItemComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }