import AxiosInstance from './AxiosInstance';
import { 
    Post, 
    Comments,
    CreatePost,
    BlogPost,
    CreateComment
} from '../Types';

const POSTS = "/posts";
export const getAllPosts = async (): Promise<Post[]> => AxiosInstance.get(`${POSTS}`).then((response) => response.data.posts);
export const getPost = async (id: number): Promise<BlogPost> => AxiosInstance.get(`${POSTS}/${id}`).then((response) => response.data);
export const getAllComments = async (id: number): Promise<Comments[]> => AxiosInstance.get(`${POSTS}/${id}/comments`).then((response) => response.data.comments);
export const createPost = async (post: CreatePost): Promise<void> => AxiosInstance.post(`${POSTS}`, post);
export const clapPost = async (id: number): Promise<void> => AxiosInstance.post(`${POSTS}/${id}/clap`);
export const createComment = async (postId: number, comment: CreateComment): Promise<void> => AxiosInstance.post(`${POSTS}/${postId}/comments`, comment);
export const clapComment = async (postId: number, id: number): Promise<void> => AxiosInstance.post(`${POSTS}/${postId}/comments/${id}/clap`);
export const deletePost = async (id: number) => AxiosInstance.delete(`${POSTS}/${id}`);
export const deleteComment = async (postId: number, id: number) => AxiosInstance.delete(`${POSTS}/${postId}/comments/${id}`);
