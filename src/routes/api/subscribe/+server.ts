import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { ECOMAIL_API_KEY } from '$env/static/private';

const ECOMAIL_LIST_ID = 5;

export const POST: RequestHandler = async ({ request }) => {
    const { name, surname, email } = await request.json();

    if (!name?.trim() || !surname?.trim() || !email?.trim()) {
        return json({ error: 'Vyplňte prosím všechna pole.' }, { status: 400 });
    }

    const response = await fetch(
        `https://api2.ecomailapp.cz/lists/${ECOMAIL_LIST_ID}/subscribe`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                key: ECOMAIL_API_KEY
            },
            body: JSON.stringify({
                subscriber_data: {
                    name,
                    surname,
                    email
                },
                trigger_autoresponders: true,
                update_existing: false,
                resubscribe: true,
                skip_confirmation: false
            })
        }
    );

    if (!response.ok) {
        const err = await response.text();
        console.error('Ecomail error:', err);
        return json({ error: 'Nepodařilo se odeslat formulář.' }, { status: 500 });
    }

    return json({ success: true });
};