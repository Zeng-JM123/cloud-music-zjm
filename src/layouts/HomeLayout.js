import React from 'react'
import {
  Header,
  CarouselWrapper,
  WhiteTheme,
  SongSheetListWrapper,
  Footer,
  RankListWrapper,
} from './style'
import CarouselComp from '../application/carousel/index'
import OptionsCard from '../application/options/index'
import SongSheetList from '../application/song_sheet/index'
import RankListCard from '../application/rank_list/index'
import Player from '../components/player/index'
import VisiblePlayerBtn from '../components/visible_player_btn/index'

export default function HomeLayout() {
  return (
    <div>
      <WhiteTheme>
        <Header>
          <i className="iconfont icon-menu"></i>
          <div className="search__body">
            <div className="search__body--mid">
              <i className="iconfont icon-search"></i>
              <span className="detail">曾佳铭</span>
            </div>
          </div>
          <i className="iconfont icon-avatar"></i>
        </Header>
        <CarouselWrapper>
          <CarouselComp />
        </CarouselWrapper>
        {/* <OptionsCard /> */}
        
        <SongSheetListWrapper>
          <div className="recommend-item__top">
            <div className="recommend-item__top__title">推荐歌单</div>
            <div className="recommend-item__top__button">更多</div>
          </div>
          <SongSheetList />
        </SongSheetListWrapper>
        <RankListWrapper>
          <RankListCard></RankListCard>
        </RankListWrapper>
      </WhiteTheme>
      <VisiblePlayerBtn />
      <Player />
      {/* <Footer>
        <li className="card-item">
          <div className="card-item__button">
            <i className="iconfont find"></i>
          </div>
          <div className="card-item__detail">发现</div>
        </li>
      </Footer> */}
    </div>
  )
}
