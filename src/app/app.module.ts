import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author.component';
import { SocialsComponent } from './socials.component';

@NgModule({
  declarations: [AppComponent, SocialsComponent, AuthorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
