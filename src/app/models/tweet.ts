import { User } from "./User";

export interface Tweet {
  fname: string;
    username: string;
    id:number;
    user_id: number;
    description: string;
    tag: string;
    likes: number;
    retweets:number;
    img:string;


}

//'user_id', 'description', 'tag', 'likes', 'retweets', 
//'img'
