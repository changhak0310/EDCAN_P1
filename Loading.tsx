import React, { useRef, useEffect } from 'react';
import { Text, View, Animated } from 'react-native';
import styled from 'styled-components/native';

const FadeInView = (props: any) => {
    const fadeAnim = useRef(new Animated.Value(1)).current  // Initial value for opacity: 0
  
    React.useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 2000,
        }
      ).start();
    }, [fadeAnim])
  
    return (
      <Animated.View           
        style={{
          ...props.style,
          opacity: fadeAnim,  
          background: 'red',
          flex: 1,
        }}>
        {props.children}
      </Animated.View>
    );
  }
  
  // You can then use your `FadeInView` in place of a `View` in your components:
  export default () => {
    return (
        <FadeInView>
            <LoadingWarppar>
                <Text>하루 확인</Text>
            </LoadingWarppar>
        </FadeInView>
    )
  }

const LoadingWarppar = styled.View`
        flex: 1;
        justify-content: center;
        padding-top: 15;
        padding-bottom: 15;
        padding-left: 50;
        padding-right: 50; 
        background-color: #3fc3cca3;
        /* &>Text{
            color: "#2c2c2c";
            font-size: 30;
        } */
`