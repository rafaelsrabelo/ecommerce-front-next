const { styled } = require("styled-components");

export const TopContent = styled.div`
    background-color: ${props => props.theme.app};
    color: ${props => props.theme.white};
    padding: 50px 0;
`

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 40px;
    
    align-items: center;

    img {
        max-width: 100%;
    }
`

export const Column = styled.div`
    display: flex;
    align-items: center;
`

export const Center = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    margin: 0;
    font-weight: normal;
  }

  p {
    color: ${props => props.theme.text};
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  gap: 15px;
`