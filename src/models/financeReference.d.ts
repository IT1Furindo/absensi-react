interface GetLatestFinanceReferenceValueResponse {
    id: string;
    value: number;
    description: string;
    finance_reference_name_id: string;
    created_at: Date;
    updated_at: Date;
    FinanceReferenceName: FinanceReferenceName;
}

interface FinanceReferenceName {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}

interface FormEditFinanceReference {
    id: string;
    name: string;
    description: string;
    value: any;
    valueDescription: string;
}

interface FormAddFinanceReference {
    name: string;
    description: string;
    value: any;
    valueDescription: string;
}

interface GetInactiveFinanceReferenceValueResponse {
    status: string;
    totalItems: number;
    totalPage: number;
    currentPage: number;
    data: FinanceReferenceValueInactive[];
}

interface FinanceReferenceValueInactive {
    id: string;
    value: number;
    description: string;
    finance_reference_name_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    FinanceReferenceName: FinanceReferenceNameInactive | null;
}

interface FinanceReferenceNameInactive {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
}
