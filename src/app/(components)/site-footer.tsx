export function SiteFooter() {
    return (
        <footer className='border-grid mt-12 border-t py-6 pb-12 font-sans md:py-0'>
            <div className='container-wrapper'>
                <div className='container py-4'>
                    <div className='text-muted-foreground text-center text-sm leading-loose text-balance'>
                        Built by{' '}
                        <a
                            href={'https://www.linkedin.com/in/obare13/'}
                            target='_blank'
                            rel='noreferrer'
                            className='font-medium underline underline-offset-4'>
                            Obare
                        </a>
                        . You can reach me at{' '}
                        <a
                            href={'mailto:obaregeoffrey78@gmail.com'}
                            target='_blank'
                            rel='noreferrer'
                            className='font-medium underline underline-offset-4'>
                            Email me
                        </a>
                        .
                    </div>
                </div>
            </div>
        </footer>
    );
}
