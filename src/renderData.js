function renderData(employees) {
    var html = "<!DOCTYPE html><html lang = 'en' ><head><link rel='stylesheet' href='style.css'/><meta charset='UTF-8'/><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>My Team</title></head><body>"
    html += '<h1 class="banner">MY TEAM</h1><div class="cardItems">'
    employees.forEach(card => {
        if (card.office){
            html += renderManager(card)
        }else if (card.school){
            html += renderIntern(card)
        }else if (card.gitUsername){
            html += renderEngineer(card)
        };
    });
    html += '</div></body>'
    return html
}

function renderManager(manager) {
    return '<div class="card"><div class="up"><h2>' + manager.name + '</h2><h2>' + manager.title + '</h2></div><div class="low"><p>' +  "ID: " + manager.id + '</p><p>' + "Email: " + manager.email + '</p><p>' +  "Office Number: " + manager.office + '</p></div></div>'
}

function renderIntern(intern) {
    return '<div class="card"><div class="up"><h2>' + intern.name + '</h2><h2>' +  intern.title + '</h2></div><div class="low"><p>' + "ID: " + intern.id + '</p><p>' +  "Email: " + intern.email + '</p><p>' + "School: " + intern.school + '</p></div></div>'
}

function renderEngineer(engineer) {
    return '<div class="card"><div class="up"><h2>' + engineer.name + '</h2><h2>' + engineer.title + '</h2></div><div class="low"><p>' +  "ID: " + engineer.id + '</p><p>' + "Email: " + engineer.email + '</p><p>' + "GitHub: " + engineer.gitUsername + '</p></div></div>'
}

module.exports = renderData;