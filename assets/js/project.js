let projects = []
// let checkChecked = [];

let month = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
]

function addProject(event) {
    event.preventDefault()

    let name = document.getElementById("input-project-name").value
    let start = document.getElementById("input-start-date").value
    let end = document.getElementById("input-end-date").value
    let description = document.getElementById("description").value
    let image = document.getElementById("input-project-image");

    var img = URL.createObjectURL(image.files[0])

    // let libraryProject = document.getElementById("library");

    // checkChecked = [];
    // for (var i = 0; i < libraryProject.length; i++) {
    //     if (libraryProject[i].checked == true) {
    //         checkChecked.push(libraryProject[i].value)
    //     }
    // }

    let project = {
        name,
        start,
        end,
        description,
        img,
        postedAt: new Date()
        // checkChecked
    }

    projects.push(project)
    renderProjects()
}



function renderProjects() {

    let containerProjects = document.getElementById("contents")
    // let lib = checkChecked.length

    containerProjects.innerHTML = ""

    for (let i = 0; i < projects.length; i++) {
        containerProjects.innerHTML += `
<div class="card">
    <div class="contents">
        <div class="project-content">
            <h1>
                <a href="project-detail.html" target="_blank">${projects[i].name}</a>
            </h1>
            <div class="project-image">
                <img src="${projects[i].img}" alt="" style="width: 400px; padding: 5px;">
            </div>
            <span style="font-size: 15px; color: grey;">${getDistanceTime(projects[i].postedAt)}</span>
            <div class="detail-project-content">
            ${getFullTime(projects[i].postedAt)} | Black Suit
            <br><br>
                Project Start on "${projects[i].start}"<br>
                Project End on "${projects[i].end}"
            </div>
            <p>
                ${projects[i].description}
            </p>
            <div style="text-align: right;">
                <div class="btn-group">
                    <button class="btn-edit">Edit Project</button>
                    <button class="btn-delete">Delete Project</button>
                </div>
            </div>
        </div>
    </div>
</div>
        `
    }
}


function getFullTime(time) {

    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()
    
    let hour = time.getHours()
    let minute = time.getMinutes()

    return `${date} ${month[monthIndex]} ${year} ${hour}:${minute} WIB`
}

function getDistanceTime(time) {

    let distance = new Date() - new Date(time)

    let miliseconds = 1000
    let secondInMinutes = 60
    let minuteInHour = 60
    let secondInHour = secondInMinutes * minuteInHour //3600
    let hourInDay = 23

    let dayDistance = distance / (miliseconds * secondInHour * hourInDay)


    if(dayDistance >= 1){
        const dayDate = Math.floor(dayDistance) + ' day ago'
        return dayDate
    } else {
        let hourDistance = Math.floor(distance / (miliseconds * secondInHour))
        if (hourDistance > 0) {
            return hourDistance + ' hour ago'
        } else {
            let minuteDistance = Math.floor(distance / (miliseconds * secondInMinutes))
            return minuteDistance + ' minute ago'
        }
    }
}

setInterval(function () {
    renderProjects()
}, 2000)