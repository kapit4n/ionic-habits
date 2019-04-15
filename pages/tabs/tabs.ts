import { Component } from '@angular/core';

import { TimelinePage } from '../timeline/timeline';
import { DonePage } from '../done/done';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TimelinePage;
  tab3Root = DonePage;

  constructor() {

  }
}
