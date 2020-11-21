import React, { FC, useMemo } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SCREENS } from '../constants';
import { Splash, Home, ConnectionDetails } from '../screens';

const { Navigator, Screen } = createStackNavigator();

interface Stack {
  key: number;
  name: string;
  component: FC;
}

export const Navigation = () => {
  const stack: Stack[] = useMemo(
    () => [
      { key: 0, name: SCREENS.splash, component: Splash },
      { key: 1, name: SCREENS.home, component: Home },
      { key: 2, name: SCREENS.connectionDetails, component: ConnectionDetails },
    ],
    [],
  );

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {stack.map(({ name, component, key }) => (
          <Screen
            key={key}
            name={name}
            component={component}
            options={
              // fade transition applies only to splash and home screens
              name === SCREENS.splash || name === SCREENS.home
                ? {
                    cardStyleInterpolator: ({ current }) => ({
                      cardStyle: { opacity: current.progress },
                    }),
                    transitionSpec: {
                      open: {
                        animation: 'timing',
                        config: { duration: 1000 },
                      },
                      close: {
                        animation: 'timing',
                        config: { duration: 1000 },
                      },
                    },
                  }
                : undefined
            }
          />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};
