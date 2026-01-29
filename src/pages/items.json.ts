import items from '../data/items.json';

const ITEMS_JSON = JSON.stringify(items);

export async function GET({}) {
  return new Response(ITEMS_JSON);
}