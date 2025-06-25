'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Calendar } from '@/registry/new-york-v4/ui/calendar';
import { Checkbox } from '@/registry/new-york-v4/ui/checkbox';
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
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york-v4/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/registry/new-york-v4/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york-v4/ui/select';
import { Switch } from '@/registry/new-york-v4/ui/switch';
import { Textarea } from '@/registry/new-york-v4/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const items = [
    {
        id: 'recents',
        label: 'Recents'
    },
    {
        id: 'home',
        label: 'Home'
    },
    {
        id: 'applications',
        label: 'Applications'
    },
    {
        id: 'desktop',
        label: 'Desktop'
    },
    {
        id: 'downloads',
        label: 'Downloads'
    },
    {
        id: 'documents',
        label: 'Documents'
    }
] as const;

// Customs value
function customsValue1(crsp: number, depreciationPercent: number, extraDepreciationPercent: number): number {
    const depreciation = depreciationPercent / 100;
    const extraDepreciation = extraDepreciationPercent / 100;

    return (((crsp / 1.25) * (1 - depreciation)) / 1.35 / 1.2 / 1.16) * (1 - extraDepreciation);
}

function importDuty1(crsp: number, depreciationPercent: number, extraDepreciationPercent: number): number {
    const depreciation = depreciationPercent / 100;
    const extraDepreciation = extraDepreciationPercent / 100;

    return (((crsp / 1.25) * (1 - depreciation)) / 1.35 / 1.2 / 1.16) * (1 - extraDepreciation);
}

const FormSchema = z.object({
    crsp: z.coerce
        .number({
            required_error: 'CRSP is required',
            invalid_type_error: 'CRSP must be a number'
        })
        .refine((val) => `${val}`.length === 3, 'CRSP must be at least 3 characters'),

    depreciation: z.coerce
        .number({
            required_error: 'Depreciation is required',
            invalid_type_error: 'Depreciation must be a number'
        })
        .refine((val) => `${val}`.length === 1, 'Depreciation must be at least 1 character'),

    extra_depreciation: z.coerce
        .number({
            // required_error: 'Depreciation is required',
            // invalid_type_error: 'Extra Depreciation must be a number'
        })
        .optional(),
    // .refine((val) => `${val}`.length === 1, 'Extra Depreciation must be at least 1 character'),

    // crsp: z.number().min(3, {
    //     message: 'CRSP must be at least 3 characters.'
    // }),
    // bio: z
    //     .string()
    //     .min(10, {
    //         message: 'Bio must be at least 10 characters.'
    //     })
    //     .max(160, {
    //         message: 'Bio must not be longer than 30 characters.'
    //     }),
    // email: z
    //     .string({
    //         required_error: 'Please select an email to display.'
    //     })
    //     .email(),
    type: z.enum(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'], {
        required_error: 'You need to select a tabulation type.'
    })
    // mobile: z.boolean().default(false).optional(),
    // items: z.array(z.string()).refine((value) => value.some((item) => item), {
    //     message: 'You have to select at least one item.'
    // }),
    // dob: z.date({
    //     required_error: 'A date of birth is required.'
    // }),
    // marketing_emails: z.boolean().default(false).optional(),
    // security_emails: z.boolean()
});

