import { useState, useEffect } from 'react';

import { Invoice } from './invoiceType.ts';

import InvoiceTable from './InvoiceTable.tsx';

export default function App() {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [error, setError] = useState<null | string>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function getInvoices() {
            try {
                const response = await fetch('/api/invoices');
        
                const datas = await response.json();
        
                setInvoices(datas);
            } catch {
                setError('Falha ao buscar relação de faturas.');
            } finally {
                setLoading(false);
            }
        }
    
        getInvoices();
    }, []);

    return <>
        <h1>Faturas</h1>

        {loading ? <p>Carregando faturas...</p> : (
            error ? <p>{error}</p> : <InvoiceTable datas={invoices} />
        )}
    </>;
}