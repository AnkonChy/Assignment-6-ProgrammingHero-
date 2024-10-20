const sortPetsByPrice = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pets`
  );
  const data = await response.json();
  const sortedPets = data.pets.sort((a, b) => b.price - a.price);

  displayAllPets(sortedPets);
};

//loadCategories
const loadCategories = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/peddy/categories`
  );
  const data = await response.json();
  displayCategories(data.categories);
};

// Display Categories
const displayCategories = (categories) => {
  const categoryBtnContainer = document.getElementById(
    "category-btn-container"
  );
  categories.forEach((categoryItem) => {
    const div = document.createElement("div");
    div.classList.add("flex", "justify-center", "items-center");
    div.innerHTML = `
    <button id="btn-${categoryItem.category}" onclick="petsByCategory('${categoryItem.category}')" class="py-2 px-6 lg:px-14 my-4 border-2 flex gap-5 items-center text-xl font-bold category-btn">
    <img class="" src="${categoryItem.category_icon}"/>
    ${categoryItem.category}</button>
    `;

    categoryBtnContainer.appendChild(div);
  });
};

//Load All Avaiable pets
const loadAllPets = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pets`
  );
  const data = await response.json();
  displayAllPets(data.pets);
};

//Display All pets
const displayAllPets = (pets) => {
  const allPetsContainer = document.getElementById("all-pets");
  allPetsContainer.innerHTML = "";

  if (pets.length == 0) {
    allPetsContainer.classList.remove("grid");
    allPetsContainer.innerHTML = `
    <div class="flex flex-col justify-center items-center space-y-5 bg-gray-100 p-5 rounded-xl">
    <img src="./images/error.webp"/>
    <h1 class="text-xl md:text-2xl lg:text-3xl font-bold">No Information Avaiable</h1>
    <p class="text-base md:text-lg lg:text-xl font-medium w-3/4 text-justify lg:text-center">We apologize, but it seems that there are currently no pets available in the Birds category. Please check back later, as our selection may change frequently. Thank you for your understanding!</p>
    
    </div>
    `;
    return;
  } else {
    allPetsContainer.classList.add("grid");
  }
  pets.forEach((petItem) => {
    const div = document.createElement("div");
    div.classList.add(
      "lg:col-span-4",
      "md:p-4",
      "lg:p-3",
      "border",
      "border-gray-200",
      "rounded-lg"
    );
    div.innerHTML = `
    <div class="card border border-gray-200 bg-base-100 rounded-xl">
            <figure class="px-3 pt-3">
              <img
                src="${petItem.image}"
                class="rounded-xl"
              />
            </figure>
            <div class="p-4">
              <h2 class="text-xl font-bold my-2">${
                petItem?.pet_name ? petItem.pet_name : "No Name"
              }</h2>
              <div class="space-y-1 font-light">
               <div class="flex gap-2 items-center">
               <i class="fa-brands fa-buromobelexperte"></i>
               <p>Breed: ${petItem?.breed ? petItem.breed : "Not Avaiable"}</p>
               </div>
               <div class="flex gap-2 items-center">
             <i class="fa-regular fa-calendar"></i>
               <p>Birth: ${
                 petItem?.date_of_birth ? petItem.date_of_birth : "Not Avaiable"
               }</p>
               </div>
               <div class="flex gap-2 items-center">
              <i class="fa-solid fa-mercury"></i>
               <p>Gender: ${
                 petItem?.gender ? petItem.gender : "Currently Unavaiable"
               }</p>
               </div>
               <div class="flex gap-2 items-center">
              <i class="fa-solid fa-dollar-sign"></i>
               <p>Price: ${
                 petItem?.price ? petItem.price : "No price avaiable"
               }</p>
               </div>
               <div class="flex justify-between py-3">
               <div>
                <button class="border border-gray-300 rounded px-3 py-1" onclick=likeBtnHandle('${
                  petItem.image
                }')><i class="fa-solid fa-thumbs-up"></i></button>
               </div>
               <div>
                 <button onclick="loadAdopt(event)"
                 class="text-btnPrimary font-bold border border-gray-300 rounded px-3 py-1">Adopt</button></div>
               <div>
                 <button onclick="loadCardDetails(${
                   petItem.petId
                 })" class="text-btnPrimary font-bold border border-gray-300 rounded px-3 py-1">Details</button></div>
               </div>
              </div>
            </div>
          </div>
    `;

    allPetsContainer.appendChild(div);
  });
};

//Fetch Pets by Category
const petsByCategory = async (category) => {
  // remove
  removeActiveClass();
  const activeBtn = document.getElementById(`btn-${category}`);
  activeBtn.classList.add("active");
  const allPetsContainer = document.getElementById("all-pets");
  allPetsContainer.innerHTML = `
  <div class="col-span-12 flex items-center justify-center">
   <span class="loading loading-infinity loading-lg"></span>
  </div>
  `;
  setTimeout(async function () {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/peddy/category/${category}`
    );
    const data = await response.json();

    displayAllPets(data.data);
  }, 1000);
};

