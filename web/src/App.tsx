import { useState, useEffect } from 'react';

import { Invoice } from './invoiceType.ts';

import InvoiceTable from './InvoiceTable.tsx';


export default function App() {
    const [invoices, setIvoices] = useState<Invoice[]>([]);
    const [error, setError] = useState<null | String>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function getInvoices(){
            try {
                const response = await fetch('/api/invoices');
           
                const datas = await response.json();
           
                setIvoices(datas);
               } catch {
                setError('Falha ao buscar relação de faturas.');
               } finally {
                setLoading(false);
               }

     
         getInvoices();
        };

    }, []);

    if (error) return <p>{error}</p>


  return <>
    <h1>Faturas</h1>

    {loading ? <p> Carregando faturas...</p> : (
        error ? <p>{error}: <InvoiceTable datas={invoices} />
    )}
    
  </>;
}
