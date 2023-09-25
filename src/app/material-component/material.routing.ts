import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ListerannonceComponent } from '../listerannonce/listerannonce.component';
import { ConsulterannonceComponent } from './consulterannonce/consulterannonce.component';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';
import { ConsulterAnnonceComponent } from './client-component/consulter-annonce/consulter-annonce.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { FacturePdfComponent } from '../facture-pdf/facture-pdf.component';

import { AddresponsableComponent } from './addresponsable/addresponsable.component';
import { HomeComponent } from '../home/home.component';
import { ListresponsableComponent } from '../listresponsable/listresponsable.component';
export const MaterialRoutes: Routes = [
  {path: 'allusers', component:ListresponsableComponent},
  {path: 'addresponsable', component: AddresponsableComponent},
  {
    path: 'button',
    component: ButtonsComponent
  },
  {path: 'home', component: HomeComponent},
  {
    path: 'button',
    component: ButtonsComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },

  {path: 'listeres',  component:  ListeReservationComponent},
  
  {path: 'facture',  component:  FacturePdfComponent},
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'expansion',
    component: ExpansionComponent
  },
  {
    path: 'chips',
    component: ChipsComponent
  },
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'snackbar',
    component: SnackbarComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent
  },
  {
    path: 'listerannonce',
    component: ListerannonceComponent
  },
  {
    path: 'consulterannonce/:id',
    component: ConsulterannonceComponent
  },
  {
    path: 'modifierAnnonce/:annonceid',
    component: UpdateAnnonceComponent
  },
  {
    path:'consulterannonceClient/:id',
    component:ConsulterAnnonceComponent
  }

];
