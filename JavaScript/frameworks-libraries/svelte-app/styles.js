import { css } from "@emotion/css";

export const Title = css`
  border-bottom: 1px solid var(--color-dark);
  padding: 0 10px 15px;
`;

export const Form = css`
    background-color: var(--bg);
    color: var(--color-dark);
    border: 1px solid var(--color);
    margin: 0 50px 25px;
    padding: 25px;
    text-align: center;
    transform: scale(1);
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.2);
    }
`;

export const Button = css`
  button {
    background-color: var(--color);
    border: 1px solid transparent;
    cursor: pointer;
    padding: 5px 10px;
    transition: border-color 0.15s;

    &:hover {
      border-color: var(--color-dark);
    }

    &[disabled] {
      opacity: 0.5;
    }
  }
`;