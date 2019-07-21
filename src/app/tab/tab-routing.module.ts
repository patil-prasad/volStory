import {
    NgModule
} from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';
import {
    TabPage
} from './tab.page';

const routes: Routes = [{
        path: '',
        component: TabPage,
        children: [
            {
                path: 'mystory',
                loadChildren: '../mystory/mystory.module#MystoryPageModule',
            },
            {
                path: 'notifications',
                loadChildren: '../notifications/notifications.module#NotificationsPageModule',
            },
            {
                path: 'profile',
                loadChildren: '../profile/profile.module#ProfilePageModule',
            },
            {
                path: 'home',
                loadChildren: '../home/home.module#HomePageModule',
            },
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TabRoutingModule { }
