import { ButtonStyle } from "@/components/Button/styles";
import Header from "@/components/Header";
import { Center, Column, TopContent, Wrapper, WrapperButton } from "@/styles/home";

export default function Home() {
  return (
    <div>
      <Header />
      <TopContent>
        <Center>
          <Wrapper>
            <Column>
            <div>
              <h1>Ecommerce Pro</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat.
              </p>
              <WrapperButton>
                <ButtonStyle>Saber mais</ButtonStyle>
                <ButtonStyle secondary>Add ao Carrinho</ButtonStyle>
              </WrapperButton>
            </div>
            </Column>
            <Column>
              <img src="https://next-ecommerce-2023.s3.amazonaws.com/1684787626363.png" alt="" />
            </Column>
          </Wrapper>
        </Center>
      </TopContent>
    </div>
    )
}
