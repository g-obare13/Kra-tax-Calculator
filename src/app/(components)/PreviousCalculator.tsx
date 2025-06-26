'use client';

import { Button } from '@/registry/new-york-v4/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/registry/new-york-v4/ui/form';
import { Input } from '@/registry/new-york-v4/ui/input';
import { RadioGroup, RadioGroupItem } from '@/registry/new-york-v4/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york-v4/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';

import { CalculationResult } from './DirectTab';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Am just lazy --> convert to a reusable function

// Customs value
export function customsValue1(crsp: number, depreciation: number, extra_depreciation: number): number {
    const base = crsp / 1.25;
    const depreciationFactor = 1 - depreciation / 100;
    const extraDepFactor = 1 - extra_depreciation / 100;

    return ((base * depreciationFactor) / 1.35 / 1.2 / 1.16) * extraDepFactor;
}

function customsValue2(crsp: number, depreciationPercent: number, extraDepreciationPercent: number): number {
    const depreciation = depreciationPercent / 100;
    const extraDepreciation = extraDepreciationPercent / 100;

    return (((crsp / 1.25) * (1 - depreciation)) / 1.35 / 1.25 / 1.16) * (1 - extraDepreciation);
}

function customsValue3(crsp: number, depreciationPercent: number, extraDepreciationPercent: number): number {
    const depreciation = depreciationPercent / 100;
    const extraDepreciation = extraDepreciationPercent / 100;

    return (((crsp / 1.25) * (1 - depreciation)) / 1.35 / 1.35 / 1.16) * (1 - extraDepreciation);
}

export function customsValue4(crsp: number, depreciation: number, extra_depreciation: number): number {
    const base = crsp / 1.25;
    const depreciationFactor = 1 - depreciation / 100;
    const extraDepFactor = 1 - extra_depreciation / 100;

    return ((base * depreciationFactor) / 1.35 / 1.1 / 1.16) * extraDepFactor;
}

function customsValue5(crsp: number, depreciationPercent: number, extraDepreciationPercent: number): number {
    const depreciation = depreciationPercent / 100;
    const extraDepreciation = extraDepreciationPercent / 100;

    return (((crsp / 1.25) * (1 - depreciation)) / 1.35 / 1.25 / 1.16) * (1 - extraDepreciation);
}

function customsValue6(crsp: number, depreciationPercent: number, extraDepreciationPercent: number): number {
    const depreciation = depreciationPercent / 100;
    const extraDepreciation = extraDepreciationPercent / 100;

    return (((crsp / 1.25) * (1 - depreciation)) / 1.35 / 1.16) * (1 - extraDepreciation);
}

function customsValue7(crsp: number, depreciationPercent: number, extraDepreciationPercent: number): number {
    const depreciation = depreciationPercent / 100;
    const extraDepreciation = extraDepreciationPercent / 100;

    return (((crsp / 1.25) * (1 - depreciation)) / 1.35 / 1.16) * (1 - extraDepreciation);
}

function customsValue8(crsp: number, depreciationPercent: number, extraDepreciationPercent: number): number {
    const depreciation = depreciationPercent / 100;
    const extraDepreciation = extraDepreciationPercent / 100;

    return (((crsp / 1.25) * (1 - depreciation)) / 1.25 / 1.16) * (1 - extraDepreciation);
}

function customsValue9(crsp: number, depreciationPercent: number, extraDepreciationPercent: number): number {
    const depreciation = depreciationPercent / 100;
    const extraDepreciation = extraDepreciationPercent / 100;

    return (((crsp / 1.25) * (1 - depreciation)) / 1.25 / 1.16) * (1 - extraDepreciation);
}

function customsValue10(crsp: number, depreciationPercent: number, extraDepreciationPercent: number): number {
    const depreciation = depreciationPercent / 100;
    const extraDepreciation = extraDepreciationPercent / 100;

    return (((crsp / 1.25) * (1 - depreciation)) / 1.16) * (1 - extraDepreciation);
}

