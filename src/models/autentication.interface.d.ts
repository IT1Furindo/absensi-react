interface AuthFormValues {
    username: string;
    password: string;
}

interface LoginResponse {
    status: string;
    message: string;
    access_token: string;
    userLogin: UserLogin;
}

interface UserLogin {
    status: string;
    token: string;
    user: User;
}

interface User {
    id: string;
    username: string;
    password: string;
    status: string;
    deleted_at: null;
    created_at: Date;
    updated_at: Date;
    Positions: Position[];
    Employee: Employee;
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
    user_id: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
}

interface Position {
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
    name: string;
    PermissionPosition: UserPositionClass;
}
