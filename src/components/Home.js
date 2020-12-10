import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert, ToastAndroid, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper'

import { Section, LoadingIcon, Logo, InputArea, TopArea, MiddleArea, BottomArea } from './styles';

const logourl = require('~/assets/images/Logo.png');

//ImageAuthor
const Michael = require('~/assets/images/MichaelJackson.png')
const Eminem = require('~/assets/images/Eminem.png')
const LinkinPark = require('~/assets/images/LinkinPark.png')

//Inputs e Icons
import SearchInput from '~/components/InputComponents/SearchInput';
import SearchIcon from '~/icons/search.svg';

import TopArtistCard from '~/components/TopArtistCard'
import ArtistCard from '~/components/ArtistCard'

import Api from '~/../routes/api'

export default () => {

  // const [musicPath, setMusicPath] = useState('');
  // const [loading, setLoading] = useState(false);

  // async function componentDidMount() {
  //   setLoading(true);
  //   // let res = await Api.getMusic();
  //   // setMusicPath(res.path);
  //   setLoading(false);
  // }

  {/* {loading && <LoadingIcon size="large" color="#FFFFFF" />} */ }
  {/* {musicPath ? <Video source={musicPath} /> : null } */ }

  return (
    <ScrollView style={{ backgroundColor: '#101010' }}>
      <Section>
        <Logo source={logourl} />
        <InputArea>
          <SearchInput
            IconSvg={SearchIcon}
            placeholder="Pesquise pela Música ou Compositor"
          />
        </InputArea>

        {/* TOP 3 */}
        <TopArea>
          <Text style={{
            color: 'white', fontSize: 16,
            fontWeight: 'bold', marginLeft: 7
          }}>TOP 3</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TopArtistCard
              ImgUrl={Michael}
              Name="Michael Jackson"
              Category="POP"
            />
            <TopArtistCard
              ImgUrl={Eminem}
              Name="Eminem"
              Category="HIP-HOP"
            />
            <TopArtistCard
              ImgUrl={LinkinPark}
              Name="Linkin Park"
              Category="ROCK"
            />
          </View>
        </TopArea>

        <View style={{ alignItems: 'flex-start', width: '100%' }}>
          <Text style={{
            color: 'white', fontSize: 16,
            fontWeight: 'bold', marginLeft: 7, marginTop: 20
          }}>MUSICAS DE HOJE</Text>
        </View>

        <MiddleArea>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
          </ScrollView>
        </MiddleArea>

        <View style={{ alignItems: 'flex-start', width: '100%' }}>
          <Text style={{
            color: 'white', fontSize: 16,
            fontWeight: 'bold', marginLeft: 7, marginTop: 20
          }}>MUSICAS MAIS TOCADAS</Text>
        </View>

        <BottomArea>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
          </ScrollView>
        </BottomArea>

        {/* TODAY MUSIC */}
      </Section>
    </ScrollView>
  );

};
