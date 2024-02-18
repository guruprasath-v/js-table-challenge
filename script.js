const addNew = document.querySelector('.add');
const clear = document.querySelector('.clear');
const values = document.querySelectorAll('.enter input');
const tBody = document.querySelector('.table tbody');
const save = document.querySelector('.save');
const tBody1 = document.querySelectorAll('.table tbody tr');





function toBeDeleted(){
    
    const permission = confirm(`Are you sure wanna delete this data?`);
    if(permission){
        
        
        // console.log(this.parentElement.parentElement);
        let snoo = this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
        // console.log(typeof(snoo));
        this.parentElement.parentElement.remove();
        const tBody1 = document.querySelectorAll('.table tbody tr');
        
        // console.log(tBody1[0]);
        // console.log(snoo);
        // console.log(typeof(snoo));
        snoo = parseInt(snoo);
        console.log(snoo);
        // console.log(tBody.childElementCount);
        // console.log(typeof(snoo));
        for(let i = snoo; i <= tBody.childElementCount; i++){
            tBody.children[i-1].children[0].innerText = i
        }
    }
}





function edit(){
    // console.log(this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText);
    if(confirm(`Are you sure wanna edit ?`)){

        values[0].value = this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
        values[1].value = this.parentElement.previousElementSibling.previousElementSibling.innerText;
        values[2].value = this.parentElement.previousElementSibling.innerText;
        save.style.display = 'inline';
        save.addEventListener('click', saving = ()=>{
    
                
                
            
                this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText = values[0].value;
                this.parentElement.previousElementSibling.previousElementSibling.innerText = values[1].value;
                this.parentElement.previousElementSibling.innerText = values[2].value;
    
                
    
                
                clearing();
                save.removeEventListener('click', saving);
    
                
        }
    )}


};


function clearing(){
    values.forEach((i) =>{
        i.value = "";
    });
    save.style.display = 'none';

    
}
addViaKey

function listenToKey(){
    document.addEventListener('keypress', addViaKey);
}

function addViaKey(e){
    if (e.key === 'Enter'){
        adding();
        document.removeEventListener('keypress', addViaKey);
    }
}



function adding(){
    let has = true;
    for(let i = 0; i < values.length; i++){
        if(values[i].value === ''){
            alert(`Please provide All the input values`);
            has = false;
            break;
        }
        
    }
    if(has){
        const tRow = document.createElement("tr");
        for(let i = 0; i <= 4; i++){
            if(i === 0){
                // const sno = tBody.children[0].children[tBody.childElementCount - 1].innerText;
                const tData = document.createElement("td"); 
                tData.innerText = tBody.childElementCount + 1;
                tRow.appendChild(tData);
            }
            else if(i === 4){
                const tData = document.createElement("td");
                const button1 = document.createElement("button");
                button1.innerText = "Edit";
                button1.classList.add('editing');
                const button2 = document.createElement("button");
                button2.innerText = "Delete";
                button2.classList.add('deleting');
                tData.appendChild(button1);
                tData.appendChild(button2);
                tRow.appendChild(tData);
            }
            else{
                const tData = document.createElement("td");
                tData.innerText = values[i-1].value;
                tRow.appendChild(tData);
            }

            
        }
        // console.log(tBody1[0]);

        // tRow.appendChild(tData);
        tBody.appendChild(tRow);
        clearing();
        const editClass = document.querySelectorAll('.editing'); 
        for(let i of editClass){
            i.addEventListener('click', edit);
            
        }

        const deleteClass = document.querySelectorAll('.deleting'); 
        for(let i of deleteClass){
            i.addEventListener('click', toBeDeleted);

        }

        
    }
}

addNew.addEventListener('click', adding);

clear.addEventListener('click', clearing);

for(let i = 0; i < 3; i++){
    values[i].addEventListener('keypress', listenToKey);
}


