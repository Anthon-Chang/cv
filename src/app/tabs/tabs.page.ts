import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, bicycle, logoYoutube, home, informationCircle, person,documentText, alarmOutline} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ 
      triangle, 
      ellipse, 
      square, 
      bicycle, 
      'information-cicle': informationCircle, 
      logoYoutube, 
      'logo-youtube': logoYoutube,
      'alarm-outline': alarmOutline,
      'document-text': documentText});
  }
}
