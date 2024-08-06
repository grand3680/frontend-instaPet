export interface postT {
  title: string;
  text: string;
  date: string;
  author: string;
  tags: string[];
  postId: string;
  [property: string]: any;
}

export interface profileT {
  username: string;
  img: string;
  postId: string[];
}
