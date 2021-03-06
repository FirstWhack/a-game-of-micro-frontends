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
    await __webpack_init_sharing__('default');
    if (!(window as any)[scope]) {
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
    }
    if (!module.startsWith('./')) {
      module = `./${module}`;
    }

    const container = (window as any)[scope] as Container;
    await container.init(__webpack_share_scopes__.default);
    const factory = await container.get(module);

    return factory();
  } catch (error) {
    console.error('something went wrong with a federated module', error);
  }
}

const ghPagesUrls: {
  [scope: string]: string;
} = {
  fruit: require('@micro-snake/plugin-fruit/package.json').homepage,
  wildcard: require('@micro-snake/plugin-wildcard/package.json').homepage
};

export function getRemoteEntryUrl(port: number, scope: string) {
  const HOSTNAME = window.location.hostname;

  if (HOSTNAME.includes('github.io')) {
    // check for gh-pages
    return ghPagesUrls[scope];
  } else if (HOSTNAME.includes('sandbox')) {
    // Check if the example is running on codesandbox
    // https://codesandbox.io/docs/environment
    return `//${HOSTNAME.split('.')[0]}-${port}.sse.codesandbox.io`;
  }

  return `//localhost:${port}`;
}
