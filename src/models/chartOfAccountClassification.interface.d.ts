interface GetAllCoaClassificationResponse {
    status: string;
    totalItems: number;
    totalPage: number;
    currentPage: number;
    data: DetailChartOfAccountClassificationResponse[];
}

interface DetailChartOfAccountClassificationResponse {
    id: string;
    name: string;
    code: string;
    description: null;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
}

interface FormCreateChartOfAccountClassification {
    name: string;
    code: string;
    description: string;
}

interface FormUpdateChartOfAccountClassification {
    id: string;
    name: string;
    code: string;
    description: string;
}

interface ICreateCOATypeFormValues {
    name: string;
    code: string;
    chart_of_account_classification_id: string;
}
