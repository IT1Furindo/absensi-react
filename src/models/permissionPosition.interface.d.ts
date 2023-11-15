// const contohData = [
//     {
//         service: "be",
//         data: [
//             {
//                 position: "user",
//                 data: [
//                     {
//                         permission: "read",
//                         value: false,
//                         id: "uuid"
//                     },
//                     {
//                         permission: "view",
//                         value: false,
//                         id: "uuid"
//                     },
//                     {
//                         permission: "create",
//                         value: false,
//                         id: "uuid"
//                     },
//                     {
//                         permission: "update",
//                         value: false,
//                         id: "uuid"
//                     },
//                     {
//                         permission: "delete",
//                         value: false,
//                         id: "uuid"
//                     }
//                 ]
//             }
//         ]
//     }
// ];

interface ICreatePermissionPosition {
    position_id: string;
    permission_ids: string[];
}

interface IMergeDataServiceForCheckbox {
    service?: string;
    data?: IPositionChildServiceForCheckbox[];
}

interface IPositionChildServiceForCheckbox {
    position: string;
    data: IPermissionChildPositionChildServiceForCheckbox[];
}

interface IPermissionChildPositionChildServiceForCheckbox {
    permission: string;
    value: boolean;
    id: string;
}

interface IPermissionFromDatabase {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}
