export interface CategoryType{
    id: number;
    data:{
        attributes:{
            title: string;
        }
    }
}

export interface PostType{
    id: number;
    attributes: {
        title: string;
        desc: string;
        category: CategoryType;
    }
}