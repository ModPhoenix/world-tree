import { CREATE_NODE_PARENT_SEARCH_PARAM, Links } from 'settings';

export function getCreateNodeLink(id?: string): string {
  if (id) {
    return `${Links.compose.node}?${new URLSearchParams({
      [CREATE_NODE_PARENT_SEARCH_PARAM]: id,
    }).toString()}`;
  }

  return Links.compose.node;
}
