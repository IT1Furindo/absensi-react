interface GetAllActivityLogResponse {
    status: string;
    totalItems: number;
    totalPage: number;
    currentPage: number;
    data: GetAllActivityLogForSelect[];
}

interface GetAllActivityLogForSelect {
    id: string;
    user_id: null | string;
    ip: string | null;
    method: string;
    body: any;
    params: any;
    response: any;
    device_info: any;
    path: string;
    user_agent: string;
    data: any;
    type: string;
    created_at: Date;
    updated_at: Date;
    User: UserInfo | null;
}

interface UserInfo {
    username: string;
}

interface Body {
    name?: string;
    description?: string;
    rt?: string;
    rw?: string;
    address?: string;
    website?: string;
    regency_id?: string;
    village_id?: string;
    district_id?: string;
    province_id?: string;
    phone_numbers?: string[];
    contact_persons?: ContactPerson[];
    supplier_category_id?: string;
    type_of_business_entity_id?: string;
}

interface ContactPerson {
    name: string;
    email: string;
    phone: string;
    position: string;
}

interface DeviceInfo {
    os: OS;
    client: Client;
    device: Device;
}

interface Client {
    name: string;
    type: string;
    engine: string;
    family: string;
    version: string;
    short_name: string;
    engine_version: string;
}

interface Device {
    id: string;
    type: string;
    brand: string;
    model: string;
}

interface OS {
    name: string;
    family: string;
    version: string;
    platform: string;
    short_name: string;
}

interface Params {}

interface Response {
    code: number;
    message: string;
}
