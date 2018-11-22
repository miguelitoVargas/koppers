
export const SEARCH_ACTION = 'SEARCH_ACTION'

export function searchAction(term) {

  return {
    type: SEARCH_ACTION,
    data: term
  }
}
