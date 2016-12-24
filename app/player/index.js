/*eslint camelcase: "off"*/
import SC from 'soundcloud'
import {CLIENT_ID} from '../resource/constants'

SC.initialize({
  client_id: CLIENT_ID
})

export let scPlayer = null

export const startAudioStream = trackId => SC.stream(`/tracks/${trackId}`).then(player => {
  if (scPlayer) {
    scPlayer.pause()
  }
  if (player.options.protocols[0] === 'rtmp') {
    player.options.protocols = ['http', 'rtmp']
  }
  scPlayer = player
  player.play()
})
