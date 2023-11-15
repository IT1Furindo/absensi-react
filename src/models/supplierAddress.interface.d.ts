interface GetAllSupplierAddressForSelect {
    id: string;
    name: string;
    address: string;
    rt: string;
    rw: string;
    village_id: string;
    district_id: string;
    regency_id: string;
    province_id: string;
    supplier_id: string;
    created_at: Date;
    updated_at: Date;
}

interface GetSupplierAddressByIdResponse {
    id: string;
    name: string;
    address: string;
    rt: string;
    rw: string;
    village_id: string;
    district_id: string;
    regency_id: string;
    province_id: string;
    supplier_id: string;
    created_at: Date;
    updated_at: Date;
    SupplierPersonalContacts: SupplierPersonalContact[];
    SupplierOfficeContacts: SupplierOfficeContact[];
    regency: any;
    district: any;
    village: any;
}

interface SupplierOfficeContact {
    id: string;
    phone_number: string;
    supplier_address_id: string;
    created_at: Date;
    updated_at: Date;
}

interface SupplierPersonalContact {
    id: string;
    name: string;
    position: string;
    phone: string;
    email: string;
    supplier_address_id: string;
    created_at: Date;
    updated_at: Date;
}

interface FormEditSupplierAddress {
    id: string;
    name: string;
    address: string;
    rt: string;
    rw: string;
    province_id: string;
    village_id: string;
    district_id: string;
    regency_id: string;
}
