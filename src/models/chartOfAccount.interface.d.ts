interface GetAllCoaForSelectResponse {
    id: string;
    name: string;
    code: string;
    debit_code: string;
    debit_code_index: string;
    debit_code_month: string;
    debit_code_year: string;
    credit_code: string;
    credit_code_index: string;
    credit_code_month: string;
    credit_code_year: string;
    chart_of_account_sub_type_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    ChartOfAccountSubType: DetailChartOfAccountResponse;
}

interface DetailChartOfAccountResponse {
    id: string;
    name: string;
    code: string;
    chart_of_account_type_id?: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    ChartOfAccountType?: DetailChartOfAccountResponse;
    chart_of_account_classification_id?: string;
    ChartOfAccountClassification?: DetailChartOfAccountResponse;
    description?: null;
}

interface GetAllCOAResponse {
    status: string;
    totalItems: number;
    totalPage: number;
    currentPage: number;
    data: GetAllCOAWhitoutPagination[];
}

interface GetAllCOAWhitoutPagination {
    id: string;
    name: string;
    code: string;
    debit_code: string;
    debit_code_index: string;
    debit_code_month: string;
    debit_code_year: string;
    credit_code: string;
    credit_code_index: string;
    credit_code_month: string;
    credit_code_year: string;
    chart_of_account_division_id: string;
    ppn_type: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    ChartOfAccountDivision: ChartOfAccountDivision;
}

interface ChartOfAccountDivision {
    id: string;
    name: string;
    chart_of_account_sub_type_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    ChartOfAccountSubType: ChartOfAccount;
}

interface ChartOfAccount {
    id: string;
    name: string;
    code: string;
    chart_of_account_type_id?: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    ChartOfAccountType?: ChartOfAccount;
    chart_of_account_classification_id?: string;
    ChartOfAccountClassification?: ChartOfAccount;
    description?: null;
}
