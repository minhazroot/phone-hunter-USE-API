const LodePhone = async (SearchText = 13, IsShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${SearchText}`)
    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    DisplayPhone(phones, IsShowAll)
}

const DisplayPhone = (phones, IsShowAll) => {

    // step 1 Get contener wher to set 
    const PhoneContener = document.getElementById('Pone_contener')

    //clear phone contener cade before  adding new card 
    PhoneContener.innerHTML = ''
    //display show all button before 12 phone 
    const ShowAll = document.getElementById('show_all_Conty')
    if (phones.length > 20 && !IsShowAll) {

        ShowAll.classList.remove('hidden')
    } else {
        ShowAll.classList.add('hidden')
    }

    //display lemit itea  10 if not show all 
    if (!IsShowAll) {
        phones = phones.slice(0, 9)
    }
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
                        <div class="card-actions justify-center">
                            <button onclick="HandelShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
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

const handleSearch = (IsShowAll) => {
    // loading-spinner desplay
    toggleLoadingSpinner(true)
    const SearchFiled = document.getElementById('Searce_Input')
    const SearchText = SearchFiled.value;
    LodePhone(SearchText, IsShowAll)
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
//handel Show All button
const ShowAll = () => {
    handleSearch(true)
}
// handel Show Details
const HandelShowDetails = async (ProductId) => {
    // console.log('show details', ProductId);
    // lode single phone data 
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${ProductId}`)
    const Data = await res.json()
    const Details = Data.data


    PhoneDetails(Details)
}
// show phone Detals 
const PhoneDetails = (PhoneInformation) => {
    console.log(PhoneInformation)

    Show_Details_modal.showModal()

    //display details
    const DetailsContainer = document.getElementById('Detels_container')
    DetailsContainer.innerHTML = `   
    <img src="${PhoneInformation.image}" alt="">     
    <h3 class="font-bold text-lg"><span>Name:-</span> ${PhoneInformation.name}</h3>
    <p><span>brand:-</span> ${PhoneInformation.brand}</p>
    <p><span>Storage:-</span> ${PhoneInformation?.mainFeatures?.memory}</p>
    <p><span>chipSet:-</span> ${PhoneInformation?.mainFeatures?.chipSet}</p>
    <p><span>Display:-</span> ${PhoneInformation?.mainFeatures?.displaySize}</p>
    <p><span>ReleaseDate:-</span> ${PhoneInformation?.releaseDate}</p>
    <p><span>slug :-</span> ${PhoneInformation?.slug}</p>
        
    
    
    `
}

LodePhone()