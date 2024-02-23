import { FormEvent } from "react";
import { email } from "../_config";



export default function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get('name');
    const mail = data.get('email');
    const message = data.get('msgx');

    let realMessage = `Nom: ${name}\nEmail: ${mail}\nMessage: ${message}`

    const endpoint = `mailto:${email}?subject=Demande de contact!&body=${encodeURI(realMessage)}`
    window.location.assign(endpoint);
};