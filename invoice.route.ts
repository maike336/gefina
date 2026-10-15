import { request, response, Router } from "express";

import { findAllInvoinces, findInvoincesById } from "./invoice.service.ts";

const router = Router();

router.get('/api/invoices', () => {
    const invoices = findAllInvoinces();

    response.status(200).json(invoices);
});

router.get('/api/invoices/:id', () => {
    const id = Number(request.params.id);

    const invoice = findInvoincesById(id);

    if (!invoice) response.status(404).json({ erro: {
        status: 404,
        message: 'Invoices not found.'
    }});

    response.status(200).json(invoice);
});

export default router;