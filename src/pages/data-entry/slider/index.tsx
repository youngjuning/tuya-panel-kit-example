import React from 'react';
import { View } from 'react-native';
import { Slider, TYText } from 'tuya-panel-kit';

import { ListView } from '@components';

export default () => {
  const [value, setValue] = React.useState(20);

  return (
    <ListView
      list={[
        {
          title: '水平滑动条 - 基础样式',
          content: (
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Slider.Horizontal
                style={{ width: 295 }}
                maximumValue={100}
                minimumValue={0}
                value={value}
                maximumTrackTintColor="rgba(0, 0, 0, 0.1)"
                minimumTrackTintColor="#4397D7"
                onSlidingComplete={v => setValue(Math.round(v))}
              />
            </View>
          ),
        },
        {
          title: '水平滑动条 - 自定义按钮',
          content: (
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Slider.Horizontal
                style={{ width: 295 }}
                maximumValue={100}
                minimumValue={0}
                value={value}
                maximumTrackTintColor="rgba(0, 0, 0, 0.1)"
                minimumTrackTintColor="#f00"
                onSlidingComplete={v => setValue(Math.round(v))}
                renderThumb={() => (
                  <View
                    style={{
                      width: 28,
                      height: 28,
                      backgroundColor: '#f00',
                      borderRadius: 14,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TYText text={String(value)} color="#fff" />
                  </View>
                )}
              />
            </View>
          ),
        },
        {
          title: '竖直滑动条',
          content: (
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Slider.Vertical
                style={{ height: 200 }}
                value={value}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#4A90E2"
                onSlidingComplete={v => setValue(Math.round(v))}
              />
              <Slider.Vertical
                style={{ height: 200, marginLeft: 90 }}
                value={value}
                minimumValue={0}
                maximumValue={100}
                maximumTrackTintColor="#f00"
                minimumTrackTintColor="#dfdfdf"
                reverseValue={true}
                onSlidingComplete={v => setValue(Math.round(v))}
                renderThumb={() => (
                  <View
                    style={{
                      width: 28,
                      height: 28,
                      backgroundColor: '#f00',
                      borderRadius: 14,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TYText text={String(value)} color="#fff" />
                  </View>
                )}
              />
            </View>
          ),
        },
      ]}
    />
  );
};