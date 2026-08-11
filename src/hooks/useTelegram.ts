import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Telegram?: {
      WebApp: any;
    };
  }
}

export const useTelegram = () => {
  const [tg, setTg] = useState<any>(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      webApp.ready();
      webApp.expand(); // Expands Mini App to full height in Telegram
      setTg(webApp);
    }
  }, []);

  return {
    tg,
    user: tg?.initDataUnpack?.user || tg?.initDataUnsafe?.user,
    closeApp: () => tg?.close(),
  };
};
0