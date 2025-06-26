import Image from 'next/image';

import ExtensionDetails from '@/app/(components)/ExtensionDetails';
import SetupDetails from '@/app/(components)/SetupDetails';
import { CheckboxDemo } from '@/components/checkbox-demo';
import { Checkbox } from '@/registry/new-york-v4/ui/checkbox';
import { Label } from '@/registry/new-york-v4/ui/label';

const Disclaimer: React.FC = () => {
    return (
        <div className='row-start-2 flex flex-col items-center justify-center gap-8 sm:items-start'>
            <Label className='hover:bg-accent/50 flex items-center justify-center gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950'>
                <div className='grid gap-1.5 font-normal'>
                    <Checkbox
                        id='toggle-2'
                        defaultChecked
                        className='h-1 w-1 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700'
                    />
                    <h2 className='text-center text-base lg:text-lg'>
                        This calculator provides an estimated calculation for informational purposes only and does not
                        constitute official advice. Actual duties, taxes, and fees may vary based on KRA regulations and
                        assessments. Always consult with an authorized customs agent or the Kenya Revenue Authority for
                        accurate and up-to-date information.
                    </h2>

                    <div className='flex flex-col items-center justify-center gap-4 lg:flex-row'>
                        <a
                            className='flex h-10 w-full flex-wrap items-center justify-center gap-2 gap-x-3 rounded-full border border-solid border-transparent bg-blue-500 px-4 text-sm text-neutral-100 transition-colors hover:bg-blue-800 sm:h-12 sm:px-5 sm:text-base lg:w-fit dark:bg-neutral-700 dark:hover:bg-neutral-600'
                            href='tel:+254 714 633 841'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Contact Me
                        </a>
                        <a
                            className='flex h-10 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base lg:w-fit dark:border-white/[.145] dark:hover:bg-[#1a1a1a]'
                            href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjLv7myiI-OAxX7Q6QEHTBxNBMQFnoECDUQAQ&url=https%3A%2F%2Fwww.kra.go.ke%2Fimages%2Fpublications%2FNew-CRSP---July-2025.xlsx&usg=AOvVaw171QtI5D2MeFkgd27AuiKG&opi=89978449'
                            target='_blank'
                            rel='noopener noreferrer'>
                            View File
                        </a>
                    </div>
                </div>
            </Label>
        </div>
    );
};

export default Disclaimer;
