import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { ECOMAIL_API_KEY } from '$env/static/private';

const ECOMAIL_LIST_ID = 5;

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { name, surname, email } = await request.json();

        if (!name?.trim() || !surname?.trim() || !email?.trim()) {
            return json(
                {
                    error: 'Vyplňte prosím všechna pole.'
                },
                {
                    status: 400
                }
            );
        }

        console.log('API KEY EXISTS:', !!ECOMAIL_API_KEY);
        console.log('LIST ID:', ECOMAIL_LIST_ID);

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

        const responseText = await response.text();

        console.log('ECOMAIL STATUS:', response.status);
        console.log('ECOMAIL RESPONSE:', responseText);

        if (!response.ok) {
            return json(
                {
                    error: responseText || 'Nepodařilo se přihlásit.'
                },
                {
                    status: 500
                }
            );
        }

        return json({
            success: true
        });
    } catch (error) {
        console.error('SERVER ERROR:', error);

        return json(
            {
                error: 'Server error.'
            },
            {
                status: 500
            }
        );
    }
};