"use server"

import { Resend } from 'resend'
import CheckListEmail from '@/emails/checkListEmail';
import { json } from 'stream/consumers';
import { string } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY)

type FormData = {
    propertyName: string;
    bookingId: string;
    dateOfCheck: string;
    checkConductedBy: string;
    propertyManagerName: string;
    onSiteCareTakerName: string;
    Amenities: Record<string, boolean>;
}

export async function SendEmail(formData : FormData) {
        try {
            const { data, error } = await resend.emails.send({
                from: "UTR <support@undertheroofstays.com>",
                to: ['vishesh@gandhineru.com' , 'hello@gandhineru.com'],
                subject: `Villa Checklist for ${formData.propertyName}`,
                text: 'Villa Checklist', // Add the 'text' property
                react: CheckListEmail(formData),
            });
    
            if (error) {
                return Response.json({ error }, { status: 500 });
            }
            return data;
        } catch (error) {
            return Response.json({ error }, { status: 500 });
        }
    }
