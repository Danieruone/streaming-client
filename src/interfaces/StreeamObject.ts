interface User {
  name: string;
  image: string;
  username: string;
}

export interface StreamObject {
  id: string;
  thumbnail: string;
  title: string;
  url: string;
  user: User;
}
