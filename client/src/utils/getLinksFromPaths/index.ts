type NestedPaths = {
  index: string;
  [key: string]: NestedPaths | string;
};

export type MapNestedPaths<Type extends NestedPaths> = {
  [Property in keyof Type]: Type[Property] extends NestedPaths
    ? MapNestedPaths<Type[Property]>
    : Type[Property];
};

export function getLinksFromPaths<T extends NestedPaths = NestedPaths>(
  paths: T,
  prefix = '',
): MapNestedPaths<T> {
  let result = {};

  for (const [key, value] of Object.entries(paths)) {
    let newPrefix = prefix;

    if (paths['index'] === '/') {
      newPrefix = '';
    } else if (key !== 'index') {
      newPrefix = prefix + '/' + paths['index'];
    }

    const newValue = value === '/' ? value : newPrefix + '/' + value;
    if (typeof value === 'object') {
      result = { ...result, [key]: getLinksFromPaths(value, newPrefix) };
    }
    if (typeof value === 'string') {
      result = { ...result, [key]: newValue };
    }
  }

  return result as MapNestedPaths<T>;
}
