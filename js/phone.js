const LodePhone = async (SearchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${SearchText}`)
    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    DisplayPhone(phones)
}

const DisplayPhone = phones => {
    // console.log(phones)
    // step 1 Get contener wher to set 
    const PhoneContener = document.getElementById('Pone_contener')

    //clear phone contener cade before  adding new card 
    PhoneContener.innerHTML = ''
    //display show all button before 12 phone 
    const ShowAll = document.getElementById('show_all_Conty')
    if (phones.length > 20) {

        ShowAll.classList.remove('hidden')
    } else {
        ShowAll.classList.add('hidden')
    }
    //display lemit itea  10
    phones = phones.slice(0, 9)
    phones.forEach(phone => {
        // console.log(phone)
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
    // loading-spinner headen

    toggleLoadingSpinner(false)
}
//hendel search  

const handleSearch = () => {
    // loading-spinner desplay
    toggleLoadingSpinner(true)
    const SearchFiled = document.getElementById('Searce_Input')
    const SearchText = SearchFiled.value;
    LodePhone(SearchText)
}

// loading-spinner function 
const toggleLoadingSpinner = (IsLoading) => {
    const LoadingSpinner = document.getElementById('loading-spinner')
    if (IsLoading) {
        LoadingSpinner.classList.remove('hidden')
    } else {
        LoadingSpinner.classList.add('hidden')
    }
}

LodePhone()