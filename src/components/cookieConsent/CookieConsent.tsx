import { PropsWithChildren, useContext } from 'react';
import Script, { ScriptProps } from 'next/script';
import CookiesConsentContext, { CookieConsentContextProps } from './CookieConsentContext';

type CookieConsentProps = PropsWithChildren<
  ScriptProps & {
    serviceId: string;
  }
>;

export function CookieConsent({ children, serviceId, ...props }: CookieConsentProps) {
  const { getServiceById } = useContext(CookiesConsentContext) as CookieConsentContextProps;
  const service = getServiceById(serviceId);

  if (service?.status === 'allowed') {
    return (
      <>
        {service.uri && <Script {...props} src={service.uri} id={serviceId} />}
        {children}
      </>
    );
  }

  return null;
}
