import { lazy } from "react"; //menggunakan lazy import darireact
import { Navigate, createBrowserRouter, redirect } from "react-router-dom";

import { MongoAbility } from "@casl/ability";

import BlankLayout from "../components/Layouts/BlankLayout";
import DefaultLayout from "../components/Layouts/DefaultLayout";

const ReferenceIndex = lazy(() => import("../pages/Utility/References/Index"));
const UserIndex = lazy(() => import("../pages/User/Index"));
const EditProfile = lazy(() => import("../pages/Profile/EditProfile"));
const PermissionPositionDatatable = lazy(
    () => import("../pages/Administration/PermissionPosition/DataTable")
);

let ability: null | MongoAbility = null;

export function abilityInject(payload: MongoAbility) {
    ability = payload;

    // console.log(
    //     ability?.can("read", "permission")
    //     // 'ability?.can("read", "permission")'
    // );

    // console.log(ability, "abilityroutes");
}
// FINANCE +++++++++++++++++++++++++++++++++++++
const BankIndex = lazy(() => import("../pages/Finance/Bank/Index"));
const BankBranchIndex = lazy(() => import("../pages/Branch/Index"));
const BankAccountIndex = lazy(
    () => import("../pages/Finance/Bank/Account/Index")
);

// FINANCE +++++++++++++++++++++++++++++++++++++

const ChartOfAccountChildDataTable = lazy(
    () => import("../pages/Finance/KasKecilAdvance/DataTable")
);
const ChartOfAccountClassificationDataTable = lazy(
    () => import("../pages/ChartOfAccount/Classification/DataTable")
);
const ChartOfAccountTypeDataTable = lazy(
    () => import("../pages/ChartOfAccount/Type/DataTable")
);
const ChartOfAccountSubTypeDataTable = lazy(
    () => import("../pages/ChartOfAccount/SubType/DataTable")
);
const EmployeeIndex = lazy(() => import("../pages/Employee/Index"));
const ActivityLogDataTable = lazy(
    () => import("../pages/ActivityLog/DataTable")
);
const PositionDatatable = lazy(
    () => import("../pages/Administration/Position/DataTable")
);
const DepartmentDatatable = lazy(
    () => import("../pages/Administration/Department/DatatTable")
);
const DepartmentTypeDataTable = lazy(
    () => import("../pages/Administration/DepartmentType/DataTable")
);
const ChartOfAccountIndex = lazy(
    () => import("../pages/ChartOfAccount/ChartOfAccount/Index")
);
const KasKecilWithMantine = lazy(
    () => import("../pages/Finance/KasKecil/IndexWithMantine")
);

const LoginPage = lazy(() => import("../pages/Authentication/LoginPage"));
const HomePage = lazy(() => import("../pages/Dashboard/HomePage"));
const FinanceReferenceIndex = lazy(
    () => import("../pages/Utility/References/FinanceReference/Index")
);
const PermissionsIndex = lazy(
    () => import("../pages/Administration/Permission/Index")
);

//PROCUREMENT +++++++++++++++++++++++++++++++++++++
const SuppliersIndex = lazy(
    () => import("../pages/Procurement/Supplier/Index")
);
const StockIndex = lazy(() => import("../pages/Procurement/Stock/Index"));
const PurchaseOrderIndex = lazy(
    () => import("../pages/Procurement/PurchaseOrder/Index")
);
const CustomerIndex = lazy(() => import("../pages/Procurement/Customer/Index"));
//PROCUREMENT +++++++++++++++++++++++++++++++++++++=+++++++++++++++++++=================

const UnitOfMeasurementIndex = lazy(
    () => import("../pages/Utility/UnitOfMeasurement/Index")
);
const InactiveFinanceReferenceIndex = lazy(
    () => import("../pages/Utility/References/FinanceReference/IndexInactive")
);
const KasbonIndex = lazy(
    () => import("../pages/Finance/KasKecilAdvance/Kasbon")
);
const KasbonArchive = lazy(
    () => import("../pages/Finance/KasKecilAdvance/KasbonArchive")
);
const Transfer = lazy(() => import("../pages/Finance/Pemindahbukuan/Index"));
const checkAuth = () => {
    if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
    }
    return null;
};

function abilityCheck(abilityStr: string, page: string) {
    if (ability) {
        if (!ability.can(abilityStr, page)) {
            throw redirect("/404");
        }
    } else {
        throw redirect("/404");
    }
}

