import Link from "next/link"
import { Container, Logo, NavLink } from "./styles"

export default function Header () {
    return (
        <Container>
            <Logo href={'/'}>ECOMMERCE</Logo>
            <nav>
                <NavLink href={'/'}>Início</NavLink>
                <NavLink href={'/products'}>Produtos</NavLink>
                <NavLink href={'/categories'}>Categorias</NavLink>
                <NavLink href={'/cart'}>Carrinho(0)</NavLink>
            </nav>
        </Container>
    )
}