interface GetDetailAccountLedgerResponse {
    id: string;
    debit: null;
    credit: string;
    description: string;
    is_voucher_generated: boolean;
    is_report_generated: boolean;
    is_cash_flow_generated: boolean;
    is_cancelled: string | null;
    balance: string;
    code: string;
    chart_of_account_transaction_class_id: string;
    chart_of_account_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    ChartOfAccount: ChartOfAccount;
    CancelVoucher: CancelVoucher;
    AccountLedgerEVoucherDetail: AccountLedgerEVoucherDetail;
    ChartOfAccountTransactionClass: ChartOfAccountTransactionClass;
    Invoice: Invoice;
}

interface CancelVoucher {
    id: string;
    debit: string | null;
    credit: string | null;
    description: string;
    is_voucher_generated: boolean;
    is_report_generated: boolean;
    is_cash_flow_generated: boolean;
    is_cancelled: string | null;
    balance: number;
    code: string;
    chart_of_account_transaction_class_id: string;
    chart_of_account_id: string;
    created_at: string;
    updated_at: string;
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
    ChartOfAccountDivision: ChartOfAccountDivision;
}

interface ChartOfAccountDivision {
    id: string;
    name: string;
    chart_of_account_sub_type_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    ChartOfAccountSubType: ChartOfAccountSubType;
}

interface ChartOfAccountSubType {
    id: string;
    name: string;
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

interface ChartOfAccountTransactionClass {
    id: string;
    type: string;
    class: string;
    description: string;
    chart_of_account_division_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
}

interface Invoice {
    id: string;
    number: string;
    date: Date;
    grand_total: number;
    supplier_id: string;
    account_ledger_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    Supplier: Supplier;
    InvoiceDetails: InvoiceDetail[];
    InvoiceEPpnDetail: InvoiceEPpnDetail;
    InvoiceEReimburseBy: null;
}

interface InvoiceDetail {
    id: string;
    item_name: string;
    item_index: number;
    quantity: number;
    unit_of_measurement_id: string;
    price: string;
    total_price: number;
    invoice_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    UnitOfMeasurement: ChartOfAccountSubType;
}

interface InvoiceEPpnDetail {
    id: string;
    faktur_number: string;
    faktur_date: Date;
    dpp: string;
    ppn: string;
    invoice_id: string;
    finance_reference_value_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    FinanceReferenceValue: FinanceReferenceValue;
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
    SupplierAddresses: any[];
    SupplierCategory: SupplierCategory;
    TypeOfBusinessEntity: SupplierCategory;
}

interface SupplierCategory {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    code?: string;
}
