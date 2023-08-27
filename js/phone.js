const LodePhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    DisplayPhone(phones)
}

const DisplayPhone = phones => {
    // console.log(phones)
    // step 1 Get contener wher to set 
    const PhoneContener = document.getElementById('Pone_contener')
    phones.forEach(phone => {
        console.log(phone)
        //step 2:creat a div 
        const phonecard = document.createElement('div')
        phonecard.classList = `card w-96 bg-base-100 shadow-xl`;
        //step 3 creat iner html 
        phonecard.innerHTML = `
        <figure>
        <img class="p-4" src="${phone.image}"/>
        </figure>
                    <div class="card-body">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>${phone.slug}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
        
        
        
        
        `
        // step 4 set appentchild 
        PhoneContener.appendChild(phonecard)



    })

}


LodePhone()