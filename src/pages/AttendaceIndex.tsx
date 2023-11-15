import { useQuery } from "@tanstack/react-query";
import {
    MRT_ColumnDef,
    MRT_ColumnFiltersState,
    MRT_PaginationState,
    MRT_SortingState
} from "mantine-react-table";
import { useMemo, useState } from "react";
import { ArrowClockwise } from "react-bootstrap-icons";
import { AttendanceApi } from "../api/attendance.api";
import FMantineTable from "../components/Table/FMantineTable";
import { checkType } from "../utils/checkType";

export const AttendanceIndex = () => {
    const [pagination, setPagination] = useState<MRT_PaginationState>({
        pageIndex: 0,
        pageSize: 10
    });
    const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
        []
    );
    const [globalFilter, setGlobalFilter] = useState(null);
    const filterColum = (
        array: MRT_ColumnFiltersState,
        col: "name" | "date"
    ) => {
        if (array.length === 0) {
            return null;
        } else {
            const filteredArray = array.filter((data) => data.id === col);
            return filteredArray[0]?.value as string;
        }
    };

    const [sorting, setSorting] = useState<MRT_SortingState>([
        {
            id: "CHECKTIME",
            desc: true
        }
    ]);

    const memoQuery = useMemo<any>(() => {
        const query = {
            page: pagination.pageIndex + 1,
            size: pagination.pageSize,
            search: globalFilter,
            sort_by: sorting && sorting[0] ? sorting[0]?.id : null,
            order: sorting[0]?.desc ? "DESC" : "ASC",
            date: filterColum(columnFilters, "date"),
            name: filterColum(columnFilters, "name")
        };
        return query;
    }, [pagination, globalFilter, sorting, columnFilters]);

    const { data, isLoading, isError, isRefetching, refetch } = useQuery(
        ["AttendanceDatas", memoQuery],
        () => AttendanceApi.index(memoQuery)
    );

    console.log(data);

    const columns = useMemo<MRT_ColumnDef<any>[]>(
        () => [
            {
                accessorKey: "name",
                header: "Nama"
            },
            {
                accessorKey: "CHECKTIME",
                header: "Waktu",
                Cell: ({ row }) => {
                    return (
                        <div className="text-end">
                            {new Date(row?.original?.CHECKTIME).toLocaleString(
                                "id-ID",
                                {
                                    dateStyle: "medium",
                                    timeStyle: "long"
                                }
                            )}
                        </div>
                    );
                }
            },
            {
                accessorKey: "sn",
                header: "Serial Number"
            },
            {
                accessorKey: "CHECKTYPE",
                header: "Tipe",
                Cell: ({ renderedCellValue }) => {
                    return (
                        <div className="text-end">
                            {checkType(renderedCellValue as string)}
                        </div>
                    );
                }
            }
        ],
        []
    );

    return (
        <>
            <div className="panel p-3 mb-5">
                <div className="flex justify-between  gap-5">
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl md:text-3xl font-semibold">
                            List of Attendance
                        </h3>
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="btn btn-outline-primary gap-2"
                            onClick={() => {
                                refetch();
                            }}
                        >
                            <ArrowClockwise size={16} />
                            Refresh
                        </button>
                    </div>
                </div>
            </div>
            <FMantineTable
                columns={columns}
                data={data?.data}
                tableOptions={{
                    manualFiltering: true,
                    manualPagination: true,
                    manualSorting: true,
                    enableRowSelection: false,
                    onPaginationChange: setPagination,
                    onSortingChange: setSorting,
                    onColumnFiltersChange: setColumnFilters,
                    onGlobalFilterChange: setGlobalFilter,
                    rowCount: data?.totalItems || 0,
                    state: {
                        columnFilters: columnFilters,
                        globalFilter: globalFilter,
                        pagination: pagination,
                        isLoading: isLoading,
                        showAlertBanner: isError,
                        showProgressBars: isRefetching,
                        sorting: sorting
                    }
                }}
            />
        </>
    );
};
