// these are webpack types but couldn't find them exposed
type Factory = () => any;
interface Container {
  init(shareScope: any): void;
  get(module: string): Factory;
}

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: any };

export async function dynamicImport(
  fqdn: string,
  scope: string,
  module: string,
  filename = 'remoteEntry.js'
) {
  try {
    if (!module.startsWith('./')) {
      module = `./${module}`;
    }
    await __webpack_init_sharing__('default');

    await new Promise<void>((resolve, reject) => {
      const element = document.createElement('script');

      element.src = `${fqdn}/${filename}`;
      element.type = 'text/javascript';
      element.async = true;

      element.onload = () => {
        element.parentElement?.removeChild(element);
        resolve();
      };

      element.onerror = (err) => {
        element.parentElement?.removeChild(element);
        reject(err);
      };

      document.head.appendChild(element);
    });

    const container = (window as any)[scope] as Container;
    await container.init(__webpack_share_scopes__.default);
    const factory = await container.get(module);

    return factory();
  } catch (error) {
    console.error('something went wrong with a federated module', error);
  }
}

export function getRemoteEntryUrl(port: number) {
  const HOSTNAME = window.location.hostname;

  // Check if the example is running on codesandbox
  // https://codesandbox.io/docs/environment
  if (!HOSTNAME.includes('sandbox')) {
    return `//localhost:${port}`;
  }

  const parts = HOSTNAME.split('-');
  const codesandboxId = parts[parts.length - 1];

  return `//${codesandboxId}-${port}.sse.codesandbox.io`;
}
