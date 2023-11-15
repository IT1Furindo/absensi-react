interface GetUserByIdResponse {
    status: string;
    data: Data;
}

interface Data {
    id: string;
    username: string;
    status: string;
    Employee: DetailEmployeeInterface;
    Positions: Position[];
}

interface PhoneNumber {
    id: string;
    phone_number: string;
}

interface Position {
    id: string;
    name: string;
    permissions: Permission[];
}

interface Permission {
    id: string;
    name: string;
}
