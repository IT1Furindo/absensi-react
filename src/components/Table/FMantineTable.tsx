import LoadingButton from "@mui/lab/LoadingButton";
import {
    MRT_ColumnDef,
    MRT_GlobalFilterTextInput,
    MRT_ShowHideColumnsButton,
    MRT_TableOptions,
    MRT_ToggleFiltersButton,
    MRT_ToggleFullScreenButton,
    MantineReactTable,
    useMantineReactTable
} from "mantine-react-table";

type tableOptions = Omit<MRT_TableOptions, "data" | "columns">;

export default function FMantineTable({
    columns,
    data,
    tableOptions,
    deleteAction
}: {
    columns: MRT_ColumnDef<any>[];
    data: any[];
    tableOptions?: tableOptions;
    deleteAction?: (payload: string[]) => Promise<void>;
}) {
    const table = useMantineReactTable({
        columns,
        data: data ? data : [],
        enableColumnFilters: true,
        enableGlobalFilter: true,
        enableColumnResizing: true,
        enableColumnOrdering: true,
        enableStickyHeader: true,
        enableStickyFooter: true,
        enableRowSelection: true,
        paginationDisplayMode: "pages",
        mantinePaginationProps: {
            radius: "xl",
            size: "md"
        },
        initialState: {
            showGlobalFilter: true
        },
        mantineSearchTextInputProps: {
            placeholder: "Search..."
        },
        renderTopToolbar: ({ table }) => {
            async function handleDelete() {
                try {
                    const payload = table
                        .getSelectedRowModel()
                        .flatRows.map((row) => row.original.id);
                    if (deleteAction) {
                        await deleteAction(payload);
                        table.resetRowSelection();
                    }
                } catch (error) {
                    // console.log(error);
                }
            }

            return (
                <div className="flex justify-between py-2 bg-white border-b">
                    <div className="ms-4">
                        {table.getIsSomeRowsSelected() ||
                        table.getIsAllRowsSelected() ? (
                            <LoadingButton
                                variant="contained"
                                color={"error"}
                                onClick={handleDelete}
                            >
                                Delete {table.getSelectedRowModel().rows.length}{" "}
                                Selected
                            </LoadingButton>
                        ) : null}
                    </div>
                    <div className="flex">
                        <MRT_GlobalFilterTextInput table={table} />
                        <MRT_ToggleFiltersButton table={table} />
                        <MRT_ShowHideColumnsButton table={table} />
                        <MRT_ToggleFullScreenButton table={table} />
                    </div>
                </div>
            );
        },
        ...tableOptions
    });

    return (
        <div>
            <MantineReactTable table={table} />
        </div>
    );
}
