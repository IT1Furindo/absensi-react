interface FormikGeneralProps {
    label?: string;
    name?: string;
    is_required?: boolean;
    clue?: string;
    errorMsg?: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

interface IDataValuesForRegionSelect {
    province: string;
    district: string;
    regency: string;
    village: string;
}
interface FormikRegionOptionProps extends Pick<FormikGeneralProps, "is_required"> {
    village?: string;
    district?: string;
    regency?: string;
    province?: string;
    dataValue?: IDataValuesForRegionSelect;
}

interface FormikSelectFieldProps extends FormikGeneralProps {
    options: { value: string; label: string }[];
    style?: React.CSSProperties;
}

interface FormikPhoneFieldProps extends FormikGeneralProps {}

interface FormikInputFieldProps extends FormikGeneralProps {
    type?: string;
    is_capitalize?: boolean;
    is_number?: boolean;
    max?: number;
    min?: number;
    length?: number;
}

interface FormikDateFieldProps extends FormikGeneralProps {
    dateFormat?: string;
    position?: PositionType;
    maxDate?: Date;
    minDate?: Date;
}

interface FormikAmountFieldProps extends FormikGeneralProps {
    type?: string;
    disabled?: boolean;
    content?: string;
}

type PositionType =
    | "auto left"
    | "auto"
    | "above"
    | "below"
    | "auto center"
    | "auto right"
    | "above left"
    | "above center"
    | "above right"
    | "below left"
    | "below center"
    | "below right"
    | ((self: Instance, customElement: HTMLElement | undefined) => void)
    | undefined;
