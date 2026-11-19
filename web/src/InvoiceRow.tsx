import { Invoice } from './invoiceType.ts';

import { statusLabel } from './utils.tsx';

interface InvoiceRowProps {
    data: Invoice;
}

export default function InvoiceRow(props: InvoiceRowProps) {
    return <tr>
        <td>{props.data.customer.name}</td>
        <td>{props.data.amount}</td>
        <td>{props.data.issueDate}</td>
        <td>{props.data.dueDate}</td>
        <td>{statusLabel(props.data.status)}</td>
    </tr>;
}