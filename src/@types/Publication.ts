import { ProfileType } from "./Profile";

export interface PublicationType {
    html_url:string;
    login:string;
    body:string;
    title:string
    user: ProfileType
    comments: string
    created_at:string
  }
  