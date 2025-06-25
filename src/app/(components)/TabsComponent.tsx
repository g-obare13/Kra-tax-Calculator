import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Label } from '@/registry/new-york-v4/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';

import { DirectTab } from './DirectTab';

export function TabsComponent() {
    return (
        <div className='flex w-full flex-col gap-6'>
            <Tabs defaultValue='direct' className='w-full'>
                <TabsList className='w-full'>
                    <TabsTrigger value='direct' className='w-full'>
                        Direct Imports to Kenya
                    </TabsTrigger>
                    <TabsTrigger value='previous' className='w-full'>
                        Previously registered in Kenya
                    </TabsTrigger>
                </TabsList>
                <TabsContent value='direct'>
                    <DirectTab />
                </TabsContent>
                <TabsContent value='previous'></TabsContent>
            </Tabs>
        </div>
    );
}
