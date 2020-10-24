interface Comments {
  readonly user: string;
  readonly date: string;
  readonly claps: number;
  readonly content: string;
}

const comments: ReadonlyArray<Comments> = [
  {
    user: 'joe',
    date: 'Wed Aug 19 2020 20:14:06',
    claps: 4,
    content: 'Test',
  },

  {
    user: 'roy',
    date: 'Wed Aug 19 2020 20:14:06',
    claps: 25,
    content: 'hey',
  },

  {
    user: 'jim',
    date: 'Wed Aug 19 2020 20:14:06',
    claps: 94,
    content: 't',
  },
];

export default comments;
