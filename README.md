# Onlemma Draft Version

This project is demonstrating the use of firebase with cordova phone gap. 
The following operations are handeled through the app:

1. User Registration. 
2. User Login.
3. Remember me feature. 
4. Create a new order (Write Operation).
5. Delete a order (Delete Operation).
6. Load all orders (Read Operation).
7. Update name (Update Operation). 


The current flow of the app is as follows. 

1.Splash screen(index.html)</br>
2.Home Screen(HomeScreen.html)</br>
&nbsp;&nbsp;2.a. If user has no orders, a text box will display that.</br>
&nbsp;&nbsp;2.b. If user has orders, they will be loaded into a jquery listview.</br>
&nbsp;&nbsp;2.c. If user clicks on the menu, Log out and profile buttons will be displayed.</br>
&nbsp;&nbsp;2.d. If user clicks on new order, a redirection to the new order page will be prompted.</br>
&nbsp;&nbsp;2.e. If user clicks on the order, a refirection to the order details page will be prompted.</br>
3.Create a new order(NewOrder.html)</br>
&nbsp;&nbsp; 3.a. When user creates a new order, a redirection will be propmted to section 2.</br>
4.Profile page (Profile.html)</br>
5.Order Details.(OrderDetails.html)</br>
&nbsp;&nbsp;5.a. User clicks delete order, a redirection will be prompted to section 2.</bt>

To notify about issues, please use the issue tracker.
Thank you!
