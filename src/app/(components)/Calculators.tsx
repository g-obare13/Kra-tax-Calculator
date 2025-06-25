import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Label } from '@/registry/new-york-v4/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';

import { AppWindowIcon, CodeIcon } from 'lucide-react';

export function Calculator() {
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
                    <Card>
                        <CardHeader>
                            <CardTitle>Account</CardTitle>
                            <CardDescription>
                                Make changes to your account here. Click save when you&apos;re done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='grid gap-6'>
                            <div className='grid gap-3'>
                                <Label htmlFor='tabs-demo-name'>Name</Label>
                                <Input id='tabs-demo-name' defaultValue='Pedro Duarte' />
                            </div>
                            <div className='grid gap-3'>
                                <Label htmlFor='tabs-demo-username'>Username</Label>
                                <Input id='tabs-demo-username' defaultValue='@peduarte' />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value='previous'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you&apos;ll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='grid gap-6'>
                            <div className='grid gap-3'>
                                <Label htmlFor='tabs-demo-current'>Current password</Label>
                                <Input id='tabs-demo-current' type='password' />
                            </div>
                            <div className='grid gap-3'>
                                <Label htmlFor='tabs-demo-new'>New password</Label>
                                <Input id='tabs-demo-new' type='password' />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
