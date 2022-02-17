import { createContext, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Banner } from './Banner';
import { CustomizeDialog } from './CustomizeDialog';
import { COOKIE_NAME, getCookie, removeCookie, setCookie } from './helpers';
import { SERVICES, ServiceStatus } from './services';
import type { CookieConsent, CookieConsentStatuses, Service } from './types';

const DEFAULT_TIMEOUT_MS = 200;

export type CookieConsentContextProps = {
  allowAll: (closeCustomizeDialog?: boolean) => void;
  denyAll: (closeCustomizeDialog?: boolean) => void;
  getServiceById: (serviceId: string) => Service | undefined;
  save: (statuses: CookieConsentStatuses, closeCustomizeDialog?: boolean) => void;
  services: Service[];
  toggleBanner: (forceState?: boolean) => void;
  toggleCustomizeDialog: (forceState?: boolean) => void;
};

const CookieConsentContext = createContext<CookieConsentContextProps | null>(null);

export function CookieConsentProvider({ children }: PropsWithChildren<{}>) {
  const timeoutIdRef = useRef<NodeJS.Timeout>();
  const [services, setServices] = useState<Service[]>([]);
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomizeDialog, setShowCustomizeDialog] = useState(false);

  //load services
  useEffect(() => {
    let hasPendingService = false;
    const cookie = getCookie(COOKIE_NAME);

    if (cookie) {
      try {
        const userCookiesConsent = JSON.parse(cookie) as CookieConsent[];

        const websiteServices = SERVICES.map((service) => {
          const userCookieConsent = userCookiesConsent.find(({ id }) => id === service.id);
          //show the banner if a service is pending
          if (
            ((userCookieConsent && userCookieConsent.status === ServiceStatus.pending) ||
              (!userCookieConsent && service.status === ServiceStatus.pending)) &&
            !hasPendingService
          )
            hasPendingService = true;
          return { ...service, status: userCookieConsent?.status || service.status };
        });

        setServices(websiteServices);
      } catch (e) {
        setServices(SERVICES);
        hasPendingService = true;
      }
    } else {
      setServices(SERVICES);
      hasPendingService = true;
    }
    setShowBanner(hasPendingService);

    return () => {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    };
  }, []);

  //save services on update
  useEffect(() => {
    const userCookiesConsent: CookieConsent[] = services.map(({ id, status }) => ({
      id,
      status,
    }));

    setCookie(COOKIE_NAME, JSON.stringify(userCookiesConsent));
  }, [services]);

  const getServiceById = (serviceId: string) => {
    return services.find(({ id }) => id === serviceId);
  };

  const allowAll = (closeCustomizeDialog?: boolean) => {
    let hasForceReload = false;

    const websiteServices = services.map((item) => {
      if (item.status !== ServiceStatus.allowed) {
        if (item.forceReloadWhenAllowed && !hasForceReload) hasForceReload = true;
        return { ...item, status: ServiceStatus.allowed };
      }
      return item;
    });

    setServices(websiteServices);
    if (closeCustomizeDialog) setShowCustomizeDialog(false);
    if (hasForceReload)
      timeoutIdRef.current = setTimeout(() => window.location.reload(), DEFAULT_TIMEOUT_MS);
  };

  const denyAll = (closeCustomizeDialog?: boolean) => {
    const cookiesToRemove: string[] = [];
    let hasForceReload = false;

    const websiteServices = services.map((item) => {
      if (item.status !== ServiceStatus.denied) {
        if (item.status !== ServiceStatus.pending) {
          cookiesToRemove.push(...(item.cookies || []));
          if (item.forceReloadWhenDenied && !hasForceReload) hasForceReload = true;
        }
        return { ...item, status: ServiceStatus.denied };
      }
      return item;
    });

    setServices(websiteServices);
    if (cookiesToRemove.length > 0) cookiesToRemove.forEach(removeCookie);
    if (closeCustomizeDialog) setShowCustomizeDialog(false);
    if (hasForceReload)
      timeoutIdRef.current = setTimeout(() => window.location.reload(), DEFAULT_TIMEOUT_MS);
  };

  const save = (statuses: CookieConsentStatuses, closeCustomizeDialog?: boolean) => {
    const cookiesToRemove: string[] = [];
    let hasForceReload = false;

    const websiteServices = services.map((item) => {
      const status = statuses[item.id];
      if (status && status !== item.status) {
        if (status === ServiceStatus.allowed) {
          if (item.forceReloadWhenAllowed && !hasForceReload) hasForceReload = true;
        }
        if (status === ServiceStatus.denied && item.status !== ServiceStatus.pending) {
          cookiesToRemove.push(...(item.cookies || []));
          if (item.forceReloadWhenDenied && !hasForceReload) hasForceReload = true;
        }
        return { ...item, status };
      }
      return item;
    });

    setServices(websiteServices);
    if (cookiesToRemove.length > 0) cookiesToRemove.forEach(removeCookie);
    if (closeCustomizeDialog) setShowCustomizeDialog(false);
    if (hasForceReload)
      timeoutIdRef.current = setTimeout(() => window.location.reload(), DEFAULT_TIMEOUT_MS);
  };

  const toggleBanner = (forceState?: boolean) => {
    setShowBanner((previousState) =>
      typeof forceState !== 'undefined' ? forceState : !previousState,
    );
  };

  const toggleCustomizeDialog = (forceState?: boolean) => {
    window?.scroll(0, 0);
    setShowCustomizeDialog((previousState) =>
      typeof forceState !== 'undefined' ? forceState : !previousState,
    );
    if (typeof forceState !== 'undefined' && forceState) {
      toggleBanner(false);
    }
  };

  return (
    <CookieConsentContext.Provider
      value={{
        allowAll,
        denyAll,
        getServiceById,
        save,
        services,
        toggleBanner,
        toggleCustomizeDialog,
      }}
    >
      {children}
      {showBanner && <Banner />}
      {showCustomizeDialog && <CustomizeDialog />}
    </CookieConsentContext.Provider>
  );
}

export default CookieConsentContext;
