const fs = require('fs');

const db = () => {
  const API = 'http://source.unsplash.com/random';
  const data = { photos: [] };
  data.users = [
    { name: 'admin' },
    { name: 'tega' },
    { name: 'hilton' },
    { name: 'john' },
    { name: 'cardi B' }
  ];

  for (let i = 1; i <= 100; i++) {
    const userIndex = Math.floor(Math.random() * data.users.length);
    const user = data.users[userIndex];
    data.photos.push({ id: i, url: `${API}/${i}`, user });
  }
  return data;
};

fs.writeFileSync('db.json', JSON.stringify(db(), null, 2));
