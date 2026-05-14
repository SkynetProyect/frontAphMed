import { useState } from "react";

/**
 * The following is a custom hook for managing form state in a React component. 
 * It takes an initial values object and a submit handler function as arguments. 
 * The hook returns the current form state, a function to update the form state, and handlers for input changes and form submission.
 * as i know i will forget this shit, this is a reminder for future lenin:
 * new () => T means this will recieve a callable with constructor class.
 * the other one just receive a function that MUST return void
 */
export default function useForm<T>(initialValues: new () => T, onSubmit: (form: T) => void) {
    const [form, setForm] = useState<T>(new initialValues());

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm({
        ...form,
        [name]: value
        });
    };

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault(); // evita recargar la página
        console.log("Datos enviados:", form);
        onSubmit(form);
    };

    return {
        form,
        setForm,
        handleChange,
        handleSubmit
    };

}