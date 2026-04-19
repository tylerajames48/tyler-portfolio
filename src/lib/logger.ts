const isDev = process.env.NODE_ENV === 'development';

export function log(component: string, action: string, data?: unknown) {
  if (isDev) {
    console.log(`[Portfolio][${component}] ${action}`, data ?? '');
  }
}
