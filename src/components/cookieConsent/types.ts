import { ServiceId, ServiceStatus } from '.';

export type CookieConsent = {
  id: ServiceId;
  status: ServiceStatus;
};

export type CookieConsentStatuses = Record<ServiceId, ServiceStatus>;

export interface Service extends CookieConsent {
  category?: string;
  cookies?: string[];
  description: string;
  forceReloadWhenAllowed?: boolean;
  forceReloadWhenDenied?: boolean;
  name: string;
  shortDescription?: string;
  uri?: string;
}
