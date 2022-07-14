import firestore from "@react-native-firebase/firestore"

export const getVersion = async (): Promise<string> => {
  const versionCollection = await firestore().collection("versions").get()
  const listVersion: string[] = []
  versionCollection.forEach((versions) => {
    listVersion.push(versions.data().value)
  })
  const latestVersion: string = listVersion[versionCollection.size - 1]
  return latestVersion
  return latestVersion
}
