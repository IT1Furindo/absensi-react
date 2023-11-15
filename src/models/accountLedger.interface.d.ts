interface GetAllAccountLedgerResponse {
    status: string;
    totalItems: number;
    totalPage: number;
    currentPage: number;
    balance: string;
    data: DetailDataAccountLedger[];
    cleanData: CleanDataAccountLedger[];
}

interface CleanDataAccountLedger {
    id: string;
    code: string;
    filter: any;
    created_at: Date;
    tanggal: string;
    person: string | null;
    kredit_code: string | null;
    debit_code: string | null;
    keterangan: string;
    supplier: string | null;
    transaction_type: string;
    transaction_class: string;
    give_to: string;
    is_canceled: boolean;
    is_completed: true;
    receive_from: string;
    faktur_number?: string | null;
    invoice_number?: string | null;
    is_ppn: boolean;
    is_reimbursment: boolean;
    qty: number | null;
    satuan: string | null;
    harga: string | null;
    debit: string | null;
    credit: string | null;
    saldo: string | null;
    tgl_invoice: string | null;
}

interface DetailDataAccountLedger {
    id: string;
    debit?: string;
    credit?: string;
    description: string;
    is_voucher_generated: boolean;
    is_report_generated: boolean;
    balance: string;
    code: string;
    chart_of_account_id: string;
    created_at: Date;
    updated_at: Date;
    ChartOfAccount: ChartOfAccount;
    AccountLedgerEVoucherDetail: AccountLedgerEVoucherDetail | null;
    Invoice: Invoice | null;
}

interface AccountLedgerEVoucherDetail {
    id: string;
    receive_from: string;
    give_to: string;
    account_ledger_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
}

interface GetAllForFormSelectResponse {
    id: string;
    debit: string;
    credit: null;
    description: string;
    balance: string;
    code: string;
    chart_of_account_id: string;
    is_voucher_generated: boolean;
    is_report_generated: boolean;
    is_cash_flow_generated: boolean;
    is_cancelled: null;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    ChartOfAccount: ChartOfAccount;
    AccountLedgerEVoucherDetail: AccountLedgerEVoucherDetail | null;
    Invoice: Invoice | null;
    ChartOfAccountTransactionClass: ChartOfAccountTransactionClass;
}

interface ChartOfAccountTransactionClass {
    id: string;
    type: string;
    class: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}

interface ChartOfAccount {
    id: string;
    name: ChartOfAccountName;
    code: string;
    debit_code: DebitCode;
    debit_code_index: string;
    debit_code_month: string;
    debit_code_year: string;
    credit_code: CreditCode;
    credit_code_index: string;
    credit_code_month: string;
    credit_code_year: string;
    chart_of_account_sub_type_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    ChartOfAccountSubType: ChartOfAccountSubType;
}

interface ChartOfAccountSubType {
    id: string;
    name: ChartOfAccountSubTypeName;
    code: string;
    chart_of_account_type_id?: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    ChartOfAccountType?: ChartOfAccountSubType;
    chart_of_account_classification_id?: string;
    ChartOfAccountClassification?: ChartOfAccountSubType;
    description?: null;
}

interface Invoice {
    id: string;
    number: string;
    date: null;
    grand_total: string;
    supplier_id: string;
    account_ledger_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    Supplier: Supplier;
    InvoiceDetails: InvoiceDetail[];
    InvoiceEPpnDetail: InvoiceEPpnDetail;
    InvoiceEReimburseBy: InvoiceEReimburseBy;
}

interface InvoiceEReimburseBy {
    id: string;
    invoice_id: string;
    chart_of_account_child_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    ChartOfAccountChild: ChartOfAccountChild;
}

interface ChartOfAccountChild {
    id: string;
    code: string;
    chart_of_account_id: string;
    employee_id: string;
    ChartOfAccount: ChartOfAccount;
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

interface InvoiceEPpnDetail {
    id: string;
    faktur_number: string;
    ppn: string;
    invoice_id: string;
    finance_reference_value_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    FinanceReferenceValue: FinanceReferenceValue;
}

interface InvoiceDetail {
    id: string;
    item_name: string;
    quantity: number;
    unit_of_measurement_id: string;
    price: string;
    total_price: string;
    invoice_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    UnitOfMeasurement: ChartOfAccountSubType;
}

interface Supplier {
    id: string;
    name: string;
    description: string;
    active_status: boolean;
    website: string;
    has_invoice: boolean;
    type_of_business_entity_id: string;
    supplier_category_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    SupplierAddresses: SupplierAddress[];
    SupplierCategory: SupplierCategory;
    TypeOfBusinessEntity: SupplierCategory;
}

interface InvoiceEPpnDetail {
    id: string;
    faktur_number: string;
    ppn: string;
    invoice_id: string;
    finance_reference_value_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    FinanceReferenceValue: FinanceReferenceValue;
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

interface SupplierCategory {
    id: string;
    name: SupplierCategoryName;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    code?: string;
}

interface FormDebit {
    receive_from: string;
    amount: string;
    description: string;
    chart_of_account_id: string;
}

interface createDebitResponseInterface {
    status: string;
    message: string;
}

interface FormCreditNotPPN {
    spender_id: string;
    invoice_date: string;
    supplier_id: string;
    give_to: string;
    round: string;
    paid: string;
    invoice_number: string;
    taxt_number: string;
    item: Item[];
}

interface Item {
    name: string;
    qty: string;
    unit_of_measurement_id: string;
    price: string;
    total_price: string;
}

interface StringChartOfAccountId {
    chart_of_account_id: string;
}

interface FormDateForGenerateVoucher {
    start_date: string;
    end_date: string;
    chart_of_account_id: string;
}

interface DataReportResponse {
    chartOfAccountName: string;
    startingDate: string;
    endingDate: string;
    isCopied: boolean;
    data: arrayDataReport[];
}

interface arrayDataReport {
    rawDate: Date;
    tanggal: Date;
    hari: string;
    bulan: string;
    kredit_code: string | null;
    debit_code: string | null;
    person: null | string;
    transaction_type: string;
    transaction_class: string;
    keterangan: string;
    supplier: null | string;
    is_ppn: boolean;
    is_reimbursment: boolean;
    qty: number | null;
    satuan: null | string;
    harga: string | null;
    debit: null | string;
    credit: null | string;
    saldo: string;
    tgl_invoice: Date | null;
}
