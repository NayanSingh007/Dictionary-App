import React from "react";

function Output({data}){

    if (data.title){
        return (
            <div>
                <h3>No Definitions Found</h3>
                <p>Sorry pal, we couldn't find definitions for the word you were looking for.</p>
            </div>
        )
    }

    if (data[0]){
        const {word,phonetics, meanings,sourceUrls} = data[0];
        return (
            <div>
                <h2>{word} <span>{phonetics[0].text}</span></h2>
                {console.log(meanings[0])}
                {meanings.map((meaning,index) => {
                    return (
                        <dl key={new Date().getTime() + index}>
                            <dt>{meaning.partOfSpeech}</dt>
                            {meaning.definitions.map((defin, i) => {   
                                return(
                                    <dd key={new Date().getTime() + 100 + i} className={i > 3 ? 'moreItems' : ''}>{i+1}. {defin.definition}</dd>
                                )
                            })}
                        </dl>
                    )
                })}
                <p>Source: <a href={sourceUrls[0]}>{sourceUrls[0]}</a></p>
            </div>
    )
    } 
}
export default Output;