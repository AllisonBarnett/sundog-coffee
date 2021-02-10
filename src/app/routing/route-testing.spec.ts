import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';


import{
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    CollectionComponent,
    CoffeMatchComponent
} from "./app.module";



describe('Router: App', () =>{
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)],
            declarations: [
                HeaderComponent,
                HomeComponent,
                AboutComponent,
                BlogComponent,
                CollectionComponent,
                CoffeMatchComponent
            ]
        });
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    };

    it("fakeAsync works", fakeAsync(() => {
        let promise = new Promise(resolve => {
          setTimeout(resolve, 10);
        });
        let done = false;
        promise.then(() => (done = true));
        tick();
        expect(done).toBeTruthy();
      }));

    it('navigates to "", redirects you to /home', fakeAsync(()=>{
        router.navigate(['']);
        tick();
        expect(location.path()).toBe('/home');
    }));


    it('navigates to "about" takes you to /about', fakeAsync(()=> {
        router.navigate(['about']);
        tick();
        expect (location.path()).toBe('/about');
    }));
});

