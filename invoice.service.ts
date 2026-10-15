const invoices = [{ 
    id: 1,
    amount: 125039,
    status: 'pading',
    issueDate: '07-10-2026',
    dueDate: '05-11-2026',
    customer: {
        name: 'Construtura miridiano',
        email: 'contato@meridiano.com.br'
    }
}, {
    id: 2,
    amount: 15340,
    status: 'pading',
    issueDate: '03-04-2026',
    dueDate: '03-04-2027',
    customer: {
        name: 'zezin',
        email: 'contato@zezinsilva.com'
    }
}, {
    id: 3,
    amount: 42456,
    status: 'pading',
    issueDate: '15-11-2026',
    dueDate: '03-06-2027',
    customer: {
        name: 'alienador de alien',
        email: 'antalien@email.com'
    }
}];

export function findAllInvoinces() {
    return invoices;
}

export function findInvoincesById(id: number) {
    return invoices.find(element => element.id === id);
}