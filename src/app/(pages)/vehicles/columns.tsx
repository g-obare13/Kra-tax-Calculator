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
    Model_number: string;
    Transmission: string;
    Drive_configuration: string;
    Engine_capacity: string;
    Body_type: string;
    Gvw: string;
    Seating: string;
    Fuel: string;
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
        accessorKey: 'Model_number',
        enableHiding: true,
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    className='cursor-pointer !px-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Model Number
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        }
    },
    {
        accessorKey: 'Transmission',
        enableHiding: true,
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    className='cursor-pointer !px-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Transmission
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        }
    },
    {
        accessorKey: 'Drive_configuration',
        enableHiding: true,
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    className='cursor-pointer !px-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Drive Configuration
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        }
    },
    {
        accessorKey: 'Engine_capacity',
        enableHiding: true,
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    className='cursor-pointer !px-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Engine Capacity
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        }
    },
    {
        accessorKey: 'Body_type',
        enableHiding: true,
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    className='cursor-pointer !px-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Body Type
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        }
    },
    {
        accessorKey: 'Gvw',
        enableHiding: true,
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    className='cursor-pointer !px-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Gvw
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        }
    },
    {
        accessorKey: 'Seating',
        enableHiding: true,
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    className='cursor-pointer !px-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Seating
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        }
    },
    {
        accessorKey: 'Fuel',
        enableHiding: true,
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    className='cursor-pointer !px-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Fuel
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        }
    },

    // {
    //     accessorKey: 'CRSP',
    //     enableHiding: true,
    //     header: ({ column }) => {
    //         return (
    //             <Button
    //                 className='cursor-pointer !px-0 font-bold hover:bg-transparent'
    //                 variant='ghost'
    //                 onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
    //                 CRSP
    //                 <ArrowUpDown className='ml-2 h-4 w-4' />
    //             </Button>
    //         );
    //     },
    //     cell: ({ row }) => {
    //         return <div className='font-medium text-blue-800 dark:text-blue-200'>{row?.getValue('CRSP')}</div>;
    //     }
    // }

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
