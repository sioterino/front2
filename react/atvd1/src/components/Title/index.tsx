interface TitleProps {
    text: string
}

const Title = ({ text = "Page Title" }: TitleProps) => {
    return (<h1>{text}</h1>)
}

export default Title
