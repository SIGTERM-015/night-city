// SPDX-License-Identifier: AGPL-3.0-or-later

export const APP_PROTOCOL = 'fluxer';
export const STABLE_APP_URL = 'https://web.fluxer.app';
// PARCHE DEL FORK (night-city): instancia self-hosted por defecto, para que
// quien instale no tenga que editar settings.json. De esta constante derivan
// tambien trustedWebOrigins (Window.ts) y ALLOWED_ORIGINS (RpcServer.ts).
export const CANARY_APP_URL = 'https://chat.sigterm.vodka';
export const DEFAULT_WINDOW_WIDTH = 1280;
export const DEFAULT_WINDOW_HEIGHT = 800;
export const MIN_WINDOW_WIDTH = 800;
export const MIN_WINDOW_HEIGHT = 600;
