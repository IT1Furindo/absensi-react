interface DetailEmployeeInterface {
    id: string;
    full_name: string;
    nick_name: string;
    nip: string;
    date_of_birth: Date;
    place_of_birth: string;
    gender: string;
    no_ktp: string;
    PlaceOfBirth: IPlaceOfBirth | null;
    personal_email: string;
    office_email: string;
    is_super_admin: boolean;
    user_id: string;
    status: string;
    created_at: Date;
    updated_at: Date;
}

interface IPlaceOfBirth {
    id: string;
    name: string;
}

interface GetAllEmployeeForFormSelectResponse {
    id: string;
    full_name: string;
    nick_name: string;
    nip: string;
    date_of_birth: Date;
    place_of_birth: PlaceOfBirth;
    gender: Gender;
    no_ktp: string;
    personal_email: PersonalEmail;
    office_email: OfficeEmail;
    is_super_admin: boolean;
    user_id: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    User: User;
}

interface User {
    id: string;
    username: string;
    password: string;
    status: string;
    deleted_at: null;
    created_at: Date;
    updated_at: Date;
    UserPositions: UserPosition[];
}

interface UserPosition {
    id: string;
    user_id: string;
    position_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    Position: Position;
}

interface Position {
    id: string;
    name: string;
    code: string;
    superior_id?: string;
    department_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    Department: Department;
}

interface Department {
    id: string;
    code: string;
    name: string;
    department_type_id?: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    DepartmentType?: Department;
    description?: Description;
}
