import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        redirectTo: 'home-page',
        pathMatch: 'full',
    },
    {
        path: 'home-page',
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})

export class AppRoutingModule {
}