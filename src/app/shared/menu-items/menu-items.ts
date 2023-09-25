import { Injectable, OnInit } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}
var MENUITEMS;


MENUITEMS = [
  /*{ state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
  { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
  { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
  { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
  { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
  { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },*/
  
  {
    state: 'addresponsable',
    type: 'link',
    name: 'Ajouter Responsable',
    icon: 'vertical_align_center'
  },
  {
    state: 'expansion',
    type: 'link',
    name: 'Ajouter Annonce',
    icon: 'all_inclusive'
  },
  {
    state: 'listerannonce',
    type: 'link',
    name: 'Lister Annonce',
    icon: 'blur_circular'
  },
  
  { state: 'dashboard', type: 'link', name: 'Rapport Statistique ', icon: 'assignment_turned_in' },
  { state: 'allusers', type: 'link', name: 'Liste des résponsable ', icon: 'assistant' },
 /* { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
  {
    state: 'progress-snipper',
    type: 'link',
    name: 'Progress snipper',
    icon: 'border_horizontal'
  },
  
  {
    state: 'progress',
    type: 'link',
    name: 'Progress Bar',
    icon: 'blur_circular'
  },
  {
    state: 'dialog',
    type: 'link',
    name: 'Dialog',
    icon: 'assignment_turned_in'
  },
  { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
  { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
  { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
  {
    state: 'slide-toggle',
    type: 'link',
    name: 'Slide Toggle',
    icon: 'all_inclusive'
  }*/
];

if ( sessionStorage.getItem("roles") == '["ROLE_RESPONSABLE"]')
{ console.log(sessionStorage.getItem("roles"));
  MENUITEMS = [{
    state: 'expansion',
    type: 'link',
    name: 'Ajouter Annonce',
    icon: 'vertical_align_center'
  },
  {
    state: 'listerannonce',
    type: 'link',
    name: 'Lister Annonce',
    icon: 'blur_circular'
  },
  
  { state: 'dashboard', type: 'link', name: 'Rapport Statistique ', icon: 'assignment_turned_in' },];
}


else if ( sessionStorage.getItem("roles") == '["ROLE_CLIENT"]')
{ console.log(sessionStorage.getItem("roles"));
  MENUITEMS = [{
    state: 'listerannonce',
    type: 'link',
    name: 'Lister Annonce',
    icon: 'blur_circular'
  },{
    state: 'listeres',
    type: 'link',
    name: 'Mes Réservation',
    icon: 'assignment_turned_in'
  }];
}

@Injectable()
export class MenuItems implements OnInit{
  ngOnInit(): void {
    window.location.reload();
  }
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
