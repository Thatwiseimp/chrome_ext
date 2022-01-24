const axios = require('axios');
const {XMLParser} = require('fast-xml-parser')

var domains = ['devops','aws','software','blockchain','web3','react','python','frontend','backend','java','kotlin','golang','p5js']

var index = Math.ceil( Math.random() * domains.length )

var sites = ['https://dev.to/feed','https://news.ycombinator.com/rss']
const xmlparser = new XMLParser()
window.onload = 
        async function fetch(){
            const res = await axios.get('https://dev.to/feed/tag/'+domains[index])
            const articles = xmlparser.parse(res.data).rss.channel.item.map(article=>{
                return{
                    link: article.link,
                    title: article.title,
                    author: article.author
                }
            })
            // const articles = parser.parse(res.data).rss.channel.item.map(article => { 
            //     var content = document.createElement("P");               // Create a <p> element
            //     content.innerText = article.title + '\n' + article.link + '\t \t \t' + article.author;               // Insert text
            //     document.body.appendChild(content);  
            // })

            articles.forEach(article => {
                var content = document.createElement("P");
                var link = document.createElement("a");
                link.setAttribute('href',article.link);     
                link.innerText=article.link;         // Create a <p> element
                content.innerText = '\n' + '-- ' + article.title + '\t' +'  --  ' + article.author + ' --';               // Insert text
                document.body.appendChild(content);  
                document.body.appendChild(link)
            });
            //const content = JSON.parse(articles);
            //document.getElementById("response").innerHTML = content.title + ", " + content.link;
            console.log(index)
        }
    
    

