



function Maincontent(){

    let imgLink

fetch("https://api.imgflip.com/get_memes") 
.then(response=>response.json())
.then(resObj=> imgLink = resObj.data.memes[0].url)

    
    


    return(
        <main>
    <h1 className="maincontent--title">THIS IS AN INTRODUCTION TO MY SIMPLE PAGE</h1>
        { imgLink &&  <img src={imgLink} alt="" width="300px" height="300px" ></img> }
             <ul className="main--move" >
            <li>am willing to learn </li>
            <li>am willing to enjoy </li>
            <li>am willing to be busy </li>
            <li>am willing to learn </li>
            <li>am willing to learn </li>
         </ul>
    </main>
    )
}

export default Maincontent