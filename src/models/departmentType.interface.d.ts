interface GetAllDepartmentTypesResponseInterface {
    status: string;
    totalItems: number;
    totalPage: number;
    currentPage: number;
    data: DepartmentTypeDetail[];
}

interface DepartmentTypeDetail {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}

interface FormCreateDepartmentType {
    name: string;
    description: string;
}

interface CreateDepartmentTypeResponseInterface {
    status: string;
    message: string;
    data: DataResponse;
}

interface DataResponse {
    id: string;
    name: string;
    description: string;
    updated_at: Date;
    created_at: Date;
    deleted_at: null;
}

interface DeleteDepartmentTypeResponseInterface {
    message: string;
}

interface GetDetailDepartmentTypeResponse {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
}

interface FormEditDepartmentType {
    id: string;
    name: string;
    description: string;
}

interface GetAllDepartmentTypeForSelectResponse {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    Departments: Department[];
}

interface Department {
    id: string;
    name: string;
    department_type_id: string;
    created_at: Date;
    updated_at: Date;
}
