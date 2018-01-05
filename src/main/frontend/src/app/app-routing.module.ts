import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TasksComponent} from "./tasks/tasks.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {StepperComponent} from "./stepper/stepper.component";


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'tasks', component: TasksComponent },
            { path: 'stepper', component: StepperComponent },
            // { path: '**', component: PageNotFoundComponent }  // catch-all for pages not found
            // {
            //     path: 'products',
            //     canActivate: [ AuthGuard ],
            //     data: { preload: true },
            //     loadChildren: 'app/products/product.module#ProductModule'
            // },
            // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            // { path: '**', component: PageNotFoundComponent }
        ]) // , { enableTracing: true })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
