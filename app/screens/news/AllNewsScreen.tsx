import * as React from "react";

import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { CarouselSlider } from "../../components";
import SectionListNews from "../../components/sections/sections";
import { useModalize } from "../../hooks/useModalize";
import { color } from "../../theme";
const ImageDemo = require("../../../assets/images/app-notFoundImage.png")
interface AllNewsScreenProps { }

const AllNewsScreen: React.FC<AllNewsScreenProps> = (props: AllNewsScreenProps) => {
  const { ref, open, close } = useModalize();
  React.useEffect(() => {
    if (!ref.current) return
    open()
    return () => {
      // clearEffect
    };
  }, [ref.current]);

  const DATA = React.useMemo(() => [
    {
      title: "Tin mới nhất",
      data: [{
        titleContent: "PM demands TikTok take down graphic video",
        tag: "GD & ĐT",
        image: ImageDemo
      }, {
        titleContent: "PM demands TikTok take down graphic video",
        tag: "GD & ĐT",
        image: ImageDemo
      }, {
        titleContent: "PM demands TikTok take down graphic video",
        tag: "KT & XH",
        image: ImageDemo
      }, {
        titleContent: "PM demands TikTok take down graphic video",
        tag: "Chính trị",
        image: ImageDemo
      }, {
        titleContent: "PM demands TikTok take down graphic video",
        tag: "QP & AN",
        image: ImageDemo
      }],
    },
    {
      title: "Tin Xem Nhiều",
      data: [{
        titleContent: "PM demands TikTok take down graphic video",
        tag: "GD & ĐT",
        image: ImageDemo
      }, {
        titleContent: "PM demands TikTok take down graphic video",
        tag: "GD & ĐT",
        image: ImageDemo
      }, {
        titleContent: "PM demands TikTok take down graphic video",
        tag: "KT & XH",
        image: ImageDemo
      }, {
        titleContent: "PM demands TikTok take down graphic video",
        tag: "Chính trị",
        image: ImageDemo
      }, {
        titleContent: "PM demands TikTok take down graphic video",
        tag: "QP & AN",
        image: ImageDemo
      }],
    },
  ], [])



  return (
    <View style={styles.container}>
      <CarouselSlider type="images" />
      <View style={styles.contentContainer}>
        <SectionListNews
          data={DATA}
          horizontal={false}
          styleSections={{
            width: '100%',
            paddingLeft: 16,
            paddingRight: 16,
          }}
        />
        {/* <Modalize ref={ref}
          sectionListProps={{
            sections: DATA,
            horizontal: false,
            style: {
              width: '100%',
              paddingLeft: 16,
              paddingRight: 16,
            },
            ListEmptyComponent: () => <ActivityIndicator />,
            renderItem: (props) => <ItemSection key={props.index} {...props}></ItemSection>,
          }}
          snapPoint={300}
          withHandle={false}
        >
        </Modalize> */}
      </View>
    </View >
  )
}

export default AllNewsScreen

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: color.palette.white
  },
  contentStack: {},
})

/* 
View style={styles.contentContainer}>
            <SectionListNews
              data={DATA}
              horizontal={false}
              style={{
                width: '100%',
                paddingLeft: 16,
                paddingRight: 16,
              }}
              ListEmptyComponent={() => <ActivityIndicator />}
              renderItem={(props) => <ItemSection key={props.index} {...props}></ItemSection>}
            />
          </View> */