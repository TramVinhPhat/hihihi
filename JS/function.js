function testRegex(value, regex) {
    return regex.test(value)
}

function customRegex(value, option) {
    let options = {
        'phone': {
            regex: /((09|03|07|08|05)+([0-9]{8})\b)/g,
        },
        'fullname': {
            regex: /^[^!@#$%^&*()_+=\-\[\]\:\'\"\;\.\?\<\>\|\\0-9]+$/g,
        },
        'email': {
            regex: /^$|^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/g            
        },
    }
    return testRegex(value, options[option].regex)
}

function validate(className) {
    const validateErrorElement = document.getElementsByClassName(className || 'error-text')
    if (validateErrorElement.length > 0) {
        for (let index = 0; index < validateErrorElement.length; ++index) {
            validateErrorElement[index].setAttribute('style', 'display: block !important')
        }
        return false
    }
    return true
}

function formatMoney (money) {
    return String(money).split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}

function handleDiffPostedDate (date='') {
    let now = new Date()
    let datePost = date === '' ? new Date(): new Date(date)
    let delta = Math.abs(now - datePost) / 1000;
    let r = {};
    let s = {
        'năm': 31536000,
        'tháng': 2592000,
        'tuần': 604800,
        'ngày': 86400,
        'tiếng': 3600,
        'phút': 60,
        'giây': 1
    };
    let results = 'vài giây trước'

    Object.keys(s).forEach(function(key){
        r[key] = Math.floor(delta / s[key]);
        delta -= r[key] * s[key];
    });

    for (let key in r) {
        if(r[key] > 0)  {
            results = `${r[key]} ${key} trước`
            break
        }
    }

    return results
}

function convertHtmlToString (content=""){
    let regex = /(?:\r\n|\r|\n)|(<br\s*\/?>)|(\\n)/mg
    let arr= [];
    if(content) {
        content = content.replace(regex, "$")
        arr = content.split("$")
    }
    return arr
}

