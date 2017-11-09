var movies = [{
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o małym czarodzieju',
    img: 'http://1.fwcdn.pl/po/05/71/30571/7529392.2.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Historia króla sawanny',
    img: 'http://1.fwcdn.pl/po/68/78/6878/6927221.2.jpg'
  },
  {
    id: 3,
    title: 'Oblivion',
    desc: 'Postapokaliptyczna wizja świata',
    img: 'http://1.fwcdn.pl/po/57/56/535756/7539332.2.jpg'
  },
  {
    id: 4,
    title: 'Prestige',
    desc: 'Rywalizacja dwóch wielkich iluzjonistów',
    img: 'http://1.fwcdn.pl/po/99/45/259945/7171824.2.jpg'
  },
  {
    id: 5,
    title: 'Perfume',
    desc: 'Thriller w oświeceniowej Francji',
    img: 'http://1.fwcdn.pl/po/84/42/118442/7096308.2.jpg'
  },
  {
    id: 6,
    title: 'Das Boot',
    desc: 'Wojenne losy niemieckiego okrętu U-96',
    img: 'http://1.fwcdn.pl/po/12/89/1289/7075142.2.jpg'
  }
];

var moviesElement = movies.map(function(item) {
  return React.createElement('li', {
      key: item.id
    },
    React.createElement('h2', {}, item.title),
    React.createElement('p', {}, item.desc),
    React.createElement('img', {
      src: item.img
    })
  );
});

var element = React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement('ul', {}, moviesElement)
);

ReactDOM.render(element, document.getElementById('app'));