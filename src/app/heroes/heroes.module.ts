import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { HeroeComponent } from './heore/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[/*solo vienen modulos en esta parte*/
        CommonModule
    ]
})

export class HeroesModule{}