function customsValue11(crsp: number, depreciationPercent: number, extraDepreciationPercent: number): number {
    const depreciation = depreciationPercent / 100;
    const extraDepreciation = extraDepreciationPercent / 100;

    return (((crsp / 1.25) * (1 - depreciation)) / 1.16) * (1 - extraDepreciation);
}

function percentFunction(value: number, percent: number): number {
    return value * (percent / 100);
}

export const depreciationYrs = [
    { date: '1 year', value: '20' },
    { date: '2 years', value: '35' },
    { date: '3 years', value: '50' },
    { date: '4 years', value: '60' },
    { date: '5 years', value: '70' },
    { date: '6 years', value: '75' },
    { date: '7 years', value: '80' },
    { date: '8 years', value: '83' },
    { date: '9 years', value: '86' },
    { date: '10 years', value: '89' },
    { date: '11 years', value: '90' },
    { date: '12 years', value: '91' },
    { date: '13 years', value: '92' },
    { date: '14 years', value: '93' },
    { date: '15 years', value: '94' },
    { date: 'over 15 years', value: '95' }
];

const FormSchema = z.object({
    crsp: z.coerce.number({
        required_error: 'CRSP is required',
        invalid_type_error: 'CRSP must be a number'
    }),

    depreciation: z.string({
        required_error: 'Depreciation is required'
    }),

    extra_depreciation: z.coerce.number({}).optional(),
    type: z.enum(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'], {
        required_error: 'You need to select a tabulation type.'
    })
});

type Props = {
    onResult: (value: CalculationResult) => void;
};

function round(value: number): number {
    return Math.round(value);
}

