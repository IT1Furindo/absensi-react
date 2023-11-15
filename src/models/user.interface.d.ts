interface FetchAllUsersResponse {
    status: string;
    totalData: number;
    totalPage: number;
    pageNow: number;
    data: Users[];
}

interface Users {
    id: string;
    username: string;
    status: string;
    Employee: Employee;
    Positions: Position[];
}

interface Employee {
    id: string;
    full_name: string;
    nick_name: string;
    nip: string;
    date_of_birth: Date;
    place_of_birth: string;
    gender: string;
    no_ktp: string;
    personal_email: string;
    office_email: string;
    is_super_admin: boolean;
    status: string;
    PhoneNumbers: PhoneNumber[];
}

interface PhoneNumber {
    id: string;
    phone_number: string;
}

interface Position {
    id: string;
    name: string;
    permissions: Permission[];
    UserPosition: UserPositionClass;
}

interface UserPositionClass {
    id: string;
    user_id?: string;
    position_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    permission_id?: string;
}

interface Permission {
    id: string;
    name: string;
    PermissionPosition: UserPositionClass;
}
