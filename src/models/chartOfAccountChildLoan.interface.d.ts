interface GetAllKasbonResponse {
    status: string;
    totalItems: number;
    totalPage: number;
    currentPage: number;
    data: KasbonDetailResponse[];
}

interface FormRepayment {
    id: string;
}

interface KasbonDetailResponse {
    id: string;
    chart_of_account_child_id: string;
    amount: string;
    loan_voucher_id: string;
    repayment_voucher_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    ChartOfAccountChild: ChartOfAccountChild;
    LoanVoucher: Voucher;
    RepaymentVoucher: Voucher;
}

interface ChartOfAccountChild {
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

interface Voucher {
    id: string;
    debit: null | string;
    credit: null | string;
    description: string;
    is_voucher_generated: boolean;
    is_report_generated: boolean;
    balance: string;
    code: string;
    chart_of_account_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
}
