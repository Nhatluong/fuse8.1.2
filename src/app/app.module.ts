import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { FakeDbService } from 'app/fake-db/fake-db.service';
import { AppComponent } from 'app/app.component';
import { AppStoreModule } from 'app/store/store.module';
import { LayoutModule } from 'app/layout/layout.module';
import { OnSiteAdminComponent } from './on-site-admin/on-site-admin.component';
import {MaterialModule} from './main/angular-material-elements/material.module';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { CreateComponent } from './forms/create/create.component';
import { IsNumberEvenDirective } from './validates/is-number-even.directive';
import { ListVendorComponent } from './vendor/list-vendor/list-vendor.component';
import { CreateVendorComponent } from './vendor/create-vendor/create-vendor.component';
import { MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
    {
        path        : 'apps',
        loadChildren: './main/apps/apps.module#AppsModule'
    },
    {
        path        : 'pages',
        loadChildren: './main/pages/pages.module#PagesModule'
    },
    {
        path        : 'ui',
        loadChildren: './main/ui/ui.module#UIModule'
    },
    {
        path        : 'documentation',
        loadChildren: './main/documentation/documentation.module#DocumentationModule'
    },
    {
        path        : 'angular-material-elements',
        loadChildren: './main/angular-material-elements/angular-material-elements.module#AngularMaterialElementsModule'
    },
    {
        path      : 'on-site-admin',
        component: OnSiteAdminComponent
    },
    {
        path        : 'create',
        component   : CreateComponent
    },

    {
        path        : 'vendors',
        component   : ListVendorComponent
    },
    {
        path        : 'vendor/create',
        component   : CreateVendorComponent
    },

    {
        path      : '**',
        redirectTo: 'apps/dashboards/analytics'
    },
];

@NgModule({
    declarations: [
        AppComponent,
        OnSiteAdminComponent,
        DialogConfirmComponent,
        CreateComponent,
        IsNumberEvenDirective,
        ListVendorComponent,
        CreateVendorComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        MatInputModule,
        ReactiveFormsModule,

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule,
        MaterialModule,
    ],
    bootstrap   : [
        AppComponent
    ],
    entryComponents: [
        DialogConfirmComponent
    ],
})
export class AppModule
{
}
