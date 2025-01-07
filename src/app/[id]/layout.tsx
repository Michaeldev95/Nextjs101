



import type { Metadata } from 'next'




export const metadata: Metadata = {
    title: 'Student details',
    description: 'this is the student details',
}



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <> {children}</>



    );
}
