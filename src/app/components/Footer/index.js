import Amex from "../../images/amex.png";
import Mastercard from "../../images/mastercard.png";
import Visa from "../../images/visa.png";
import Discover from "../../images/discover.png";
import { Wrapper, ImageDiv, Image, Text } from "../Footer/Footer.style";
export const Footer = () => {
  return (
    <Wrapper>
      <Text>
        <p>We care about your entertainment. Copyright © 2019–2021 felix.com</p>
      </Text>
      <ImageDiv>
        <Image src={Amex} alt="Amex logo" />
        <Image src={Visa} alt="Visa logo" />
        <Image src={Discover} alt="Discover logo" />
        <Image src={Mastercard} alt="Mastercard logo" />
      </ImageDiv>
    </Wrapper>
  );
};
