import React from 'react';
import styled from 'styled-components';

const CoffeeComponent = styled.img`
  height: 100%;
  width: auto;
`;
const CupBearer = styled.div`
  border: 0;

  background-blend-mode: soft-light, normal;
  box-sizing: border-box;
  box-shadow: 10px 10px 20px rgba(222, 152, 115, 0.64),
    -2px -4px 20px rgba(255, 129, 63, 0.6);
  border-radius: 40px;
  overflow: hidden;
  height: 2.8rem;
`;

export default function Coffee() {
  return (
    <CupBearer>
      <a
        href="https://www.buymeacoffee.com/felipelujan"
        target="_blank"
        rel="noreferrer"
      >
        <CoffeeComponent
          src="https://cdn.buymeacoffee.com/buttons/lato-orange.png"
          alt="Buy Me A NeumorphcoffeeCoffee"
        ></CoffeeComponent>
      </a>
    </CupBearer>
  );
}
