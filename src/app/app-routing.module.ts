import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {VideoPageComponent} from './video-page/video-page.component';
import {VideosComponent} from './videos/videos.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: '',
                redirectTo: '/',
                pathMatch: 'full'
            },

            {
                path: 'video/:id',
                component: VideoPageComponent
            },

            {
                path: 'videos',
                component: VideosComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}