interface GetAllPermissionResponseInterface {
    status: string;
    totalItems: number;
    totalPage: number;
    currentPage: number;
    data: DataPermissionInterface[];
}

interface DataPermissionInterface {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
}

interface FormCreatePermission {
    name: string;
    description: string;
}

interface FormEditPermission {
    id: string;
    name: string;
    description: string;
}

interface CreatePermissionResponseInterface {
    status: string;
    message: string;
    data: DetailPermission;
}

interface DetailPermission {
    id: string;
    name: string;
    description: string;
    updated_at: Date;
    created_at: Date;
    deleted_at: null;
}

interface getAllPermissionForSelect {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
}
