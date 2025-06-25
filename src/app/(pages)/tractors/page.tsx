import Disclaimer from '../../(components)/Disclaimer';
import { columns } from './columns';
import { getData } from './data';
import { DataTable } from './data-table';
import { ArrowRightLeft } from 'lucide-react';

export default async function Page() {
    const data = await getData();

    return (
        <main className='mx-auto mt-6 flex max-w-7xl flex-col justify-center gap-6 px-3 font-[family-name:var(--font-geist-sans)] sm:mt-12 sm:gap-12 sm:px-0'>
            <div className='mx-auto flex flex-col gap-3'>
                <h2 className='text-center text-base font-bold lg:text-2xl'>Tractors & Graders.</h2>
                <p className='text-center text-base lg:text-lg'>
                    The numbers have been formatted and rounded off. Please factor that when doing calculations.
                </p>
                <div className='align-center mx-auto flex flex-row items-center justify-center gap-3'>
                    <p className='text-center text-base lg:text-lg'> 8232266.55</p>
                    <ArrowRightLeft className='align-center h-4 w-4 items-center justify-center' />
                    <p className='text-center text-base lg:text-lg'> 8232267</p>
                </div>
            </div>
            {/* <Disclaimer /> */}
            <DataTable columns={columns} data={data} />
        </main>
    );
}
