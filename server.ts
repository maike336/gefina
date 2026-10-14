import express, { request, response } from 'express';

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


const app = express();

app.get('/api/health', (request, response) => {
    response.status(200).json({ success: {
        status: 200,
        message: 'Server is running.'
    }});
});

app.get('/api/invoices', (request, reponse) => {
    reponse.status(200).json(invoices)
})

app.get('/api/invoices/:id', (request, response) => {
    const id = Number(request.params.id);

    const invoice= invoices.find(element => element.id === id);

    if (!invoice) response.status (404).json({ error: {
        status: 404,
        message: 'Invoice not found.'
    }});

    response.status(200).json(invoice);
});

app.use((request, response) => {
    response.status(404).json({ error: {
        status: 404,
        message: 'Resource not found.'
    }});
});

app.listen(3000); 
