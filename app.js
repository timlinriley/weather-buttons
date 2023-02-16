// query selector > create element > set attribute > innerhtml/append to element


// function sunny(){
//     let screen = document.querySelector('.screen')
//     document.querySelector('.weather').addEventListener('click', function(){ 
//     screen.classList.toggle('sunny')
//         })
//     }

//     function raining(){
//         let screen = document.querySelector('.screen')
//         document.querySelector('.weather').addEventListener('click', function(){ 
//         screen.classList.toggle('raining')
//             })
//         }

//     function snowing(){
//         let screen = document.querySelector('.screen')
//         document.querySelector('.weather').addEventListener('click', function(){ 
//         screen.classList.toggle('snowing')
//             })
//         }

//     function cloudy(){
//         let screen = document.querySelector('.screen')
//         document.querySelector('.weather').addEventListener('click', function(){ 
//         screen.classList.toggle('cloudy')
//             })
//         }

//     function windy(){
//         let screen = document.querySelector('.screen')
//         document.querySelector('.weather').addEventListener('click', function(){ 
//         screen.classList.toggle('windy')
//             })
//         }   
// 
// 
        weather ={
            sunny:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76CBgqxdweFRXRiYcH1M8CnVt8R0h059Osw&usqp=CAU" ,
            raining: "https://media.istockphoto.com/photos/transparent-umbrella-under-rain-against-water-drops-splash-background-picture-id1257951336?b=1&k=20&m=1257951336&s=612x612&w=0&h=Va0rZR8NbcpCMfQnA-ogXX4tmQP6SwCk47t8Z6-EQu0=",
            snowing:"https://i.pinimg.com/originals/95/e8/2d/95e82d311a9c58d3f5e758c1d472f994.gif" ,
            cloudy:'https://www.bridgemi.com/sites/default/files/styles/full_width_image/public/2023-01/clouds.jpg?itok=NcX5jLYh' ,
            windy: "https://s7d2.scene7.com/is/image/TWCNews/windy_dogcrop_jpg",
        }
        temp = {
            sunny: 88,
            raining: 55,
            snowing: 28,
            cloudy: 64,
            windy: 48,
        }

        description = {
            sunny: "Sunny weather occurs whenever there is no precipitation and few clouds present to cover the sun",
            raining:"Rainy days are most often known to contribute to depression and sadness. This is due to the dip in serotonin levels caused by lack of sunshine. The dip in serotonin levels also contributes to food cravings for comfort foods and carbohydrates because they boost serotonin levels." ,
            snowing: "Snowfall means a fall of snow. Snowstorm is a heavy fall of snow, especially with a high wind. Blizzard is a severe snowstorm with high winds and low visibility. Frost is the thin, white layer of ice that forms when the air temperature is below the freezing point of water, especially outside at night",
            cloudy: "A cloudy sky tells you that rain's on the way, while a cloudy pond or a cloudy glass of water isn't translucent — you can't see through it. You can also describe an issue, thought, or memory as cloudy when it's vague or half-remembered or unclear.",
            windy: "indy is a sustained wind speed from 20-30 mph. What makes a very windy day? Sustained winds between 30-40 mph. How about strong, dangerous, high and damaging winds? Try 40-73 mph sustained",
        }
//     const changeSunny = () =>{
// 
//         let screen = document.querySelector('.screen')
//         let weatherImg = document.createElement('img');
//         weatherImg.setAttribute('src', weather.sunny)
//         weatherImg.setAttribute('class', 'screenpic')
//         screen.append(weatherImg)
//     }
//     const changeRaining = () =>{

//         let screen = document.querySelector('.screen')
//         let weatherImg = document.createElement('img');
//         weatherImg.setAttribute('src', weather.raining)
//         weatherImg.setAttribute('class', 'screenpic')
//         screen.append(weatherImg)
//     }

//     const changeSnowing = () =>{

//         let screen = document.querySelector('.screen')
//         let weatherImg = document.createElement('img');
//         weatherImg.setAttribute('src', weather.snowing)
//         weatherImg.setAttribute('class', 'screenpic')
//         screen.append(weatherImg)
//     }

//     const changeCloudy = () =>{

//         let screen = document.querySelector('.screen')
//         let weatherImg = document.createElement('img');
//         weatherImg.setAttribute('src', weather.cloudy)
//         weatherImg.setAttribute('class', 'screenpic')
//         screen.append(weatherImg)
//     }

//     const changeWindy = () =>{

//         let screen = document.querySelector('.screen')
//         let weatherImg = document.createElement('img');
//         weatherImg.setAttribute('src', weather.windy)
//         weatherImg.setAttribute('class', 'screenpic')
//         screen.append(weatherImg)
//     }
const changeSunny = () =>{
let firstPic = document.querySelector('.sImg')
firstPic.setAttribute('src', weather.sunny)
let degrees = document.querySelector('.temptext')
degrees.innerHTML = temp.sunny
let desc = document.querySelector('.descriptiontext')
desc.innerHTML = description.sunny
}

const changeSnowing = () =>{
    let firstPic = document.querySelector('.sImg')
    firstPic.setAttribute('src', weather.snowing)
    let degrees = document.querySelector('.temptext')
    degrees.innerHTML = temp.snowing
    let desc = document.querySelector('.descriptiontext')
    desc.innerHTML = description.snowing
    }

