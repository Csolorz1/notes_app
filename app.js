let add = document.getElementById('add');
const filecontainer = document.getElementById('left');
let notes = [];
let noteTitles = [];
let count = 0;
add.addEventListener('click', () =>{
    let title = document.getElementById('title').value;
    let file = document.createElement('div');
    let content = document.getElementById('note').value;
    notes.push(content);
    noteTitles.push(title);
    file.classList = 'file';
    file.setAttribute('id', `${count}`);
    file.innerHTML = `${title}`;
    file.addEventListener('click', () => {
        document.getElementById('note').value = `${notes[file.id]}`;
        document.getElementById('title').value = `${noteTitles[file.id]}`;

    })
    filecontainer.appendChild(file);
    count += 1;
    document.getElementById('note').value = "";
    document.getElementById('title').value = "";

});

const files = document.querySelectorAll('.file');
files.forEach((x) => {
    x.addEventListener('click', () => {
        console.log(x.id)
        console.log(notes[x.id])
    });
});

let newbutton = document.getElementById('new');
newbutton.addEventListener('click', () => {
    document.getElementById('note').value = "";
    document.getElementById('title').value = "";
})

let deletebutton = document.getElementById('delete');
deletebutton.addEventListener('click', () => {
    if (notes.length != 0) {
        let index = notes.length - 1;
        let element = document.getElementById(`${index}`);
        element.remove();
        notes.splice(index, 1);
        noteTitles.splice(index, 1);
        count -= 1;
    }
})