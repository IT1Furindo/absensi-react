interface IIndexRppMouldResponse {
    status: string;
    totalItems: number;
    totalPage: number;
    currentPage: number;
    data: IRowDataRppMouldResponse[];
}

interface IRowDataRppMouldResponse {
    id: string;
    name: string;
    quantity: string;
    cavity: number;
    serial_number: string;
    runner_type: string;
    machine_type: string;
    Item: IItemDetailRppMouldResponse;
    RppMachineType: RppMachineType;
}

interface IItemDetailRppMouldResponse {
    id: string;
    name: string;
    quantity: string;
    description: string;
    UnitOfMeasurement: UnitOfMeasurement;
}

interface UnitOfMeasurement {
    id: string;
    name: string;
    code: string;
}

interface RppMachineType {
    id: string;
    name: string;
}

interface IFormCreateRppMouldInsert {
    name: string | "";
    quantity: number | "";
    description: string | "";
    unit_of_measurement_id: string | "";
    item_type_id: string | "";
}

interface IFormCreateRppMould {
    cavity: number | string | "";
    serial_number: string | "";
    runner_type: "hot_runner" | "cold_runner" | "";
    rpp_machine_type_id: string | "";
    name: string | "";
    quantity: number | "";
    description: string | "";
    unit_of_measurement_id: string | "";
    item_type_id: string | "";
    rpp_mould_inserts: IFormCreateRppMouldInsert[] | null;
}