const changeRaining = () =>{
    let firstPic = document.querySelector('.sImg')
    firstPic.setAttribute('src', weather.raining)
    let degrees = document.querySelector('.temptext')
    degrees.innerHTML = temp.raining
    let desc = document.querySelector('.descriptiontext').desc.innerHTML = description.raining
    
    }

const changeCloudy = () =>{
    let firstPic = document.querySelector('.sImg')
    firstPic.setAttribute('src', weather.cloudy)
    let degrees = document.querySelector('.temptext')
    degrees.innerHTML = temp.cloudy
    let desc = document.querySelector('.descriptiontext')
    desc.innerHTML = description.cloudy
    }

const changeWindy = () =>{
    let firstPic = document.querySelector('.sImg')
    firstPic.setAttribute('src', weather.windy)
    let degrees = document.querySelector('.temptext')
    degrees.innerHTML = temp.windy
    let desc = document.querySelector('.descriptiontext')
    desc.innerHTML = description.windy
    }

dogPics = {
    lab: 'https://i0.wp.com/deltawaterfowl.org/wp-content/uploads/2020/06/The-Two-Labrador-Retrievers.jpg?resize=1170%2C614&ssl=1',
    gsp: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Duitse_staande_korthaar_10-10-2.jpg',
    gs: 'https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg',
    dalm: 'https://cdn.britannica.com/49/236049-050-AEEBDD63/Dalmation-dog-brown-and-white.jpg'

}

dogStats = {
    lab: 'Height: 22-24 inches Weight: 64-79 lbs',
    gsp: 'Height: 23-25 inches Weight: 55-70 lbs',
    gs: 'Height: 24-26 inches Weight: 66-88 lbs',
    dalm: 'Height 19-24 inches Weight: 45-70 lbs'

}

dogBlurb = {
    lab: 'Labrador Retriever, also called Labrador and Lab, breed of sporting dog that originated in Newfoundland and was brought to England by fishermen about 1800. It is an outstanding gun dog, consistently dominating field trials. Standing 21.5 to 24.5 inches (55 to 62 cm) tall at the withers and weighing 55 to 80 pounds (25 to 36 kg), it is more solidly built than other retrievers and has shorter legs. Distinctive features include its otterlike tail, thick at the base and tapered toward the end, and its short dense coat of black, brown (“chocolate”), or yellow.',
    gsp: 'The German shorthaired pointer is another sporting breed. Developed in Germany, it is an all-purpose dog that can track game as well as point and retrieve game in water. It is about the size of a pointer and has a short coat of solid liver colour or liver and gray-white.',
    gs: 'German Shepherd dog, breed of working dog developed in Germany from traditional herding and farm dogs. A strongly built and relatively long-bodied dog, the German Shepherd stands 22 to 26 inches (56 to 66 cm) tall at the withers and weighs 75 to 95 pounds (34 to 43 kg). Its dense coat consists of coarse, medium-long, straight or slightly wavy outer hair and soft short inner hair. The colour ranges from white or pale gray to black and is commonly gray and black or black and tan. Noted for intelligence, alertness, and loyalty, the German Shepherd is used as a guide dog for the blind and as a watchdog and also serves in police and military roles.',
    dalm: 'Dalmatian, dog breed named after the Adriatic coastal region of Dalmatia, Croatia, its first definite home. The origins of the breed are unknown. The Dalmatian has served as a sentinel, war dog, fire department mascot, hunter, shepherd, and performer. It is best known, however, as a coach or carriage dog, functioning as an escort and guard for horse-drawn vehicles. A sleek, symmetrically built, short-haired dog, the Dalmatian is characterized by its dark-spotted white coat. The pups are born white, and the spots develop a few weeks after birth.'

}

const lab = () =>{
let pic = document.querySelector('.dogImg')
pic.setAttribute('src', dogPics.lab)
let stats = document.querySelector('.dogBox')
stats.innerHTML = dogStats.lab
let blurb = document.querySelector('.dogText')
blurb.innerHTML = dogBlurb.lab
} 

const gsp = () =>{
    let pic = document.querySelector('.dogImg')
    pic.setAttribute('src', dogPics.gsp)
    let stats = document.querySelector('.dogBox')
    stats.innerHTML = dogStats.gsp
    let blurb = document.querySelector('.dogText')
    blurb.innerHTML = dogBlurb.gsp
}

const gs = () =>{
    let pic = document.querySelector('.dogImg')
    pic.setAttribute('src', dogPics.gs)
    let stats = document.querySelector('.dogBox')
    stats.innerHTML = dogStats.gs
    let blurb = document.querySelector('.dogText')
    blurb.innerHTML = dogBlurb.gs
}

const dalm = () =>{
    let pic = document.querySelector('.dogImg')
    pic.setAttribute('src', dogPics.dalm)
    let stats = document.querySelector('.dogBox')
    stats.innerHTML = dogStats.dalm
    let blurb = document.querySelector('.dogText')
    blurb.innerHTML = dogBlurb.dalm
}

const ev = document.querySelector('.dog1');
ev.addEventListener('click', lab)

const ev2 = document.querySelector('.dog2');
ev2.addEventListener('click', gsp)

const ev3 = document.querySelector('.dog3');
ev3.addEventListener('click', gs)

const ev4 = document.querySelector('.dog4');
ev4.addEventListener('click', dalm)
    