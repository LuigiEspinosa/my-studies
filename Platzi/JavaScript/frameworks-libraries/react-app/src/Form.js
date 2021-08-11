import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  background-color: ${(p) => p.theme.bg};
  border: 1px solid ${(p) => p.theme.color};
  margin: 0 50px 25px;
  padding: 25px;
  text-align: center;
  transform: scale(1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledButton = styled.button`
  button {
    background-color: ${(p) => p.theme.color_light};
    border: 1px solid transparent;
    cursor: pointer;
    padding: 5px 10px;
    transition: border-color 0.15s;

    &:hover {
      border-color: ${(p) => p.theme.color_light};
    }

    &[disabled] {
      opacity: 0.5;
    }
  }
`;

export default function From(props) {
  const [quantity, setQuantity] = React.useState(0);
  const { movie } = props;

  return (
    <StyledForm onMouseEnter={() => props.updateTheme()}>
      <h3>{movie.name}</h3>
      <StyledButton
        type="button"
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 0}
      >
        -
      </StyledButton>

       {quantity} 

      <StyledButton
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        disabled={movie.available <= quantity}
      >
        +
      </StyledButton>
    </StyledForm>
  );
}