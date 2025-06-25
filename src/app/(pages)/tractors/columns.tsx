'use client';

import { Button } from '@/registry/new-york-v4/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/registry/new-york-v4/ui/dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';

import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type DataModel = {
    Make: string;
    Model: string;
    Horsepower: string;
    CRSP: any;
};

export const columns: ColumnDef<DataModel>[] = [
    {
        accessorKey: 'Make',
        enableHiding: true,
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    className='cursor-pointer !px-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Make
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        }
    },
    {
        accessorKey: 'Model',
        enableHiding: true,
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    className='cursor-pointer !px-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Model
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        }
    },
    {
        accessorKey: 'Horsepower',
        enableHiding: true,
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    className='cursor-pointer !px-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Horsepower
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        }
    },

    {
        accessorKey: 'CRSP',
        header: ({ column }) => {
            return (
                <Button
                    className='cursor-pointer !px-0 font-bold hover:bg-transparent'
                    variant='ghost'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    CRSP
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue('CRSP'));
            const formatted = new Intl.NumberFormat('en-KE', {
                style: 'decimal',
                maximumFractionDigits: 0
            }).format(amount); // e.g. 5910345 → "5,910,345"

            return <div className='font-medium text-blue-800 dark:text-blue-200'>{formatted}</div>;
        }
    }
];
