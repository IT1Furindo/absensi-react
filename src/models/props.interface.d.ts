interface PropsId {
    id: string;
}

interface PropsPositionFormInterface {
    id: string;
    page_name : string;
}

interface PropsUserInterface {
    id: string;
    username: string;
    status: string;
    password: string;
    isLoading: boolean;
}

interface PropsPositionInterface {
    Positions: PositionInterface[];
}

interface PositionInterface {
    id: string;
    name: string;
    permissions: ArrayPermissionInterface[];
}

interface ArrayPermissionInterface {
    id: string;
    name: string;
}
