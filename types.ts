export interface IPost {
    id: string
    title: string
    body: string
}

export type TById = {
    [P in IPost['id']]: IPost
}

export type TAllIds = IPost['id'][]

interface IResultNormalizeData {
    byId: TById;
    allIds: TAllIds
}

export type TNormalizeData = (unnormalizedData: IPost[]) => IResultNormalizeData