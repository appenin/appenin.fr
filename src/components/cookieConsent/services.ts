import { GA_MEASUREMENT_ID } from '@/libs/google';
import { NOVOCALL_ID } from '@/libs/novocall';
import type { Service } from './types';

export enum ServiceId {
  ga = 'ga',
  novocall = 'novocall',
}

export enum ServiceStatus {
  allowed = 'allowed',
  denied = 'denied',
  pending = 'pending',
}

export const SERVICES: Service[] = [
  {
    category: "Mesure d'audience",
    cookies: [
      '_ga',
      '_gat',
      `_gat_gtag_${GA_MEASUREMENT_ID?.replace(/-/g, '_')}`,
      '_gid',
      '__utma',
      '__utmb',
      '__utmc',
      '__utmt',
      '__utmz',
    ],
    description:
      "Service de mesure d'audience qui permet de générer des statistiques de fréquentation utiles à l'amélioration de notre site Web.",
    forceReloadWhenAllowed: true,
    forceReloadWhenDenied: true,
    id: ServiceId.ga,
    name: 'Google Analytics',
    shortDescription: "mesurer l'audience du site",
    status: ServiceStatus.pending,
    uri: `${process.env.analytics}${GA_MEASUREMENT_ID}`,
  },
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
