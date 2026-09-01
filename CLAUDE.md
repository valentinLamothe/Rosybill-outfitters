# Rosybill Outfitters — notas del proyecto

## Pendiente antes de que el formulario de consulta funcione en producción

El formulario de "The Hunting Day" (`components/hunting-day/InquiryForm.jsx` →
`pages/api/inquire.js`) está deployado pero **falla siempre (500) a propósito**
hasta que se resuelva esto:

1. **Email de destino sin confirmar.** El código ya no tiene un fallback
   hardcodeado — antes usaba `Máxidominguez_20@hotmail.com`, que probablemente
   no es válido (Hotmail no permite tildes en la parte local del email).
   Falta que el usuario confirme la dirección real con Maxi. Una vez
   confirmada, setear `INQUIRY_TO_EMAIL` en el entorno de producción (Vercel
   → Project Settings → Environment Variables) y también actualizar el mailto:
   y el JSON-LD en `components/hunting-day/Footer.jsx` y `pages/index.js`, que
   todavía muestran la dirección con tilde.
2. **Dominio de envío temporal.** `pages/api/inquire.js` envía desde
   `hello@noreply.krono-system.com` — un dominio verificado en Resend pero de
   OTRO proyecto del usuario, usado como solución de arranque porque
   `rosybill-outfitters.com` todavía no está verificado en Resend. Funciona
   (no tiene la restricción de sandbox de `onboarding@resend.dev`), pero lo
   ideal es verificar el dominio propio en Resend (resend.com/domains) y
   volver a apuntar el `from` ahí.
3. Una vez seteado `INQUIRY_TO_EMAIL` y `RESEND_API_KEY` en Vercel, setear
   también `NEXT_PUBLIC_INQUIRY_FORM_READY=true` en el mismo redeploy — el
   botón "Send inquiry" queda deshabilitado en el cliente hasta que esta env
   var esté en `true` (ver `components/hunting-day/InquiryForm.jsx`). Después
   de deployar, hacer un envío de prueba real desde el formulario para
   confirmar entrega de punta a punta — no alcanza con que el build compile.

## Media pesado (video)

Los videos de fondo (`Hero`, `Lodge`) se sirven desde un bucket de Cloudflare
R2 (`rosybill-outfitters`), no desde `/public`. La URL base vive en
`NEXT_PUBLIC_R2_MEDIA_URL` — hay que setear esa misma env var en Vercel o el
video cae al fallback local (que sigue existiendo en `public/videos/` por las
dudas, pero no se actualiza cuando se resube algo nuevo a R2).
