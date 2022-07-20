import React, { useCallback, useState } from 'react'
import { ActivityIndicator, FlatList, RefreshControl, Text, View } from 'react-native'
import { ms, ScaledSheet } from 'react-native-size-matters'
import { Screen } from '../screen/screen'
import { SeparatorCpn } from '../separator'
import ListNewItem from './ListNewItem'


interface ListNews {
    news: any[] | undefined,
    horizontal?: boolean
}

const ListNews = ({ news, horizontal = false }) => {

    const [isRefeshing, setIsRefeshing] = useState<boolean>(false)

    const renderItem = useCallback(({ item }) => {
        return (<><ListNewItem item={item} horizontal={horizontal} /></>)
    }, [])


    return (
        <FlatList
            style={[horizontal && { marginLeft: ms(-8), }]}
            horizontal={horizontal}
            keyExtractor={item => item.id.toString()}
            data={news}
            renderItem={renderItem}
            refreshControl={<RefreshControl refreshing={isRefeshing} />}
            refreshing={isRefeshing}
            ListEmptyComponent={() => <></>}
            ItemSeparatorComponent={SeparatorCpn}
            scrollEnabled />
    )
}

export default ListNews

const styles = ScaledSheet.create({
    newsContainer: {

    }
})