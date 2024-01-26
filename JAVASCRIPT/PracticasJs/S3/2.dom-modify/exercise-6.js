const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');
ul.textContent = 'LOLOLO';
document.body.appendChild(ul);
for(app of apps){
    let li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
}