// Rigid plastic packaging //
// ============================================  FACTORY  ============================================
const MaterialIndex = lazy(() => import("../pages/Factory/Material/Index"));
const MouldIndex = lazy(() => import("../pages/Factory/Mould/Index"));
const ProductIndex = lazy(() => import("../pages/Factory/Product/Index"));
// ============================================  FACTORY  ============================================

const routesList = [
    {
        path: "/",
        loader: checkAuth,
        element: <DefaultLayout />,
        children: [
            {
                path: "dashboard",
                element: <HomePage />
            },
            // ========================== User and Employee Start =======================
            {
                path: "user",
                element: <UserIndex />
            },
            {
                path: "employee",
                element: <EmployeeIndex />
            },
            // ============================== User and  End =======================
            // ======================= Finance and Accounting Start =======================
            {
                path: "kas-kecil",
                element: (
                    <Navigate to="/kas-kecil/2036e045-8658-567e-b00d-e634ede628af" />
                )
            },
            {
                path: "kas-kecil/:chart_of_account_id",
                element: <KasKecilWithMantine />
            },
            {
                path: "transfer",
                element: <Transfer />
            },
            {
                path: "kas-kecil-advance",
                children: [
                    {
                        path: "",
                        element: <ChartOfAccountChildDataTable />
                    },
                    {
                        path: "kasbon",
                        element: <KasbonIndex />
                    },
                    {
                        path: "repaid-loan",
                        element: <KasbonArchive />
                    }
                ]
            },
            {
                path: "bank",
                element: <BankIndex />
            },
            {
                path: "bank-branch",
                element: <BankBranchIndex />
            },
            {
                path: "bank-account",
                element: <BankAccountIndex />
            },
            // ======================= Finance and Accounting End =======================
            // ============================ Procurement Start =======================
            {
                path: "purchase-order",
                element: <PurchaseOrderIndex />
            },
            {
                path: "stock",
                element: <StockIndex />
            },
            {
                path: "customer",
                element: <CustomerIndex />
            },
            {
                path: "supplier",
                element: <SuppliersIndex />
            },
            // ======================= Procurement End =======================
            // ======================= Utilities Start =======================
            {
                path: "finance-reference",
                element: <FinanceReferenceIndex />
            },
            {
                path: "finance-references-inactive",
                element: <InactiveFinanceReferenceIndex />
            },
            {
                path: "reference",
                element: <ReferenceIndex />
            },

            {
                path: "unit-of-measurement",
                element: <UnitOfMeasurementIndex />
            },
            // ======================= Utilities End =======================
            // ==================== Chart Of Account Start =======================
            {
                path: "chart-of-account-classification",
                element: <ChartOfAccountClassificationDataTable />
            },
            {
                path: "chart-of-account-type",
                element: <ChartOfAccountTypeDataTable />
            },
            {
                path: "chart-of-account-sub-type",
                element: <ChartOfAccountSubTypeDataTable />
            },
            {
                path: "chart-of-account",
                element: <ChartOfAccountIndex />
            },
            // ========================= Chart Of Account End =======================
            // ============================= Factory Start =======================
            {
                path: "rpp-material",
                element: <MaterialIndex />
            },
            {
                path: "rpp-mould",
                element: <MouldIndex />
            },
            {
                path: "rpp-product",
                element: <ProductIndex />
            },
            // ========================= Factory End =======================
            // ===================== Administration Start =======================
            {
                path: "department-type",
                element: <DepartmentTypeDataTable />
            },
            {
                path: "department",
                element: <DepartmentDatatable />
            },
            {
                path: "permission",
                element: <PermissionsIndex />
            },
            {
                path: "position",
                element: <PositionDatatable />
            },
            {
                path: "permission-position",
                element: <PermissionPositionDatatable />
            },
            {
                path: "activity-log",
                element: <ActivityLogDataTable />
            },
            {
                path: "my-profile",
                element: <EditProfile />
            }
            // ========================= Administration Stop =======================
        ]
    },
    {
        path: "/login",
        loader: () => {
            if (localStorage.getItem("access_token")) {
                throw redirect("/dashboard");
            }
            return null;
        },
        element: <BlankLayout />,
        children: [
            {
                path: "",
                element: <LoginPage />
            }
        ]
    }
];

const router = createBrowserRouter(routesList);

export default router;
