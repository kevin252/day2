import { PostsService } from './posts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { CreditcardPipe } from './creditcard.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [ AppComponent, MyDirectiveDirective, CreditcardPipe ],
	imports: [ BrowserModule, HttpClientModule ],
	providers: [ PostsService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
