import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
        {
            path: '',
            children: [
                { path: '', redirectTo: '/home', pathMatch: 'full' },
            ],
        },
        {
            path: 'home',
            loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), //Lazy load Home module
        },
        {
            path: 'user',
            loadChildren: () => import('./user/user.module').then((m) => m.UserModule), //Lazy load User module
        },
        {
            path: '**',
            redirectTo: '/home',
        },
    ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
