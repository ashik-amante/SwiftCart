const categoryContainer = document.getElementById("category-container");
const productContainer = document.getElementById("product-container");
console.log('challu');

function SetActiveButton(clickBtn) {
  const buttons = categoryContainer.querySelectorAll('button');

  buttons.forEach(btn => {
    btn.classList.remove('bg-indigo-600', 'text-white');
    btn.classList.add('bg-gray-200');
  });

  clickBtn.classList.remove('bg-gray-200');
  clickBtn.classList.add('bg-indigo-600', 'text-white');
}

async function loadProducts(category = "") {

  productContainer.innerHTML = "<p class='text-center mt-20 flex text-2xl font-bold px'>Loading...</p>";

  let url = "https://fakestoreapi.com/products";

  if (category) {
    url = `https://fakestoreapi.com/products/category/${category}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  displayProducts(data);
}

async function loadCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();
  console.log(data);

  categoryContainer.innerHTML = "";
  const activeClasses = "bg-indigo-600 text-white";
  const inactiveClasses = "bg-gray-200 hover:bg-indigo-500 hover:text-white";

  // All button
  const allBtn = document.createElement("button");
  allBtn.innerText = "All";
  allBtn.className =
    `px-4 py-2 bg-indigo-600 text-white rounded-full ${activeClasses}`;
  allBtn.addEventListener("click", () => {
    SetActiveButton(allBtn);
    loadProducts()
  })
  categoryContainer.appendChild(allBtn);

  data.forEach(category => {
    const btn = document.createElement("button");
    btn.innerText = category;
    btn.className =
      `px-4 py-2 bg-gray-200 rounded-full hover:bg-indigo-500 hover:text-white ${inactiveClasses}`;
    btn.addEventListener("click", () => {
      SetActiveButton(btn);
      loadProducts(category);
    });

    categoryContainer.appendChild(btn);
  });
}

function displayProducts(products) {
  productContainer.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className =
      "bg-white p-4 rounded-xl shadow hover:shadow-lg transition space-y-2";

    card.innerHTML = `
      <img src="${product.image}"
        class="h-40 mx-auto object-contain mb-4"/>

      <h3 class="font-semibold text-sm mb-2">
        ${product.title.slice(0, 30)}...
      </h3>

     <div class="flex justify-between mb-5">
        <span class="text-indigo-600 font-semibold">
          $${product.price}
        </span>

        <div class="flex items-center">
          <span class="text-yellow-400 mr-1">
            ★
          </span>
          ${product.rating.rate}
        </div>
      </div>

      <div class="flex justify-between">
        <button onclick="showDetails(${product.id})"
          class="bg-gray-200 px-3 py-1 rounded">
          Details
        </button>

        <button onclick="addToCart(${product.id})"
          class="bg-indigo-600 text-white px-5 py-1 rounded">
          Add
        </button>
      </div>
    `;

    productContainer.appendChild(card);
  });
}

async function showDetails(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-content");

  content.innerHTML = `
    <h2 class="text-xl font-bold mb-4">${product.title}</h2>
    <img src="${product.image}" class="h-40 mx-auto mb-4"/>
    <p>${product.description}</p>
    <p class="font-bold mt-4">$${product.price}</p>
    
    <div class="flex justify-between mt-4">
      <button onclick="addToCart(${product.id})"
        class="bg-indigo-600 text-white px-5 py-1 rounded-xl">
        Add to Cart
      </button>
      <button onclick="closeModal()"
      class="mt-4 bg-red-500 text-white px-4 py-2 rounded">
      Close
    </button>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  loadCategories();
  loadProducts();
});

