interface GetAllFinanceReferenceResponse {
    status: string;
    totalItems: number;
    totalPage: number;
    currentPage: number;
    data: DetailFinanceReferenceResponse[];
}

interface DetailFinanceReferenceResponse {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    FinanceReferenceValues: FinanceReferenceValue[];
}

interface FinanceReferenceValue {
    id: string;
    value: number;
    description: string;
    finance_reference_name_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
}
