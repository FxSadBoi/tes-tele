const axios = require('axios')
const fetch = require('node-fetch')

exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

exports.isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

exports.fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (e) {
    console.log(`Error : ${e}`)
    }
}

exports.tinyurl = async (url) =>{
     try {
     let { data } = await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)
     return data
     } catch (e) {
     console.log(`Error : ${e}`)
     }
}

exports.format = async(seconds) => {
function pad(s){
return (s < 10 ? `0` : ``) + s;
}
var hours = Math.floor(seconds / (6060));
var minutes = Math.floor(seconds % (6060) / 60);
var seconds = Math.floor(seconds % 60);
return pad(hours) + ` H,` + pad(minutes) + ` M,` + pad(seconds) + ` S`;
}
 
exports.UrlOri = async(url) =>{
 try {
    let data = await fetch(url)
    return data.url
    } catch (e) {
    console.log(`Error : ${e}`)
 }
}