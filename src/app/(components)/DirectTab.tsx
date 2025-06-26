'use client';

import { useState } from 'react';

import { Alert, AlertDescription, AlertTitle } from '@/registry/new-york-v4/ui/alert';
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

import { DirectCalculator, formatWithCommas } from './DirectCalculator';
import { AppWindowIcon, ArrowRightLeft, CheckCircle2Icon, CodeIcon } from 'lucide-react';

export const depreciationYrs = [
    { date: '>1 <=2 years', value: '20' },
    { date: '>2 <=3 years', value: '30' },
    { date: '>3 <=4years', value: '40' },
    { date: '>4 <=5 years', value: '50' },
    { date: '>5 <=6 years', value: '55' },
    { date: '>6 <=7 years', value: '60' },
    { date: '>7 <=8 years', value: '65' }
];

export type CalculationResult = {
    crsp: number;
    depreciation: number;
    extra_depreciation: number;
    customs_value: number;
    import_duty: number;
    excise_value: number;
    excise_duty: number;
    vat_value: number;
    vat: number;
    rdl?: number;
    id_fees?: number;
    grand_total: number;
};

export function DirectTab() {
    const [result, setResult] = useState<CalculationResult | null>(null);

    return (
        <div className='mt-8 flex w-full flex-col gap-6 lg:flex-row'>
            <div className='flex w-full flex-col gap-3'>
                <p className='text-base capitalize lg:text-lg'>DEPRECIATION FOR DIRECT IMPORTS</p>

                <DirectCalculator onResult={setResult} />

                <p className='hidden text-base capitalize lg:flex lg:text-lg'>Years of Depreciation</p>

                <div className='hidden w-full grid-cols-2 gap-3 lg:grid lg:grid-cols-3'>
                    {depreciationYrs.map((invoice, index) => (
                        <div key={index} className='flex flex-row items-center justify-between rounded-md border p-2'>
                            <div className='text-sm'>{invoice.date}</div>
                            <div className='text-base font-medium'>{invoice.value} %</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex w-full flex-col gap-3'>
                <div className='mx-auto flex flex-col gap-3'>
                    <p className='text-start text-sm'>
                        The numbers have been formatted and rounded off. Please factor that when doing calculations.
                    </p>
                    <div className='align-center mx-auto flex flex-row items-center justify-center gap-3'>
                        <p className='text-center text-sm'> 8232266.55</p>
                        <ArrowRightLeft className='align-center h-4 w-4 items-center justify-center' />
                        <p className='text-center text-sm'> 8232267</p>
                    </div>
                </div>

                <Alert className='border-amber-80 bg-amber-50 text-amber-900 dark:border-amber-950 dark:bg-amber-950 dark:text-amber-100'>
                    <CheckCircle2Icon />
                    <AlertTitle>Valuation Calculation</AlertTitle>
                    <AlertDescription>
                        In KRA's official file, some fields are indicated differently from values in formulas. The
                        values in formulas were used.
                    </AlertDescription>
                </Alert>

                <Card className='!gap-0 rounded-sm !py-0 shadow-none'>
                    <CardHeader className='flex flex-row items-center border-b px-6 py-3'>
                        <div className='flex flex-1 flex-col justify-center gap-1'>
                            <CardTitle>Current Retail Selling Price</CardTitle>
                            <CardDescription>Obtained from seller</CardDescription>
                        </div>
                        <div className='flex'>
                            <span className='dar:text-blue-600 text-lg leading-none font-bold text-blue-800'>
                                {formatWithCommas(result?.crsp || 0)}
                            </span>
                        </div>
                    </CardHeader>

                    <CardHeader className='flex flex-row items-center border-b px-6 py-3'>
                        <div className='flex flex-1 flex-col justify-center gap-1'>
                            <CardTitle>Depreciation </CardTitle>
                        </div>
                        <div className='flex'>
                            <span className='dar:text-blue-600 text-lg leading-none font-bold text-blue-800'>
                                {result?.depreciation || 0}%
                            </span>
                        </div>
                    </CardHeader>

                    <CardHeader className='flex flex-row items-center border-b px-6 py-3'>
                        <div className='flex flex-1 flex-col justify-center gap-1'>
                            <CardTitle>Extra Depreciation </CardTitle>
                        </div>
                        <div className='flex'>
                            <span className='dar:text-blue-600 text-lg leading-none font-bold text-blue-800'>
                                {result?.extra_depreciation || 0}%
                            </span>
                        </div>
                    </CardHeader>

                    <CardHeader className='flex flex-row items-center border-b px-6 py-3'>
                        <div className='flex flex-1 flex-col justify-center gap-1'>
                            <CardTitle>Customs Value </CardTitle>
                        </div>
                        <div className='flex'>
                            <span className='dar:text-blue-600 text-lg leading-none font-bold text-blue-800'>
                                {formatWithCommas(result?.customs_value || 0)}
                            </span>
                        </div>
                    </CardHeader>

                    <CardHeader className='flex flex-row items-center border-b px-6 py-3'>
                        <div className='flex flex-1 flex-col justify-center gap-1'>
                            <CardTitle>Import Duty</CardTitle>
                        </div>
                        <div className='flex'>
                            <span className='dar:text-blue-600 text-lg leading-none font-bold text-blue-800'>
                                {formatWithCommas(result?.import_duty || 0)}
                            </span>
                        </div>
                    </CardHeader>

                    <CardHeader className='flex flex-row items-center border-b px-6 py-3'>
                        <div className='flex flex-1 flex-col justify-center gap-1'>
                            <CardTitle>Excise Value </CardTitle>
                        </div>
                        <div className='flex'>
                            <span className='dar:text-blue-600 text-lg leading-none font-bold text-blue-800'>
                                {formatWithCommas(result?.excise_value || 0)}
                            </span>
                        </div>
                    </CardHeader>

                    <CardHeader className='flex flex-row items-center border-b px-6 py-3'>
                        <div className='flex flex-1 flex-col justify-center gap-1'>
                            <CardTitle>Excise Duty</CardTitle>
                        </div>
                        <div className='flex'>
                            <span className='dar:text-blue-600 text-lg leading-none font-bold text-blue-800'>
                                {formatWithCommas(result?.excise_duty || 0)}
                            </span>
                        </div>
                    </CardHeader>

                    <CardHeader className='flex flex-row items-center border-b px-6 py-3'>
                        <div className='flex flex-1 flex-col justify-center gap-1'>
                            <CardTitle>VAT Value </CardTitle>
                        </div>
                        <div className='flex'>
                            <span className='dar:text-blue-600 text-lg leading-none font-bold text-blue-800'>
                                {formatWithCommas(result?.vat_value || 0)}
                            </span>
                        </div>
                    </CardHeader>

                    <CardHeader className='flex flex-row items-center border-b px-6 py-3'>
                        <div className='flex flex-1 flex-col justify-center gap-1'>
                            <CardTitle>VAT</CardTitle>
                        </div>
                        <div className='flex'>
                            <span className='dar:text-blue-600 text-lg leading-none font-bold text-blue-800'>
                                {formatWithCommas(result?.vat || 0)}
                            </span>
                        </div>
                    </CardHeader>

                    <CardHeader className='flex flex-row items-center border-b px-6 py-3'>
                        <div className='flex flex-1 flex-col justify-center gap-1'>
                            <CardTitle>RDL </CardTitle>
                        </div>
                        <div className='flex'>
                            <span className='dar:text-blue-600 text-lg leading-none font-bold text-blue-800'>
                                {formatWithCommas(result?.rdl || 0)}
                            </span>
                        </div>
                    </CardHeader>

                    <CardHeader className='flex flex-row items-center border-b px-6 py-3'>
                        <div className='flex flex-1 flex-col justify-center gap-1'>
                            <CardTitle>IDF Fees </CardTitle>
                        </div>
                        <div className='flex'>
                            <span className='dar:text-blue-600 text-lg leading-none font-bold text-blue-800'>
                                {formatWithCommas(result?.id_fees || 0)}
                            </span>
                        </div>
                    </CardHeader>

                    <CardHeader className='flex flex-row items-center bg-blue-50 px-6 py-3 dark:bg-neutral-800'>
                        <div className='flex flex-1 flex-col justify-center gap-1'>
                            <CardTitle>Grand Total </CardTitle>
                        </div>
                        <div className='flex'>
                            <span className='dar:text-blue-600 text-lg leading-none font-bold text-blue-800'>
                                {formatWithCommas(result?.grand_total || 0)}
                            </span>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
}
