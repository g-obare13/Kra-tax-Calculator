'use client';

import * as React from 'react';

import { Button } from '@/registry/new-york-v4/ui/button';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from '@/registry/new-york-v4/ui/dropdown-menu';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york-v4/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/registry/new-york-v4/ui/table';
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from '@tanstack/react-table';

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

const defaultHidden: VisibilityState = {
    Transmission: false,
    Drive_configuration: false,
    Gvw: false,
    Seating: false,
    Fuel: false
};

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    // const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({
        Transmission: false,
        Drive_configuration: false,
        Gvw: false,
        Seating: false,
        Fuel: false
    });
    const [pagination, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 50 // ← change this number to your desired size, e.g., 20 or 50
    });
    const [globalFilter, setGlobalFilter] = React.useState('');
    const globalFilterFn = (row: any, columnId: any, filterValue: any) => {
        return String(row.getValue(columnId)).toLowerCase().includes(filterValue.toLowerCase());
    };

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onPaginationChange: setPagination,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        globalFilterFn: globalFilterFn,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            pagination,
            globalFilter
        }
    });

    return (
        <div>
            <div className='flex items-center py-4 font-[family-name:var(--font-geist-sans)]'>
                <Input
                    placeholder='Search all columns...'
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className='max-w-sm'
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='outline' className='ml-auto'>
                            Columns
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className='font-[family-name:var(--font-geist-sans)] capitalize'
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) => column.toggleVisibility(!!value)}>
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className='overflow-hidden rounded-md border'>
                <Table>
                    <TableHeader className='rounded-md bg-neutral-200 dark:bg-neutral-800'>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className='h-24 text-center'>
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className='my-4 flex items-center justify-between px-2'>
                <div className='text-muted-foreground flex-1 text-sm'>
                    {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length}{' '}
                    row(s) selected.
                </div>
                <div className='flex items-center space-x-6 lg:space-x-8'>
                    <div className='flex items-center space-x-2'>
                        <p className='text-sm font-medium'>Rows per page</p>
                        <Select
                            value={`${table.getState().pagination.pageSize}`}
                            onValueChange={(value) => {
                                table.setPageSize(Number(value));
                            }}>
                            <SelectTrigger className='h-8 w-[70px]'>
                                <SelectValue placeholder={table.getState().pagination.pageSize} />
                            </SelectTrigger>
                            <SelectContent side='top'>
                                {[10, 20, 25, 30, 40, 50].map((pageSize) => (
                                    <SelectItem
                                        className='font-[family-name:var(--font-geist-sans)] capitalize'
                                        key={pageSize}
                                        value={`${pageSize}`}>
                                        {pageSize}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='flex w-[100px] items-center justify-center text-sm font-medium'>
                        Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Button
                            variant='outline'
                            size='icon'
                            className='hidden size-8 lg:flex'
                            onClick={() => table.setPageIndex(0)}
                            disabled={!table.getCanPreviousPage()}>
                            <span className='sr-only'>Go to first page</span>
                            <ChevronsLeft />
                        </Button>
                        <Button
                            variant='outline'
                            size='icon'
                            className='size-8'
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}>
                            <span className='sr-only'>Go to previous page</span>
                            <ChevronLeft />
                        </Button>
                        <Button
                            variant='outline'
                            size='icon'
                            className='size-8'
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}>
                            <span className='sr-only'>Go to next page</span>
                            <ChevronRight />
                        </Button>
                        <Button
                            variant='outline'
                            size='icon'
                            className='hidden size-8 lg:flex'
                            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                            disabled={!table.getCanNextPage()}>
                            <span className='sr-only'>Go to last page</span>
                            <ChevronsRight />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
