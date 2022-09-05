import { CREATE_NODE_PARENT_SEARCH_PARAM, Links } from 'settings';

export function getCreateNodeLink(name?: string): string {
  if (name) {
    return `${Links.compose.node}?${new URLSearchParams({
      [CREATE_NODE_PARENT_SEARCH_PARAM]: name,
    }).toString()}`;
  }

  return Links.compose.node;
}
