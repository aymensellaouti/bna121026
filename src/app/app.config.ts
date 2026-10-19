import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { routes } from './app.routes';
import { LoggerService } from './services/logger.service';
import { provideToastr } from 'ngx-toastr';
import { provideSignalFormsConfig } from '@angular/forms/signals';
import { NG_STATUS_CLASSES } from '@angular/forms/signals/compat';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth/interceptors/auth-interceptor';
import { CustomPreloadingStrategy } from './preloadingStrategies/cutom-preloading.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withPreloading(CustomPreloadingStrategy)
    ),
    provideToastr(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideSignalFormsConfig({
      classes: NG_STATUS_CLASSES
    })
  ],
};