export const formatWithCommas = (value: string | number) => {
    if (value === undefined || value === null) return '';
    const str = value.toString().replace(/[^\d]/g, '');

    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export function PreviousCalculator({ onResult }: Props) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema)
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        if (data.type === '1') {
            const crsp = Number(data.crsp) || 0;
            const depreciation = Number(data.depreciation) || 0;
            const extra_depreciation = Number(data.extra_depreciation) || 0;

            const customs_value_raw = customsValue1(crsp, depreciation, extra_depreciation);
            const import_duty_raw = percentFunction(customs_value_raw, 35);
            const excise_value_raw = customs_value_raw + import_duty_raw;
            const excise_duty_raw = percentFunction(excise_value_raw, 20);
            const vat_value_raw = customs_value_raw + import_duty_raw + excise_duty_raw;
            const vat_raw = percentFunction(vat_value_raw, 16);

            const grand_total_raw = import_duty_raw + excise_duty_raw + vat_raw;

            const result: CalculationResult = {
                crsp,
                depreciation,
                extra_depreciation,
                customs_value: Math.round(customs_value_raw),
                import_duty: Math.round(import_duty_raw),
                excise_value: Math.round(excise_value_raw),
                excise_duty: Math.round(excise_duty_raw),
                vat_value: Math.round(vat_value_raw),
                vat: Math.round(vat_raw),
                grand_total: Math.round(grand_total_raw)
            };

            onResult(result);

            return onResult;
        }

        if (data.type === '2') {
            const crsp = Number(data.crsp) || 0;
            const depreciation = Number(data.depreciation) || 0;
            const extra_depreciation = Number(data.extra_depreciation) || 0;

            const customs_value_raw = customsValue2(crsp, depreciation, extra_depreciation);
            const import_duty_raw = percentFunction(customs_value_raw, 35);
            const excise_value_raw = customs_value_raw + import_duty_raw;
            const excise_duty_raw = percentFunction(excise_value_raw, 25);
            const vat_value_raw = customs_value_raw + import_duty_raw + excise_duty_raw;
            const vat_raw = percentFunction(vat_value_raw, 16);

            const grand_total_raw = import_duty_raw + excise_duty_raw + vat_raw;

            const result: CalculationResult = {
                crsp,
                depreciation,
                extra_depreciation,
                customs_value: Math.round(customs_value_raw),
                import_duty: Math.round(import_duty_raw),
                excise_value: Math.round(excise_value_raw),
                excise_duty: Math.round(excise_duty_raw),
                vat_value: Math.round(vat_value_raw),
                vat: Math.round(vat_raw),

                grand_total: Math.round(grand_total_raw)
            };

            onResult(result);

            return onResult;
        }

        if (data.type === '3') {
            const crsp = Number(data.crsp) || 0;
            const depreciation = Number(data.depreciation) || 0;
            const extra_depreciation = Number(data.extra_depreciation) || 0;

            const customs_value_raw = customsValue3(crsp, depreciation, extra_depreciation);
            const import_duty_raw = percentFunction(customs_value_raw, 35);
            const excise_value_raw = customs_value_raw + import_duty_raw;
            const excise_duty_raw = percentFunction(excise_value_raw, 35);
            const vat_value_raw = customs_value_raw + import_duty_raw + excise_duty_raw;
            const vat_raw = percentFunction(vat_value_raw, 16);

            const grand_total_raw = import_duty_raw + excise_duty_raw + vat_raw;

            const result: CalculationResult = {
                crsp,
                depreciation,
                extra_depreciation,
                customs_value: Math.round(customs_value_raw),
                import_duty: Math.round(import_duty_raw),
                excise_value: Math.round(excise_value_raw),
                excise_duty: Math.round(excise_duty_raw),
                vat_value: Math.round(vat_value_raw),
                vat: Math.round(vat_raw),

                grand_total: Math.round(grand_total_raw)
            };

            onResult(result);

            return onResult;
        }

        if (data.type === '4') {
            const crsp = Number(data.crsp) || 0;
            const depreciation = Number(data.depreciation) || 0;
            const extra_depreciation = Number(data.extra_depreciation) || 0;

            const customs_value_raw = customsValue4(crsp, depreciation, extra_depreciation);
            const import_duty_raw = percentFunction(customs_value_raw, 25);
            const excise_value_raw = customs_value_raw + import_duty_raw;
            const excise_duty_raw = percentFunction(excise_value_raw, 10);
            const vat_value_raw = customs_value_raw + import_duty_raw + excise_duty_raw;
            const vat_raw = percentFunction(vat_value_raw, 16);

            const grand_total_raw = import_duty_raw + excise_duty_raw + vat_raw;

            const result: CalculationResult = {
                crsp,
                depreciation,
                extra_depreciation,
                customs_value: Math.round(customs_value_raw),
                import_duty: Math.round(import_duty_raw),
                excise_value: Math.round(excise_value_raw),
                excise_duty: Math.round(excise_duty_raw),
                vat_value: Math.round(vat_value_raw),
                vat: Math.round(vat_raw),

                grand_total: Math.round(grand_total_raw)
            };

            onResult(result);

            return onResult;
        }

        if (data.type === '5') {
            const crsp = Number(data.crsp) || 0;
            const depreciation = Number(data.depreciation) || 0;
            const extra_depreciation = Number(data.extra_depreciation) || 0;

            const customs_value_raw = customsValue5(crsp, depreciation, extra_depreciation);
            const import_duty_raw = percentFunction(customs_value_raw, 35);
            const excise_value_raw = customs_value_raw + import_duty_raw;
            const excise_duty_raw = percentFunction(excise_value_raw, 25);
            const vat_value_raw = customs_value_raw + import_duty_raw + excise_duty_raw;
            const vat_raw = percentFunction(vat_value_raw, 16);

            const grand_total_raw = import_duty_raw + excise_duty_raw + vat_raw;

            const result: CalculationResult = {
                crsp,
                depreciation,
                extra_depreciation,
                customs_value: Math.round(customs_value_raw),
                import_duty: Math.round(import_duty_raw),
                excise_value: Math.round(excise_value_raw),
                excise_duty: Math.round(excise_duty_raw),
                vat_value: Math.round(vat_value_raw),
                vat: Math.round(vat_raw),

                grand_total: Math.round(grand_total_raw)
            };

            onResult(result);

            return onResult;
        }

        if (data.type === '6') {
            const crsp = Number(data.crsp) || 0;
            const depreciation = Number(data.depreciation) || 0;
            const extra_depreciation = Number(data.extra_depreciation) || 0;

            const customs_value_raw = customsValue6(crsp, depreciation, extra_depreciation);
            const import_duty_raw = percentFunction(customs_value_raw, 25);
            const excise_value_raw = customs_value_raw + import_duty_raw;
            const excise_duty_raw = percentFunction(excise_value_raw, 0);
            const vat_value_raw = customs_value_raw + import_duty_raw + excise_duty_raw;
            const vat_raw = percentFunction(vat_value_raw, 16);

            const grand_total_raw = import_duty_raw + excise_duty_raw + vat_raw;

            const result: CalculationResult = {
                crsp,
                depreciation,
                extra_depreciation,
                customs_value: Math.round(customs_value_raw),
                import_duty: Math.round(import_duty_raw),
                excise_value: Math.round(excise_value_raw),
                excise_duty: Math.round(excise_duty_raw),
                vat_value: Math.round(vat_value_raw),
                vat: Math.round(vat_raw),

                grand_total: Math.round(grand_total_raw)
            };

            onResult(result);

            return onResult;
        }

        if (data.type === '7') {
            const crsp = Number(data.crsp) || 0;
            const depreciation = Number(data.depreciation) || 0;
            const extra_depreciation = Number(data.extra_depreciation) || 0;

            const customs_value_raw = customsValue7(crsp, depreciation, extra_depreciation);
            const import_duty_raw = percentFunction(customs_value_raw, 35);
            const excise_value_raw = customs_value_raw + import_duty_raw;
            const excise_duty_raw = percentFunction(excise_value_raw, 0);
            const vat_value_raw = customs_value_raw + import_duty_raw + excise_duty_raw;
            const vat_raw = percentFunction(vat_value_raw, 16);

            const grand_total_raw = import_duty_raw + excise_duty_raw + vat_raw;

            const result: CalculationResult = {
                crsp,
                depreciation,
                extra_depreciation,
                customs_value: Math.round(customs_value_raw),
                import_duty: Math.round(import_duty_raw),
                excise_value: Math.round(excise_value_raw),
                excise_duty: Math.round(excise_duty_raw),
                vat_value: Math.round(vat_value_raw),
                vat: Math.round(vat_raw),

                grand_total: Math.round(grand_total_raw)
            };

            onResult(result);

            return onResult;
        }

        if (data.type === '8') {
            const crsp = Number(data.crsp) || 0;
            const depreciation = Number(data.depreciation) || 0;
            const extra_depreciation = Number(data.extra_depreciation) || 0;

            const customs_value_raw = customsValue8(crsp, depreciation, extra_depreciation);
            const import_duty_raw = percentFunction(customs_value_raw, 0);
            const excise_value_raw = customs_value_raw + import_duty_raw;
            const excise_duty_raw = percentFunction(excise_value_raw, 25);
            const vat_value_raw = customs_value_raw + import_duty_raw + excise_duty_raw;
            const vat_raw = percentFunction(vat_value_raw, 16);

            const grand_total_raw = import_duty_raw + excise_duty_raw + vat_raw;

            const result: CalculationResult = {
                crsp,
                depreciation,
                extra_depreciation,
                customs_value: Math.round(customs_value_raw),
                import_duty: Math.round(import_duty_raw),
                excise_value: Math.round(excise_value_raw),
                excise_duty: Math.round(excise_duty_raw),
                vat_value: Math.round(vat_value_raw),
                vat: Math.round(vat_raw),

                grand_total: Math.round(grand_total_raw)
            };

            onResult(result);

            return onResult;
        }

        if (data.type === '9') {
            const crsp = Number(data.crsp) || 0;
            const depreciation = Number(data.depreciation) || 0;
            const extra_depreciation = Number(data.extra_depreciation) || 0;

            const customs_value_raw = customsValue9(crsp, depreciation, extra_depreciation);
            const import_duty_raw = percentFunction(customs_value_raw, 25);
            const excise_value_raw = 0;
            const excise_duty_raw = 12952.83;
            const vat_value_raw = customs_value_raw + import_duty_raw + excise_duty_raw;
            const vat_raw = percentFunction(vat_value_raw, 16);

            const grand_total_raw = import_duty_raw + excise_duty_raw + vat_raw;

            const result: CalculationResult = {
                crsp,
                depreciation,
                extra_depreciation,
                customs_value: Math.round(customs_value_raw),
                import_duty: Math.round(import_duty_raw),
                excise_value: Math.round(excise_value_raw),
                excise_duty: Math.round(excise_duty_raw),
                vat_value: Math.round(vat_value_raw),
                vat: Math.round(vat_raw),

                grand_total: Math.round(grand_total_raw)
            };

            onResult(result);

            return onResult;
        }

        if (data.type === '10') {
            const crsp = Number(data.crsp) || 0;
            const depreciation = Number(data.depreciation) || 0;
            const extra_depreciation = Number(data.extra_depreciation) || 0;

            const customs_value_raw = customsValue10(crsp, depreciation, extra_depreciation);
            const import_duty_raw = 0;
            const excise_value_raw = 0;
            const excise_duty_raw = 0;
            const vat_value_raw = customs_value_raw + excise_duty_raw;
            const vat_raw = percentFunction(vat_value_raw, 16);

            const grand_total_raw = import_duty_raw + excise_duty_raw + vat_raw;

            const result: CalculationResult = {
                crsp,
                depreciation,
                extra_depreciation,
                customs_value: Math.round(customs_value_raw),
                import_duty: Math.round(import_duty_raw),
                excise_value: Math.round(excise_value_raw),
                excise_duty: Math.round(excise_duty_raw),
                vat_value: Math.round(vat_value_raw),
                vat: Math.round(vat_raw),

                grand_total: Math.round(grand_total_raw)
            };

            onResult(result);

            return onResult;
        }

        if (data.type === '11') {
            const crsp = Number(data.crsp) || 0;
            const depreciation = Number(data.depreciation) || 0;
            const extra_depreciation = Number(data.extra_depreciation) || 0;

            const customs_value_raw = customsValue11(crsp, depreciation, extra_depreciation);
            const import_duty_raw = 0;
            const excise_value_raw = 0;
            const excise_duty_raw = 0;
            const vat_value_raw = customs_value_raw + excise_duty_raw;
            const vat_raw = percentFunction(vat_value_raw, 16);

            const grand_total_raw = import_duty_raw + excise_duty_raw + vat_raw;

            const result: CalculationResult = {
                crsp,
                depreciation,
                extra_depreciation,
                customs_value: Math.round(customs_value_raw),
                import_duty: Math.round(import_duty_raw),
                excise_value: Math.round(excise_value_raw),
                excise_duty: Math.round(excise_duty_raw),
                vat_value: Math.round(vat_value_raw),
                vat: Math.round(vat_raw),

                grand_total: Math.round(grand_total_raw)
            };

            onResult(result);

            return onResult;
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='mx-auto grid w-full gap-6 rounded-md border p-8'>
                <FormField
                    control={form.control}
                    name='type'
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-3'>
                            <FormLabel>Select Type tabulation</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className='flex flex-col gap-3'>
                                    <FormItem className='flex items-center gap-2'>
                                        <FormControl>
                                            <RadioGroupItem value='1' />
                                        </FormControl>
                                        <FormLabel className='font-normal'>
                                            TABULATION FOR MVs WITH ENGINE CAPACITY NOT EXCEEDING 1500CC (INCLUDING
                                            S/CAB PICK UPS/LORRIES/BUSES) BUT EXCLUDING SCHOOL BUSES FOR PUBLIC SCHOOLS
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className='flex items-center gap-2'>
                                        <FormControl>
                                            <RadioGroupItem value='2' />
                                        </FormControl>
                                        <FormLabel className='font-normal'>
                                            TABULATION FOR MVs (HS. 8702, 8703 AND 8704) WITH ENGINE RATING EXCEEDING
                                            1500CC (INCLUDING S/CAB PICK UPS/LORRIES/BUSES) AND EXCLUDING 8703.24.90 AND
                                            8703.33.90
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className='flex items-center gap-2'>
                                        <FormControl>
                                            <RadioGroupItem value='3' />
                                        </FormControl>
                                        <FormLabel className='font-normal'>
                                            TABULATION FOR MVs ( HS 8703.24.90 & 8703.33.90) WITH ENGINE RATING
                                            EXCEEDING 3000CC FOR PETROL AND EXCEEDING 2500CC FOR DIESEL
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className='flex items-center gap-2'>
                                        <FormControl>
                                            <RadioGroupItem value='4' />
                                        </FormControl>
                                        <FormLabel className='font-normal'>
                                            TABULATION FOR 100% ELECTRIC POWERED MOTOR VEHICLES FOR TRANSPORTATION OF
                                            PERSONS (HS 8702.40.11, 8702.40.19, 8702.40.21,8702.40.22, 8702.40.29,
                                            8702.40.91, 8702.40.99 AND 8703.80.00)
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className='flex items-center gap-2'>
                                        <FormControl>
                                            <RadioGroupItem value='5' />
                                        </FormControl>
                                        <FormLabel className='font-normal'>
                                            TABULATION FOR SCHOOL BUSES FOR PUBLIC SCHOOLS
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className='flex items-center gap-2'>
                                        <FormControl>
                                            <RadioGroupItem value='6' />
                                        </FormControl>
                                        <FormLabel className='font-normal'>
                                            TABULATION FOR MVs WITH NO EXCISE DUTY (PRIME MOVERS)
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className='flex items-center gap-2'>
                                        <FormControl>
                                            <RadioGroupItem value='7' />
                                        </FormControl>
                                        <FormLabel className='font-normal'>
                                            TABULATION FOR MVs WITH NO EXCISE DUTY (TRAILERS)
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className='flex items-center gap-2'>
                                        <FormControl>
                                            <RadioGroupItem value='8' />
                                        </FormControl>
                                        <FormLabel className='font-normal'>TABULATION FOR AMBULANCE</FormLabel>
                                    </FormItem>{' '}
                                    <FormItem className='flex items-center gap-2'>
                                        <FormControl>
                                            <RadioGroupItem value='9' />
                                        </FormControl>
                                        <FormLabel className='font-normal'>TABULATION FOR Motor Cycles</FormLabel>
                                    </FormItem>
                                    <FormItem className='flex items-center gap-2'>
                                        <FormControl>
                                            <RadioGroupItem value='10' />
                                        </FormControl>
                                        <FormLabel className='font-normal'>TABULATION FOR SPECIAL PURPOSE</FormLabel>
                                    </FormItem>
                                    <FormItem className='flex items-center gap-2'>
                                        <FormControl>
                                            <RadioGroupItem value='11' />
                                        </FormControl>
                                        <FormLabel className='font-normal'>TABULATION FOR HEAVY MACHINERIES</FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='crsp'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Current Retail Selling Price</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='Current Retail Selling Price'
                                    value={formatWithCommas(field.value)}
                                    onChange={(e) => {
                                        const raw = e.target.value.replace(/[^\d]/g, '');
                                        const numericValue = raw ? Number(raw) : '';
                                        field.onChange(numericValue); // store raw number in RHF
                                    }}
                                    inputMode='numeric'
                                />
                            </FormControl>
                            <FormDescription>This is the current total vehicle price from the seller.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='depreciation'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Depreciation</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder='Select a year of depreciation' />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {depreciationYrs.map((item, index) => (
                                        <SelectItem key={index} value={item.value} className='w-full font-sans'>
                                            <div className='flex w-full flex-row justify-between'>
                                                <div className='w-full'> {item.date}</div>
                                                <div className='pl-12 font-medium'> {item.value}%</div>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='extra_depreciation'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Extra Depreciation</FormLabel>
                            <FormControl>
                                <Input type='number' min='1' placeholder='Extra Depreciation' {...field} />
                            </FormControl>
                            <FormDescription>
                                Extra Depreciation rate (Will be treated as a percentage).
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type='submit'>Submit</Button>
            </form>
        </Form>
    );
}
