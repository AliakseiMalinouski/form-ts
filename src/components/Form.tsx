import React from "react";
import { DataSubmit } from "../App";

interface FormI {
    onSubmitParent: (data: DataSubmit) => void;
}

type FormFileds = {
    email: HTMLInputElement,
    password: HTMLInputElement,
    remember: HTMLInputElement
}

export const Form: React.FC<FormI> = ({onSubmitParent}) => {

    const onSubmitChild: React.FormEventHandler<HTMLFormElement & FormFileds> = (event) => {
        event.preventDefault();
        
        let form = event.currentTarget;

        let {
            email, password, remember
        } = form;

        onSubmitParent({
            email: email.value,
            password: password.value,
            remember: remember.checked
        })
    }

    console.log('render')

    return (
        <form onSubmit={onSubmitChild}>
            <input type="text" name="email" placeholder="email"/>
            <input type="text" name="password" placeholder="password"/>
            <input type="checkbox" name="remember"/>
            <button type="submit">Submit</button>
        </form>
    )
}