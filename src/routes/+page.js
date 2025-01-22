/** @satisfies {import('./$types').Actions} */
import getData from "$lib/fetch-data";

export async function load({ params, url }) {
  const currentDay = new Date().toISOString().split('T')[0];
  const clickedDay = url.searchParams.get('datum');
  console.log(clickedDay + " | " + currentDay)
  const data = await getData(clickedDay || currentDay);

  return {
    clickedDay,
    data: data.data
  };
}
