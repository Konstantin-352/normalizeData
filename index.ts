import {posts} from './posts';
import {TById, IPost, TNormalizeData, TAllIds} from './types';

const normalizeData: TNormalizeData = (posts: IPost[]) => {
    const allIds: TAllIds = [];
    const byId: TById = {};

    posts.forEach(item => {
        allIds.push(item.id);
        byId[item.id] = {...item};
    });

    return {
        byId,
        allIds
    }
}

console.log(normalizeData(posts));