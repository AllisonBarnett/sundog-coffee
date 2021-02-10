import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';
import { CoffeMatchComponent } from './coffe-match/coffe-match.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent}, 
  { path: 'blog', component: BlogComponent}, 
  { path: 'collection', component: CollectionComponent}, 
  { path: 'coffee-match', component: CoffeMatchComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    CollectionComponent,
    CoffeMatchComponent,
    BlogComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    CollectionComponent,
    CoffeMatchComponent,
    BlogComponent,
    FooterComponent
  ],

 

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
