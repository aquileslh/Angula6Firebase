import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientServicesComponent } from './client-services/client-services.component';

const clientServicesRouting: Routes = [
    { path: 'services', component: ClientServicesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(clientServicesRouting)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
