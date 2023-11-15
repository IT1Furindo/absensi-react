interface ChartOfAccountChildForSelect {
    id: string;
    code: string;
    status: any;
    employee_id: string;
    chart_of_account_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    Employee: Employee;
    ChartOfAccount: ChartOfAccount;
    ChartOfAccountELimit: ChartOfAccountChildELimits[];
    ChartOfAccountChildLoans: ChartOfAccountChildLoans[];
    ChartOfAccountChildReimburseTos: ChartOfAccountChildReimburseTo[];
}

interface ChartOfAccountChildLoans {
    id: string;
    chart_of_account_child_id: string;
    amount: string;
    loan_voucher_id: string;
    repayment_voucher_id: string | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
}

interface ChartOfAccountChildELimits {
    id: string;
    limit: string;
    active_at: Date;
    inactive_at: Date | null;
    chart_of_account_child_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
}

interface ChartOfAccount {
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
}

interface ChartOfAccountChildReimburseTo {
    id: string;
    chart_of_account_child_id: string;
    chart_of_account_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
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

interface FormCreateCOAChild {
    employee: string;
    coa: string;
    limit: string;
    reimburse_to: string[];
}

interface FormAsignCOAChild {
    employee: string;
    code: string;
    coa: string;
    limit: string;
    reimburse_to: string[];
}

interface FormEditAsignCOAChild {
    id: string;
    employee: string;
    code: string;
    coa: string;
    limit: string;
    reimburse_to: string[];
    status: boolean;
}

interface SuccessResponse {
    status: string;
    message: string;
}

interface GetAllChartOfAccountChildResponse {
    status: string;
    totalItems: number;
    totalPage: number;
    currentPage: number;
    data: DetailChartOfAccountChild[];
}

interface DetailChartOfAccountChild {
    id: string;
    code: string;
    limit: string;
    status: boolean;
    employee_id: string;
    chart_of_account_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    Employee: Employee;
    ChartOfAccount: ChartOfAccount[];
    ChartOfAccountChildELimits: ChartOfAccountChildELimits;
    ChartOfAccountChildReimburseTos: ChartOfAccountChildReimburseTo[];
}

interface ChartOfAccount {
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
}

interface ChartOfAccountChildReimburseTo {
    id: string;
    chart_of_account_child_id: string;
    chart_of_account_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
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

interface GetAllChartOfAccountChildByReimburseToResponse {
    id: string;
    chart_of_account_child_id: string;
    chart_of_account_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    ChartOfAccountChild: ChartOfAccountChildGetAllChartOfAccountChildByReimburseToResponse;
}

interface ChartOfAccountChildGetAllChartOfAccountChildByReimburseToResponse {
    id: string;
    code: string;
    limit: string;
    status: boolean;
    employee_id: string;
    chart_of_account_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    Employee: Employee;
    ChartOfAccount: ChartOfAccount;
}

interface GetAllActiveChartOfAccountChildResponse {
    id: string;
    code: string;
    ChartOfAccountELimit: ChartOfAccountChildELimits[];
    employee_id: string;
    chart_of_account_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    Employee: EmployeeDetail;
    ChartOfAccount: ChartOfAccount;
    ChartOfAccountChildReimburseTos: ChartOfAccountChildReimburseTo[];
}

interface EmployeeDetail {
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
    superior_id: null;
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
    description?: string;
}