//Like btn handle
const likeBtnHandle = (thumbnail) => {
  const thumbnailContainer = document.getElementById("thumbnail-container");
  const div = document.createElement("div");
  div.classList.add("col-span-6", "mt-2");
  div.innerHTML = `
   <div class="p-2"><img src="${thumbnail}" class="rounded-lg"/></div>
  `;

  thumbnailContainer.appendChild(div);
};

//load card details
loadCardDetails = async (petId) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pet/${petId}`
  );
  const data = await response.json();
  displayDetails(data.petData);
};

//display card details

const displayDetails = (petData) => {
  const detailsContainer = document.getElementById("modal-content");

  detailsContainer.innerHTML = `
  <img class="rounded-xl w-full" src="${petData.image}"/>
  <div class="">
      <div class="p-4 space-y-3">
              <h2 class="text-xl font-bold my-2">${petData.pet_name}</h2>
            <div class="space-y-1 font-light flex items-center gap-14 border-b">
              <div class="my-4">
                <div class="flex gap-2 items-center">
                <i class="fa-brands fa-buromobelexperte"></i>
                <p>Breed: ${petData.breed}</p>
                </div>

                <div class="flex gap-2 items-center">
                <i class="fa-solid fa-mercury"></i>
                <p>Gender: ${petData.gender} </p>
                </div>

                <div class="flex gap-2 items-center">
                <i class="fa-solid fa-mercury"></i>
                <p>Vaccinated status: ${petData.vaccinated_status}</p>
                </div>
              </div>

              <div>
               <div class="flex gap-2 items-center">
               <i class="fa-regular fa-calendar"></i>
               <p>Birth: ${petData.date_of_birth}</p>
               </div>
              
               <div class="flex gap-2 items-center">
               <i class="fa-solid fa-dollar-sign"></i>
               <p>Price: ${petData.price}</p>
               </div>
              </div>
           </div>
      <div class="space-y-2">
        <h1 class="font-bold">Details Information</h1>
        <p class="text-gray-500">${petData.pet_details}</p>
      </div>
  </div>
  `;

  //way-1
  // document.getElementById("show-modal").click();
  //way-2
  document.getElementById("custom-modal").showModal();
};

//remove active class
const removeActiveClass = () => {
  const buttons = document.getElementsByClassName("category-btn");
  for (let btn of buttons) {
    btn.classList.remove("active");
  }
};

//load adopt btn
const loadAdopt = (event) => {
  event.target.setAttribute("disabled", "true");
  event.target.classList.add("disabled");

  let num = 3;
  const adoptModal = document.getElementById("countdown-adopt");
  const intervalId = setInterval(() => {
    num--;
    console.log(num);
    if (num === 0) {
      clearInterval(intervalId);
      // document.getElementById("count-id").innerText = "";
      my_modal_5.close();
      num = 3;
      document.getElementById("count-id").innerText = num;
    } else {
      adoptModal.classList.add(
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "text-center"
      );

      document.getElementById("count-id").innerText = num;
    }
  }, 1000);

  my_modal_5.showModal();
};
loadCategories();
loadAllPets();
