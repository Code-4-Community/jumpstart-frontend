export interface Post {
  readonly title: string;
  readonly author: string;
  readonly preview: string;
  readonly commentCount: number;
  readonly clapCount: number;
  readonly id: number;
  readonly dateCreated: string;
}

export interface Comments {
  readonly author: string;
  readonly dateCreated: string;
  readonly clapCount: number;
  readonly body: string;
  readonly id: number;
  readonly postId: number;
}

export interface CreatePost {
  title: string;
  author: string;
  body: string;
}

export interface CreateComment {
  author: string;
  body: string;
}

// interface that defines the type of a BlogPost
export interface BlogPost {
  title: string;
  author: string;
  body: string;
  clapCount: number;
  dateCreated: string;
  id: number;
}
