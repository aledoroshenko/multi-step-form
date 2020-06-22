# Multi-step form

<img src="https://cleanshot-cloud-fra.s3.eu-central-1.amazonaws.com/media/3409/C2G3Mb9vgymDpLgZQxSA6MaUh5tEmlUn3AfbDgPN.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5MF2VVMNBYBOTT5A%2F20200622%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20200622T054843Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=cf1627c9c50d321b1d44519ac16b1654d9a37c83cc19211ad2d4d9950cb27b48" width="300" />

State of current step managed by root component, state of current step form managed by Formik. On each next step interaction Formik validates and submits form, and re-renders with validation rules for a current step. There are several state-related parameters in root component to emulate async requests from the form. In real world scenario its better to use `useReducer`. A next possible step - to rework this form to XState. Deployed to https://multi-step-form.aledoroshenko.vercel.app.
