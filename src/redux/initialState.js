const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'Movies'
    },
    {
      id: '2',
      title: 'Article title 1',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-03-2022'),
      author: 'John Doe',
      category: 'News'
    },
    {
      id: '3',
      title: 'Article title 2',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-04-2022'),
      author: 'John Doe',
      category: 'Sport'
    },
  ],

  categories: [
    'Sport',
    'News',
    'Movies'
  ]
}

export default initialState;