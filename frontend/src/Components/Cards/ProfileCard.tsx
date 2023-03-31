import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';


export default function ProfileCard({ url }: { url: string }) {

    const header = (
        <img alt="Card" src={ url ?? "https://primefaces.org/cdn/primereact/images/usercard.png" } />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Update profile" icon="pi pi-check" />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Card footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                    Vignesh G
                </p>
            </Card>
        </div>
    )
}
