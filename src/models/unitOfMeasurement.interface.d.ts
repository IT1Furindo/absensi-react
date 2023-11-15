interface GetAllUomInterface {
    status: string;
    totalItems: number;
    totalPage: number;
    currentPage: number;
    data: GetAllUOMForFormSelectResponse[];
}

interface GetAllUOMForFormSelectResponse {
    id: string;
    name: string;
    code: string;
    description: null;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
}

interface FormCreateUOM {
    name: string;
    code: string;
    description: string;
}

interface FormEditUOM {
    id: string;
    name: string;
    code: string;
    description: string;
}

interface CreateUOMResponseInterface {
    status: string;
    message: string;
}
