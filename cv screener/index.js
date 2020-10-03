console.log("this is the project for the screening of the cv of the applicants");
//the array of the objects contains the information regarding the candidates

const data = [
    {
        name: "Harry",
        age: 18,
        place: "Kolkata",
        language: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name: "Sayan",
        age: 18,
        place: "Rajasthan",
        language: "Python",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/men/78.jpg"
    },
    {
        name: "Aritra",
        age: 18,
        place: "Manglore",
        language: "Java",
        framework: "React",
        image: "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
        name: "Pravesh",
        age: 26,
        place: "Allahabad",
        language: "c++",
        framework: "Socketio",
        image: "https://randomuser.me/api/portraits/men/25.jpg"
    },
    {
        name: "Uttkarsh",
        age: 58,
        place: "Jalandhar",
        language: "Javascript",
        framework: "Express",
        image: "https://randomuser.me/api/portraits/men/99.jpg"
    },
    {
        name: "Rohit",
        age: 22,
        place: "Patna",
        language: "Ruby",
        framework: "Onrails",
        image: "https://randomuser.me/api/portraits/men/43.jpg"
    }

]

//CV iterator for the iteration of the cv

function cvIterator(profile) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < profile.length) {
                return {
                    value: profile[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}


//button listenr for the next button
let next=document.getElementById("next");
next.addEventListener("click",nextCV);
const candidates=cvIterator(data);
nextCV();

function nextCV(){
    const currCandidate=candidates.next().value;
    let image=document.getElementById("image");
    let profile=document.getElementById("profile");
    if(currCandidate!=undefined){
    profile.innerHTML=`
    <div class="card text-center" style="width: 19rem; margin: 15px 116px;">
        <img src="${currCandidate.image}" class="card-img-top" alt="the profile is currently unavailable">
        <div class="card-body">
            <p class="card-text">
            <b>Name</b>:${currCandidate.name}
            <br>
            <b>Age</b>:${currCandidate.age}
            <br>
            <b>Place</b>:${currCandidate.place}
            <br>
            <b>Language</b>:${currCandidate.language}
            <br>
            <b>Framework</b>:${currCandidate.framework}
            <br>
            </p>
        </div>
  </div>`
    }
    else{
        alert("End of the candidate Application");
        window.location.reload();
    }
    
}
