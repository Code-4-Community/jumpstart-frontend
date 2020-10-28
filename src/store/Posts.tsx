interface Posts {
  readonly title: string;
  readonly author: string;
  readonly postPreview: string;
  readonly comments: number;
  readonly claps: number;
  readonly id: number;
}

const posts: ReadonlyArray<Posts> = [
  {
    title: 'My First Post',
    author: 'John Doe',
    postPreview:
      'test test test tes test test test test este stes test setest stets',
    comments: 7,
    claps: 192,
    id: 1,
  },

  {
    title: 'My First Post',
    author: 'John Doe',
    postPreview:
      'test test test tes test test test test este stes test setest stets',
    comments: 7,
    claps: 192,
    id: 2,
  },

  {
    title: 'My First Post',
    author: 'John Doe',
    postPreview:
      'test test test tes test test test test este stes test setest stets',
    comments: 7,
    claps: 192,
    id: 3,
  },
];

export default posts;
