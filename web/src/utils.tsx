import { InvoiceStatus } from './invoiceType.ts';

export function statusLabel(status: InvoiceStatus): string {
    return status === 'paid' ? 'Paga' : 'Pendente';
}