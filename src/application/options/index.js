import React from 'react';
import { OptionsCard } from './style';
import Option from './Option';

export default function Options() {
  return (
    <OptionsCard>
      {optionsList.map(item => {
        return (
          <Option {...item}></Option>
        )
      })}
    </OptionsCard>
  )
}

const optionsList = [
  {
    detail: '每日推荐',
    icon: 'icon-bridge',
    url: 'https://music.163.com/discover/recommend/taste',
    key: 111,
    path: '/playlist'
  },
  {
    detail: '私人FM',
    icon: 'icon-desert-1',
    url: 'https://music.163.com/playlist?id=3136952023',
    key: 112,
    path: '/recommend'
  },
  {
    detail: '飙升榜',
    icon: 'icon-mountains',
    url: 'https://music.163.com/discover/toplist?id=19723756',
    key: 113,
    path: '/recommend'
  },
  {
    detail: '说唱榜',
    icon: 'icon-iceberg',
    url: 'https://music.163.com/discover/toplist?id=991319590',
    key: 114,
    path: '/recommend'
  },
  {
    detail: '新歌榜',
    icon: 'icon-sea',
    url: 'https://music.163.com/discover/toplist?id=3779629',
    key: 115,
    path: '/recommend'
  },
  {
    detail: '热歌榜',
    icon: 'icon-cape',
    url: 'https://music.163.com/discover/toplist?id=3778678',
    key: 116,
    path: '/recommend'
  }
]