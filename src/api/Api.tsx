export default async function Api() {
  const url =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQE--MqUSBJmleSETWCOVQ0ygA_GHnGKjZrHjKZ1YyPSwjH0uDm3Pogdw2CHv_06LhmZyKudEDkzObV/pub?gid=0&single=true&output=csv';

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.text();

  const rows = data
    .split('\n')
    .slice(1)
    .map((row) => {
      const cells = row.split(',');
      return {
        name: cells[0],
        email: cells[1],
        phone: cells[2],
        address: cells[3],
        city: cells[4],
        state: cells[5],
        zip: cells[6],
      };
    });
}
