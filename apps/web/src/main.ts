import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(async () => {
    if (typeof window !== 'undefined') {
      try {
        // Dynamically import AOS on client to avoid static CommonJS import
        const mod = await import('aos');
        const AOS = (mod && (mod.default || mod)) as any;
        AOS?.init?.({ once: false, offset: 120, duration: 3000 });
      } catch (e) {
        // Fail gracefully if AOS cannot be loaded
        // eslint-disable-next-line no-console
        console.warn('AOS failed to load', e);
      }
    }
  })
  .catch((err) => console.error(err));
