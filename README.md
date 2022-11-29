# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
The application is a bakery shop app that allows the users to purchase baked goods from a set menu.The app includes a sorting and filter mechanism that shows the users all the items in the shop in a price-descending or ascending orders. The mechanism also allows the page to exhibit items in a particular baked goods catergory (cakes, desserts and etc.). By adding the wanted items into the cart, the users can see the quantities of each goods they are purchasing and the final total price including the shipping costs. 

### Usability Principles Considered
-> Efficiency: by putting both a remove and add button in each card, we allow the users to change quantities of their desired gods in the most efficient manner. The total price automatically calculated for users in the cart also facilitate the check out process.

-> Controllability / customizability: by providing three orders for sorting and four catergories for filtering, the app gives much controls to the users to exhibit the items they desire.

-> Consistency: all the buttons deployed use MUI package to keep the page's element as consistent as possible. 

-> Feedback: every operation that the users do on the page receive visual feedbacks (element updates in the filter/sort menu and cart)

### Organization of Components
The organization of components in this application uses object-oriented programming schedme. There are 6 components: header, main, basket, filter, product and each of them is a react functional component. Header, main and basket are the three main blocks of the page, each presenting their own information. Header is the simpliest of the three, governing one hyperlink that allows the users to return to the homepage (this will be useful if more pages are deployed in the future). Main is the component that maps all the information passed down from App.js to 15 Product components. Each product components presents a card (using MUI) containing key information about the corresponding baked product, including its image, name, description of the product, category it falls into, and price. The basket component is the most complicated of the three components. It contains the cart which exhibits the quantity and price of each item purchased, and the filter component. Placing filter component as the child of the basket component is purely for css stylying convenience. Since I places main as column-2 and the basket as column-1, it is visually more pleasing to put the filter on the top of the cart. 

### How Data is Passed Down Through Components
The product information is extracted from a json file and passed down as a prop to every level of the component. In App,js, I also define four handler functions, onAdd, onRemove, sortProducts and filterProducts. The first two are passed down as props from App.js to two routes, first one being Main to Products, and second one being Basket 

### How the User Triggers State Changes


