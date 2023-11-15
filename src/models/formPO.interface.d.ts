interface IFormPurchaseOrder {
    supplier: string;
    due_date_delivery: string | Date | null;
    validity_date: string | Date | null;
    currency: string;
    currency_rate: number;
    items: IFormPurchaseOrderItem[];
    delivery_address: string;
    shipping_cost: string;
    payment_term: string;
    payment_method: string;
    total_amount: number;
    total_amount_in_words: string;
    remarks: string;
    prepared_by: string;
    checked_by: string;
    approved_by: string;
    received_by: string;
}

interface IFormPurchaseOrderItem {
    item_id: string;
    quantity: number;
    unit_price: number;
    discount: number;
    total_amount: number;
}
