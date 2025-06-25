import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Label } from '@/registry/new-york-v4/ui/label';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from '@/registry/new-york-v4/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';

import { DirectCalculator } from './DirectCalculator';
import { AppWindowIcon, CodeIcon } from 'lucide-react';

const depreciation = [
    { date: '>1 <=2 years', value: '20%' },
    { date: '>2 <=3 years', value: '30%' },
    { date: '>3 <=4years', value: '40%' },
    { date: '>4 <=5 years', value: '50%' },
    { date: '>5 <=6 years', value: '55%' },
    { date: '>6 <=7 years', value: '60%' },
    { date: '>7 <=8 years', value: '65%' }
];

export function DirectTab() {
    return (
        <div className='mt-8 flex w-full flex-row gap-6 lg:flex-row'>
            <div className='flex w-full flex-col gap-3'>
                <p className='text-base capitalize lg:text-lg'>DEPRECIATION FOR DIRECT IMPORTS</p>

                <Table className='w-full rounded-lg border'>
                    <TableBody className='w-full'>
                        {depreciation.map((invoice, index) => (
                            <TableRow key={index} className='p-6'>
                                <TableCell className='w-full'>{invoice.date}</TableCell>
                                <TableCell className='font-medium'>{invoice.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <DirectCalculator />
            </div>

            <div className='flex w-full flex-col gap-3'></div>
        </div>
    );
}
