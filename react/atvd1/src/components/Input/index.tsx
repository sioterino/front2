interface InputLabelProps {
    text: string
    type: string;
    id: string;
    name: string;
    required?: boolean;
    spellCheck?: boolean;
    autoComplete?: "on" | "off";
}

const Input = ({ text, type, id, name, required, spellCheck, autoComplete }: InputLabelProps) => {
    return (
        <div className="input-label">
            <input type={type} id={id} name={name} required={required} spellCheck={spellCheck} autoComplete={autoComplete} />
            <label htmlFor={id}>{text}</label>
        </div>
    );
};

export default Input;
