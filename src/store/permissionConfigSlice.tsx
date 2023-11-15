import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    permission: {
        dashboard: {
            canView: false,
            canEdit: false,
            canDelete: false,
            canAdd: false
        },
        users: {
            canView: false,
            canEdit: false,
            canDelete: false,
            canAdd: false
        },
        roles: {
            canView: false,
            canEdit: false,
            canDelete: false,
            canAdd: false
        },
        permissions: {
            canView: false,
            canEdit: false,
            canDelete: false,
            canAdd: false
        },
        settings: {
            canView: false,
            canEdit: false,
            canDelete: false,
            canAdd: false
        },
        profile: {
            canView: false,
            canEdit: false,
            canDelete: false,
            canAdd: false
        }
    }
};

const initialState = {
    permission: {
        dashboard: {
            canView:
                localStorage.getItem("dashboard.canView") ||
                defaultState.permission.dashboard.canView,
            canEdit:
                localStorage.getItem("dashboard.canEdit") ||
                defaultState.permission.dashboard.canEdit,

            canDelete:
                localStorage.getItem("dashboard.canDelete") ||
                defaultState.permission.dashboard.canDelete,

            canAdd:
                localStorage.getItem("dashboard.canAdd") ||
                defaultState.permission.dashboard.canAdd
        },
        users: {
            canView:
                localStorage.getItem("users.canView") ||
                defaultState.permission.users.canView,

            canEdit:
                localStorage.getItem("users.canEdit") ||
                defaultState.permission.users.canEdit,

            canDelete:
                localStorage.getItem("users.canDelete") ||
                defaultState.permission.users.canDelete,

            canAdd:
                localStorage.getItem("users.canAdd") ||
                defaultState.permission.users.canAdd
        }
    }
};

const permissionConfigSlice = createSlice({
    name: "permissionConfig",
    initialState,
    reducers: {
        setPermissionConfig(state, action) {
            state.permission = action.payload;
        }
    }
});

export const { setPermissionConfig } = permissionConfigSlice.actions;

export default permissionConfigSlice.reducer;
