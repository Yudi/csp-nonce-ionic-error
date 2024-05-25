import { CSP_NONCE, enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { setNonce } from '@ionic/core/loader';

if (environment.production) {
  enableProdMode();
}

const nonce = 'randomNonceGoesHere';
setNonce(nonce);

bootstrapApplication(AppComponent, {
  providers: [
    { provide: CSP_NONCE, useValue: nonce },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
  ],
});
