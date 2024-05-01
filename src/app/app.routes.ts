import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';

export const routes: Routes = [
    { path: 'main', component: MainPageComponent, pathMatch: 'full' },
    { path: '', redirectTo: 'main', pathMatch: 'full' },
];