export function DirectCalculator() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema)
        // defaultValues: {
        //     items: ['recents', 'home']
        // }
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast('You submitted the following values:', {
            description: (
                <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
                    <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
                </pre>
            )
        });
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
                                        <FormLabel className='font-normal'>
                                            TABULATION FOR AMBULANCE-Direct Imports
                                        </FormLabel>
                                    </FormItem>{' '}
                                    <FormItem className='flex items-center gap-2'>
                                        <FormControl>
                                            <RadioGroupItem value='9' />
                                        </FormControl>
                                        <FormLabel className='font-normal'>
                                            TABULATION FOR Motor Cycles-Direct imports
                                        </FormLabel>
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
                            <FormLabel>Current Retail Selling price</FormLabel>
                            <FormControl>
                                <Input type='number' min='1' placeholder='Current Retail Selling price' {...field} />
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
                            <FormControl>
                                <Input type='number' min='1' placeholder='Depreciation' {...field} />
                            </FormControl>
                            <FormDescription>Depreciation rate (Will be treated as a percentage).</FormDescription>
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

                {/* 

                <FormField
                    control={form.control}
                    name='customs'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Customs value </FormLabel>
                            <FormControl>
                                <Input type='number' min='1' placeholder='Customs value' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}

                {/* <FormField
                    control={form.control}
                    name='import_duty'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Extra Depreciation</FormLabel>
                            <FormControl>
                                <Input type='number' min='1' placeholder='Import Duty 35%' {...field} />
                            </FormControl>
                            <FormDescription>
                                Extra Depreciation rate (Will be treated as a percentage).
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}

                {/* <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder='Select a verified email to display' />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value='m@example.com'>m@example.com</SelectItem>
                                    <SelectItem value='m@google.com'>m@google.com</SelectItem>
                                    <SelectItem value='m@support.com'>m@support.com</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormDescription>You can manage email addresses in your email settings.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='bio'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder='Tell us a little bit about yourself'
                                    className='resize-none'
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                You can <span>@mention</span> other users and organizations.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='mobile'
                    render={({ field }) => (
                        <FormItem className='flex flex-row items-start gap-3 rounded-md border p-4 shadow-xs'>
                            <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className='flex flex-col gap-1'>
                                <FormLabel className='leading-snug'>
                                    Use different settings for my mobile devices
                                </FormLabel>
                                <FormDescription className='leading-snug'>
                                    You can manage your mobile notifications in the mobile settings page.
                                </FormDescription>
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='items'
                    render={() => (
                        <FormItem className='flex flex-col gap-4'>
                            <div>
                                <FormLabel className='text-base'>Sidebar</FormLabel>
                                <FormDescription>Select the items you want to display in the sidebar.</FormDescription>
                            </div>
                            <div className='flex flex-col gap-2'>
                                {items.map((item) => (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name='items'
                                        render={({ field }) => {
                                            return (
                                                <FormItem key={item.id} className='flex items-start gap-3'>
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value?.includes(item.id)}
                                                            onCheckedChange={(checked) => {
                                                                return checked
                                                                    ? field.onChange([...field.value, item.id])
                                                                    : field.onChange(
                                                                          field.value?.filter(
                                                                              (value) => value !== item.id
                                                                          )
                                                                      );
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className='text-sm leading-tight font-normal'>
                                                        {item.label}
                                                    </FormLabel>
                                                </FormItem>
                                            );
                                        }}
                                    />
                                ))}
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='dob'
                    render={({ field }) => (
                        <FormItem className='flex flex-col'>
                            <FormLabel>Date of birth</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={'outline'}
                                            className={cn(
                                                'w-[240px] pl-3 text-left font-normal',
                                                !field.value && 'text-muted-foreground'
                                            )}>
                                            {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                                            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className='w-auto p-0' align='start'>
                                    <Calendar
                                        mode='single'
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormDescription>Your date of birth is used to calculate your age.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div>
                    <h3 className='mb-4 text-lg font-medium'>Email Notifications</h3>
                    <div className='flex flex-col gap-4'>
                        <FormField
                            control={form.control}
                            name='marketing_emails'
                            render={({ field }) => (
                                <FormItem className='flex flex-row items-start justify-between rounded-lg border p-4 shadow-xs'>
                                    <div className='flex flex-col gap-0.5'>
                                        <FormLabel className='leading-normal'>Marketing emails</FormLabel>
                                        <FormDescription className='leading-snug'>
                                            Receive emails about new products, features, and more.
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='security_emails'
                            render={({ field }) => (
                                <FormItem className='flex flex-row items-start justify-between rounded-lg border p-4 shadow-xs'>
                                    <div className='flex flex-col gap-0.5 opacity-60'>
                                        <FormLabel className='leading-normal'>Security emails</FormLabel>
                                        <FormDescription className='leading-snug'>
                                            Receive emails about your account security.
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            disabled
                                            aria-readonly
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div> */}
                <Button type='submit'>Submit</Button>
            </form>
        </Form>
    );
}
