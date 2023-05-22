import { ButtonStyle } from "./styles";

export default function ButtonHeader ({children,...rest}) {
    return (
        <ButtonStyle {...rest}>
            {children}
        </ButtonStyle>
    )
}