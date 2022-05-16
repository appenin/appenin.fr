import { NOVOCALL_ID } from '@/libs/novocall';
import type { Service } from './types';

export enum ServiceId {
  novocall = 'novocall',
}

export enum ServiceStatus {
  allowed = 'allowed',
  denied = 'denied',
  pending = 'pending',
}

export const SERVICES: Service[] = [
  {
    category: 'Fonctionnalité(s)',
    cookies: ['__novo_utm'],
    description:
      "Widget d'appel en un clic pour automatiser les appels instantanés et les rappels programmés sur notre site Web.",
    forceReloadWhenDenied: true,
    id: ServiceId.novocall,
    name: 'Novocall',
    shortDescription: "charger un widget d'appel en un clic",
    status: ServiceStatus.pending,
    uri: `${process.env.novocall}${NOVOCALL_ID}`,
  },
];
