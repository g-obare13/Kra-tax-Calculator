import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';

import { DirectTab } from './DirectTab';
import { PreviousTab } from './PreviousTab';

export function TabsComponent() {
    return (
        <div className='flex w-full flex-col gap-6'>
            <Tabs defaultValue='direct' className='w-full'>
                <TabsList className='w-full'>
                    <TabsTrigger value='direct' className='w-full'>
                        Direct Imports
                    </TabsTrigger>
                    <TabsTrigger value='previous' className='w-full'>
                        Previously Registered
                    </TabsTrigger>
                </TabsList>
                <TabsContent value='direct'>
                    <DirectTab />
                </TabsContent>
                <TabsContent value='previous'>
                    <PreviousTab />
                </TabsContent>
            </Tabs>
        </div>
    );
}
