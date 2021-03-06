import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
	MatButtonModule,
	MatMenuModule,
	MatToolbarModule,
	MatIconModule,
	MatCardModule,
	MatCheckboxModule
} from "@angular/material";

@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatCheckboxModule
	],
	exports: [
		MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatCheckboxModule
	],
	declarations: []
})
export class MaterialModule { }
