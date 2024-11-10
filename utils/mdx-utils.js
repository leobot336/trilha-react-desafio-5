import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    try {
    const { data } = await api.from('posts').select('*').eq('id', id).single();

    return data || {};
  } catch (error) {
    console.error('Erro ao buscar post:', error);

    return {}
}
