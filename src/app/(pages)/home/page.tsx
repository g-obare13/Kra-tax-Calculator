import { Calculator } from '@/app/(components)/Calculators';

import Disclaimer from '../../(components)/Disclaimer';

export default async function Page() {
    return (
        <main className='mx-auto mt-6 flex max-w-7xl flex-col justify-center gap-6 px-3 font-[family-name:var(--font-geist-sans)] sm:mt-12 sm:gap-12 sm:px-0'>
            <Disclaimer />
            <Calculator />
        </main>
    );
}
