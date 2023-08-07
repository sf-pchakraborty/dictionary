import React from 'react'
import './Definitions.css'

const Definitions = ({word,meanings,category}) => {
  return (
    <div className='meanings'>
    {meanings[0] && word && category === 'en' &&(
      <audio
      src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
      style={{backgroundColor:'#fff',borderRadius:10}}
      controls
      >

      </audio>
    )}
    
    {
      word === "" ? (
        <span className='subTitle'>Start by typing</span>
      ) : (
        
        meanings.map((mean)=>
          mean.meanings.map((item)=>
          item.definitions.map((def)=>
          <div
          className='singleMean'
          style={{
            backgroundColor:"white",
            color:"black"
            }}
            >
            <b>{def.definition}</b>
            <hr style={{backgroundColor:"black",width:"100%"}} />
            {
              def.example && (
                <span>
                  <b>Example:</b>
                  {def.example}
                </span>
              )
            }
            {def.synonyms && <span>
                  <b>Synonyms:</b>
                  {def.synonyms.map((synonym)=> `${synonym}, `)}
                </span>}
          </div>
          )
          )
        )
      )
    }</div>
  )
}

export default Definitions