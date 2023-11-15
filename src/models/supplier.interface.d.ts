interface formAddSupplier {
    name: string;
    description: string;
    type_of_business_entity_id: string;
    supplier_category_id: string;
    website: string;
    rt: string;
    rw: string;
    address: string;
    province_id: string;
    regency_id: string;
    district_id: string;
    village_id: string;
    phone_numbers: string[];
    contact_persons: contactPersonValue[];
}

interface formEditSupplier {
    id: string;
    name: string;
    description: string;
    type_of_business_entity_id: string;
    supplier_category_id: string;
    website: string;
    rt: string;
    rw: string;
    address: string;
    has_invoice: boolean;
    province_id: string;
    regency_id: string;
    district_id: string;
    village_id: string;
    phone_numbers: string[];
    contact_persons: contactPersonValue[];
}

interface contactPersonValue {
    name: string;
    position: string;
    phone: string;
    email: string;
}

interface CreateSupplierResponse {
    status: string;
    message: string;
    data: DataCreateSupplierResponse;
}

interface DataCreateSupplierResponse {
    id: string;
    name: string;
    description: string;
    active_status: null;
    website: null;
    type_of_business_entity_id: string;
    supplier_category_id: string;
    updated_at: Date;
    created_at: Date;
}

interface GetAllSupplierResponse {
    status: string;
    totalItems: number;
    totalPage: number;
    currentPage: number;
    data: DetailDataSupplier[];
}

interface DetailDataSupplier {
    id: string;
    name: string;
    description: string;
    active_status: boolean | null;
    website: null | string;
    has_invoice: null | boolean;
    type_of_business_entity_id: string;
    supplier_category_id: string;
    created_at: Date;
    updated_at: Date;
    SupplierCategory: SupplierCategory;
    TypeOfBusinessEntity: SupplierCategory;
    SupplierAddresses: SupplierAddress[];
}

interface SupplierAddress {
    id: string;
    name: string;
    address: string;
    rt: string;
    rw: string;
    village_id: string;
    supplier_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    SupplierPersonalContacts: SupplierPersonalContact[];
    SupplierOfficeContacts: SupplierOfficeContact[];
    Village: Village;
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

interface SupplierCategory {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    code: string;
}

interface Village {
    id: string;
    district_id: string;
    name: string;
    District: District;
}

interface District {
    id: string;
    regency_id: string;
    name: string;
    Regency: Regency;
}

interface Regency {
    id: string;
    regency_id: string;
    province_id: string;
    name: string;
    Province: Province;
}

interface Province {
    id: string;
    name: string;
}

interface GetAllSupplierForFormSelect {
    id: string;
    name: string;
    description: string;
    active_status: boolean | null;
    website: null | string;
    has_invoice: null | boolean;
    type_of_business_entity_id: string;
    supplier_category_id: string;
    created_at: Date;
    updated_at: Date;
}

interface GetSupplierByIdResponse {
    id: string;
    name: string;
    description: string;
    active_status: boolean;
    has_invoice: boolean;
    website: string;
    type_of_business_entity_id: string;
    supplier_category_id: string;
    created_at: Date;
    updated_at: Date;
    SupplierCategory: SupplierCategory;
    TypeOfBusinessEntity: SupplierCategory;
    SupplierAddresses: SupplierAddress[];
}

interface FormEditSupplier {
    id: string;
    name: string;
    description: string;
    status_active: boolean;
    type_of_business_entity_id: string;
    supplier_category_id: string;
}

interface EditSupplierResponse {
    status: string;
    message: string;
}
