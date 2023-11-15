Table petty_cashes {
  id uuid [primary key]
  debit_code string
  credit_code string
  quantity integer
  uom string
  price integer
  rounding integer
  debit integer
  credit integer
  balance integer
  description integer
  sudah_terima_dari string
  actual_transaction_at date
  flag_voucher integer
  flag_report integer
  coa_cash_advance_member_id string [ref: > coa_cash_advance_members.id]
  kas_kecil_non_po_invoice_id string [ref: > kas_kecil_non_po_invoices.id]
}

Table coa_cash_advance_members {
  id uuid [primary key]
  name string
  code string
}

Table chart_of_accounts_members {
  id uuid [primary key]
  name string
  index_code string
  index string
  coa_id string
  chart_of_accounts_type_id string [ref: > chart_of_accounts_types.id]
}

Table chart_of_accounts_types {
  id uuid [primary key]
  name string
  code string
  coa_id string
}

Table chart_of_accounts_sub_types {
  id uuid [primary key]
  name string
  code string
  chart_of_accounts_type_id string [ref: > chart_of_accounts_types.id]
}

Table chart_of_accounts_code_formats {
  id uuid [primary key]
  debit_format string
  credit_format string
  debit_index_number integer
  debit_index_month integer
  credit_index_year integer
  debit_operator enum
  credit_operator enum
  coa_table_name string
}

Table kas_kecil_monthly_balances {
  id uuid [primary key]
  month string
  year string
  balance integer
}

Table kas_kecil_non_po_invoices {
  id uuid [primary key]
  total_transaction integer
  actual_transaction_at date
  supplier_id string [ref: > suppliers.id]
}

Table suppliers {
  id uuid [primary key]
  name string
  description string
  active_status boolean
  website string
  email string
  type_of_business_entity_id string [ref: > type_of_business_entities.id]
  supplier_category_id string [ref: > supplier_categories.id]
}

Table supplier_addresses {
  id uuid [primary key]
  name string
  address string
  rt string
  rw string
  village string
  district string
  regency string
  supplier_id string [ref: > suppliers.id]
}

Table supplier_categories {
  id uuid [primary key]
  name string
}

Table type_of_business_entities {
  id uuid [primary key]
  name string
  code string
}