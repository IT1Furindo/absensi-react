interface ResponseGetAllDepartment {
    status: string;
    totalItems: number;
    totalPage: number;
    currentPage: number;
    data: ArrayDepartmentInterface[];
}

interface ArrayDepartmentInterface {
    id: string;
    name: string;
    DepartmentType: DepartmentTypeInterfcae;
}

interface DepartmentTypeInterfcae {
    id: string;
    name: string;
    description: string;
}

interface GetDetailDepartmentInterface {
    id: string;
    name: string;
    department_type_id: string;
    created_at: Date;
    updated_at: Date;
    DepartmentType: DepartmentTypeInterfcae;
}

interface DeleteDepartmentResponseInterface {
    message: string;
}

interface FormCreateDepartment {
    name: string;
    department_type_id: string;
}

interface CreateNewDepartmentResponseInterface {
    status: string;
    message: string;
    data: DepartmentResponseInterface;
}

interface DepartmentResponseInterface {
    id: string;
    name: string;
    department_type_id: string;
    updated_at: Date;
    created_at: Date;
}

interface UpdateDepartmentResponseInterface {
    message: string;
}

interface FormUpdateDepartment {
    id: string;
    name: string;
    department_type_id: string;
}
interface GetAllDepartmentForSelectResponse {
    id: string;
    name: string;
    department_type_id: string;
    created_at: Date;
    updated_at: Date;
}

interface GetAllDepartmentWhitoutPaginationResponse {
    id: string;
    code: null | string;
    name: string;
    department_type_id: string;
    created_at: Date;
    updated_at: Date;
    DepartmentType: GetAllDepartmentTypeWhitoutPaginationResponse;
}

interface GetAllDepartmentTypeWhitoutPaginationResponse {
    id: string;
    code: string | null;
    name: string;
    description: string;
    department_type_id: string;
    created_at: Date;
    updated_at: Date;
}
