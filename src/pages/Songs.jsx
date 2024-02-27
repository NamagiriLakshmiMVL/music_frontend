import React, { useState, useEffect, useRef } from 'react'

import axios from "axios"

import sound from "../Audio/Katchi_Sera.mp3"
import { SongDetails } from './SongDetails';


export function Songs(props) {
   const [rows, setRows] = useState([])
   const [isplaying, setIsplaying] = useState(false)
   const [songArray, setSongArray] = useState([])
   const [currentsong, setCurrentsong] = useState()
   useEffect(() => {
      const fetchData = async () => {
         try {
            const { data: { data }, } = await axios.get('http://localhost:1337/api/music-players?populate=*');
            const songArray = await data.map((song) => ({
               title: song.attributes.title,
               artist: song.attributes.artist,
               img_src: "http://localhost:1337" + song.attributes.image_src.data[0].attributes.url,
               music_src: "http://localhost:1337" + song.attributes.music_src.data[0].attributes.url,
               updatedAt: song.attributes.updatedAt

            }))
            await setRows(songArray)
            await setCurrentsong(rows[0])

         }
         catch (err) {
            console.log(err)
         }
      };
      fetchData();
   }, [])

   const onPlaying = async () => {
      const duration = audioElem.current.duration;
      const ct = audioElem.current.currentTime;

      await setCurrentsong({ ...currentsong, "progress": ct / duration * 100, "length": duration })
   }

   useEffect(() => {
      if (isplaying) {
         audioElem.current.play();
      }
      else {
         audioElem.current.pause()
      }
   }, [isplaying])

   const audioElem = useRef();


   return (
      <div>
         {/* <pre>{JSON.stringify(currentsong,null,2)}</pre> */}
         <audio src={currentsong.music_src} ref={audioElem} onTimeUpdate={onPlaying}></audio>
         <SongDetails rows={rows} setRows={setRows} isplaying={isplaying} setIsplaying={setIsplaying} audioElem={audioElem} currentsong={currentsong} />
      </div>
   )
}
