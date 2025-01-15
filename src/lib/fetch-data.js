import fetchJson from "$lib/fetch-json";
export default async function getData(datum) {

  const API = 'https://fdnd-agency.directus.app/items/';
  const day = `${API}mh_day`;

  const filter = `?filter[date]=${datum}&sort=shows.mh_shows_id.from&fields=shows.mh_shows_id.show.name,shows.id,shows.mh_shows_id.show.id,shows.mh_shows_id.show.radiostation.name,shows.mh_shows_id.show.radiostation.id,shows.mh_shows_id.show.radiostation.logo.id,shows.mh_shows_id.show.users.id,shows.mh_shows_id.show.users.mh_users_id.full_name,shows.mh_shows_id.show.users.mh_users_id.cover,shows.mh_shows_id.from,shows.mh_shows_id.until,shows.mh_shows_id.show.body,shows.mh_shows_id.show.thumbnail.id,shows.mh_shows_id.show.headermobile.id,shows.mh_shows_id.show.headerdesktop.id`;

  const data = await fetchJson(day + filter);

  return data;
}
