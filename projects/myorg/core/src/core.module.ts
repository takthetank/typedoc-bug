import { ModuleWithProviders, NgModule } from '@angular/core';

/**
 * Core platform module.
 * Provides the core platform services.
 */
@NgModule({})
export class CoreModule {
   /**
    * Provides the core module with the providers required in the root injector.
    *
    * **Use it only in the main application module imports.**
    */
   public static forRoot(): ModuleWithProviders<CoreModule> {
      return {
         ngModule: CoreModule
      };
   }
}
