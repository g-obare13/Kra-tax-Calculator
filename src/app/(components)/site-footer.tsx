import { Logo } from './NavigationBar';

export function SiteFooter() {
    return (
        <footer className='border-grid mt-12 border-t py-6 pb-12 font-sans md:py-0'>
            <div className='container-wrapper'>
                <div className='align-center container items-center justify-center py-4'>
                    {/* <Logo className='mx-auto flex items-center justify-center bg-black' /> */}
                    <div className='text-muted-foreground items-center text-center text-sm leading-loose text-balance'>
                        Built by{' '}
                        <a
                            href={'https://www.linkedin.com/in/obare13/'}
                            target='_blank'
                            rel='noreferrer'
                            className='font-bold underline underline-offset-4'>
                            Obare Geoffrey
                        </a>
                        . You can reach me on{' '}
                        <a
                            href={'mailto:obaregeoffrey78@gmail.com'}
                            target='_blank'
                            rel='noreferrer'
                            className='font-bold underline underline-offset-4'>
                            Email
                        </a>
                        .
                    </div>
                </div>
            </div>
        </footer>
    );
}
