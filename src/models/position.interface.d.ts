interface ResponseGetDetailPositionInterface {
    id: string;
    name: string;
    Department: DepartmentInterface;
    superior: SuperiorInterface;
}

interface DepartmentInterface {
    id: string;
    name: string;
    DepartmentType: DepartmentTypeInterface;
}

interface DepartmentTypeInterface {
    id: string;
    name: string;
    description: string;
}

interface SuperiorInterface {
    id: string;
    name: string;
}

interface ResponseGetAllPositionInterface {
    status: string;
    data: DetailPosition[];
    total: number;
}

interface DetailPosition {
    id: string;
    name: string;
    Department: DetailDepartment;
    superior: Superior | null;
}

interface DetailDepartment {
    id: string;
    name: string;
    DepartmentType: DepartmentType;
}

interface DepartmentType {
    id: string;
    name: string;
    description: string;
}

interface Superior {
    name: string;
}

interface GetAllPositionResponseInterface {
    status: string;
    totalItems: number;
    totalPage: number;
    pageNow: number;
    data: DataPositionInterface[];
}

interface DataPositionInterface {
    id: string;
    name: string;
    superior_id: null | string;
    department_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    Department: DepartmentInterface;
    superior: SuperiorInterface | null;
}

interface DepartmentInterface {
    id: string;
    name: string;
    DepartmentType: DepartmentTypeInterface;
}

interface DepartmentTypeInterface {
    id: string;
    name: string;
    description: string;
}

interface SuperiorInterface {
    name: string;
}

interface GetAllPositionForSelectResponse {
    id: string;
    name: string;
    superior_id: null | string;
    department_id: string;
    created_at: Date;
    updated_at: Date;
    Department: DepartmentInPosition;
}

interface DepartmentInPosition {
    id: string;
    name: string;
    department_type_id: string;
    created_at: Date;
    updated_at: Date;
    DepartmentType: DepartmentTypeInPosition;
}

interface DepartmentTypeInPosition {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}

interface FormCreatePosition {
    name: string;
    superior_id: string;
    department_id: string;
    department_type_id: string;
}

interface CreatePositionResponseInterface {
    status: string;
    message: string;
    data: DetailPosition;
}

interface DetailPosition {
    id: string;
    name: string;
    description: string;
    updated_at: Date;
    created_at: Date;
    deleted_at: null;
}

interface GetDetailPositionResponseInterface {
    id: string;
    name: string;
    superior_id: string;
    department_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    Department: DepartmentInterface;
    superior: SuperiorInterface;
}

interface DepartmentInterface {
    id: string;
    name: string;
    DepartmentType: DepartmentTypeInterface;
}

interface DepartmentTypeInterface {
    id: string;
    name: string;
    description: string;
}

interface SuperiorInterface {
    id: string;
    name: string;
}

interface FormEditPosition {
    id: string;
    name: string;
    superior_id: string;
    department_id: string;
    department_type_id: string;
}

interface PositionQuery {
    page: string;
    size: string;
    keyword: string;
    sort_by: string;
    sort_order: string;
    position_id: string;
    department_id: string;
    department_type_id: string;
}

interface GetAllPositionWhitOutPaginationInterface {
    id: string;
    name: string;
    code: string;
    superior_id: null | string;
    department_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    Department: DepartmentInterfaceInPosition;
    superior: SuperiorIterfaceInPositionAll | null;
    permissions: any;
}

interface SuperiorIterfaceInPositionAll {
    id: string;
    name: string;
    code: string;
    superior_id: null | string;
    department_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
}

interface DepartmentInterfaceInPosition {
    id: string;
    code: null | string;
    name: string;
    department_type_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    DepartmentType: DepartmentTypeResponseInPosition;
}

interface DepartmentTypeResponseInPosition {
    id: string;
    code: null | string;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    description?: string | null;
}
