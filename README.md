# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Payment Integration
- making well ui
- now making create order api in backend
Payment Integration Steps
1. Create Account

Sign up on Stripe (or your chosen payment gateway like Razorpay).

Verify your account and get access to the Dashboard.

2. Get API Keys

Go to the Developer section.

Copy Publishable Key (for frontend) and Secret Key (for backend).

Use Test Mode keys during development.

3. Setup Frontend

Add a payment button (e.g., “Buy Now” or “Subscribe”).

When clicked, send a request to your backend to create a checkout session (or order).

4. Setup Backend

Install the Stripe (or Razorpay) SDK.

Create an endpoint to handle order/checkout creation.

Pass amount, currency, and customer details to generate a checkout session or payment order.

Return the session ID (or order ID) to the frontend.

5. Redirect User

On the frontend, redirect the customer to the checkout page using the session/order ID.

The user completes the payment on Stripe’s secure page.

6. Webhooks (Payment Confirmation)

Create a webhook endpoint in your backend.

Add the Webhook URL inside the Stripe Dashboard → Developers → Webhooks.

Select events you want to listen to (e.g., checkout.session.completed, payment_intent.succeeded).

Stripe will send payment confirmation data to this endpoint after a successful payment.

7. Verify Events

Use the Webhook Secret (provided by Stripe) to verify events.

Always confirm the event’s signature before processing.

8. Save Payment Details

From the webhook event payload, extract payment details (ID, amount, status, customer email, etc.).

Store the information in your database for records.

9. Update User Access

After confirming successful payment, update the user’s account (e.g., give premium access, mark as paid).

10. Go Live

Test thoroughly with test cards in Test Mode.

Once everything works, switch keys to Live Mode and start accepting real payments.
