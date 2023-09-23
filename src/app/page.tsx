import Image from 'next/image'
import Header from './header/header'
import ImageListLayout from './components/image-list-layout'
import MapView from './components/map-view'

export default function Home() {
  return (
    <>
      <div id="root-container">
        <Header></Header>
        <div id="content-container">
            <div id="left-container">
              <ImageListLayout></ImageListLayout>
            </div>
            <div id="right-container">
              <MapView></MapView>
            </div>
        </div>
      </div>
    </>
  )
}
