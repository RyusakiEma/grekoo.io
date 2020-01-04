import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { SublimacionComponent } from './components/sublimacion/sublimacion.component';
import { AppComponent } from './app.component';
import { ImpresionComponent } from './components/impresion/impresion.component';
import { BordadoComponent } from './components/bordado/bordado.component';
import { SerigrafiaComponent } from './components/serigrafia/serigrafia.component';

const appRoutes: Routes = [
    {path: '', component: SublimacionComponent},
    {path: 'sublimacion', component: SublimacionComponent},
    {path: 'impresion', component: ImpresionComponent},
    {path: 'bordado', component: BordadoComponent},
    {path: 'serigrafia', component: SerigrafiaComponent},
    {path: '**', component: SublimacionComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
