import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { color, spacing } from '../../../theme'
import { fontFamily } from '../../../theme/fonts'
import BackgroundImageItem from '../../backgroundImage/BackgroundImage'
import { Button } from '../../button/button'

export interface SectionItemProps {
    item: any
    children?: React.ReactNode
}

const SectionItem: FC<SectionItemProps> = React.memo(({ item, children }) => {
    return (
        <>
            <View style={styles.item}>
                <BackgroundImageItem image={item.image} style={styles.imageItem} />
                <View style={[{
                    flex: 1,
                    alignItems: "baseline"
                }]}>
                    <Text style={{
                        fontFamily: fontFamily.medium,
                        color: color.palette.black
                    }}>
                        {
                            item.titleContent
                        }
                    </Text>
                    <Button text={item.tag} style={styles.buttonTag}
                        textStyle={{
                            color: color.palette.white, fontSize: spacing[2] + 2, fontWeight: "600", lineHeight: spacing[3] + 1, fontFamily: fontFamily.medium,
                        }}
                    >
                    </Button>
                    {children}
                </View>
            </View>
        </>
    )
})

export default SectionItem

const styles = ScaledSheet.create({
    buttonTag: {
        paddingBottom: spacing[1] - 2,
        paddingTop: spacing[1] - 2,
        marginTop: spacing[2] + 2,
        borderRadius: spacing[4] - 1,
        backgroundColor: color.palette.black,
    },
    item: {
        width: "100%",
        flexDirection: "row",
        marginBottom: spacing[2] + 2,
    },
    imageItem: {
        width: "150@ms",
        height: "108@ms",
        marginRight: 12,
        resizeMode: "cover"
    }
})
/* 
 const ItemSection = React.memo(({ item }) => {
    return (
      <>
        <View style={styles.item}>
          <BackgroundImageItem image={item.image} style={styles.imageItem} />
          <View style={[{
            flex: 1,
            alignItems: "baseline"
          }]}>
            <Text style={{
              fontFamily: fontFamily.medium,
              color: color.palette.black
            }}>
              {
                item.titleContent
              }
            </Text>
            <Button text={item.tag} style={styles.buttonTag}
              textStyle={{
                color: color.palette.white, fontSize: spacing[2] + 2, fontWeight: "600", lineHeight: spacing[3] + 1, fontFamily: fontFamily.medium,
              }}
            >
            </Button>
          </View>
        </View>
      </>
    )
  }) */