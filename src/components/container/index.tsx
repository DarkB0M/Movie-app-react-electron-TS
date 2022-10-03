import React from 'react';
import PropTypes from 'prop-types';
 import { ImageContainer,Image,NameText,Description } from './styles';

const container: React.FC = (props:any) => {
  return(
    <>
    <div>
      <ImageContainer>
        <Image src={props.src} />
        <NameText>{props.text}</NameText>
        <Description>{props.description}</Description>
      </ImageContainer>
    </div>
    </>
  );
}
container.propTypes= {
  src:PropTypes.string,
  text:PropTypes.string,
  description:PropTypes.string
}

export default container;